import axios from 'axios';
// import {getPokemonsApi, getPokemonsDb} from '../../../api/src/routes/pokemons.js'

export function getPokemons()
{
    return function (dispatch){
        return axios.get('http://localhost:3001/pokemons/')
        .then(res => res.data)
        .then(data => {
            dispatch({
                type: 'GET_POKEMONS', payload: data
            })
        })
    }
};

export function getPokemonsId(id) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
        dispatch({ type: 'GET_POKEMON', payload: response.data });
    }
}

export function getPokmeonsName(name) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
        dispatch({ type: 'GET_NAME', payload: response.data });
    }
}

export function getTypes()
{
    return function (dispatch){
        return axios.get('http://localhost:3001/types')
        .then(res => res.data)
        .then(data => {
            dispatch({
                type: 'GET_TYPES', payload: data
            })
        })
    }
};

export function generico(pokes)
{
    return function (dispatch)
    {
        dispatch({type: 'GENERICO', payload: pokes})
    }
};

export function filtrados(pks)
{
    return function (dispatch)
    {
        dispatch({type: 'FILTRADOS', payload: pks})
    }
};
// export async function getPokesApi()
// {
//     const xd = getPokemonsApi()

//     return function (dispatch)
//     {
//         dispatch({type: 'GET_API', payload: x})
//     }
// };

// export async function getPokesDb()
// {
//     const x = getPokemonsDb()

//     return function (dispatch)
//     {
//         dispatch({type: 'GET_DB', payload: x})
//     }
// };


