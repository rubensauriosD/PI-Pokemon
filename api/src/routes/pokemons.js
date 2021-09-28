const app = require('express').Router();
const axios = require('axios');
const {Pokemon, Type} = require('../db')

app.get('/', async function (req, res) 
{   
    const {name} = req.query;
    
    if (!name) 
    {
        try 
        {
            
            const all = await getAllPokemons()
            res.json(all);
        }
        catch (error) {
            return res.status(500)
        }
    } 
    else 
    {
        try 
        {
            let pokemonsTotal = await getAllPokemons();
            let pokemonName = await pokemonsTotal.find(e => e.name.toLowerCase() === name.toLowerCase());
            if(pokemonName === undefined) {
                return res.status(404).send('Pokemon not found')
            } else {
                return res.status(200).json(pokemonName)
            }
        } 
        catch (error) {
            return res.status(404).send('El pokemon que esta intentando buscar no existe.')
        }
    }
})

app.get('/:id', async function (req, res) 
{
    const {id} = req.params;
    const allPokemons = await getAllPokemons();
    
        
    try 
    {
        if(id) {
            const pokemonId = await allPokemons.filter(e => e.id == id);
            pokemonId.length ?
            res.status(200).json(pokemonId) :
            res.status(404).send('Pokemon not found')
        }
    } 
    catch (error) {
        res.status(404).send('Pokemon no encontrado')
    }
})

app.post('/', async function (req, res) 
{
    const {name, hp, attack, defense, speed, height,weight, image,tipos,type}  = req.body;

    try 
    {

        const createdPoke = await Pokemon.create({
            name: name, 
            hp: hp,
            attack:attack,
            defense:defense,
            speed:speed,
            height:height,
            weight: weight,
            image: image,
            tipos: tipos,
        })

        await createdPoke.setTypes(type);
        //aca le debo pasar un int con el tipo 
        res.json(createdPoke)
    } 
    catch (error) {
        console.log(error);
    }
})

//============================= FUNCIONES 

const getPokemonsApi = async () => {
    const pokemonsPrimero = await axios.get("https://pokeapi.co/api/v2/pokemon") // Aca me traigo los primeros 20 pokemons de la api.
    const pokemonSegundo = await axios.get(pokemonsPrimero.data.next) // Aca me traigo los siguientes 20 pokemons.
    const totalPokemons = pokemonsPrimero.data.results.concat(pokemonSegundo.data.results) // Me guardo los 40 pokemons en una variable.

    try {
        const infoUrl = totalPokemons.map(e => axios.get(e.url)) // Accedo a la url con la info de cada pokemon.
        let infoPokemons = Promise.all(infoUrl) // Le paso un arreglo de promesas con la respuesta de cada url(info).
            .then(e => {
                let pokemon = e.map(e => e.data) // Accedo a la info de cada url de cada pokemon.
                let info = [] // Genero un arreglo de objetos con la info que necesito de cada pokemon.
                pokemon.map(e => {
                    info.push({
                        id: e.id,
                        name: e.name,
                        hp: e.stats[0].base_stat,
                        attack: e.stats[1].base_stat,
                        defense: e.stats[2].base_stat,
                        speed: e.stats[5].base_stat,
                        height: e.height,
                        weight: e.weight,
                        image: e.sprites.other.dream_world.front_default,
                        tipos: e.types.length < 2 ? [{name: e.types[0].type.name}] : [{name: e.types[0].type.name}, {name: e.types[1].type.name}]
                    })
                })
                return info;
            })
            return infoPokemons;
    } catch (error) {
        console.log(error)
    }
}

const getPokemonsDb = async () => {
    try {
        return await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const getAllPokemons = async () => {
    const apiInfo = await getPokemonsApi();
    const dbInfo = await getPokemonsDb();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

module.exports = app;