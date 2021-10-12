import {DivStyle ,DivStyle2} from "./style";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import {getPokemons, getPokmeonsName, filtrados, generico} from '../../../actions/actions'
import Card from "./Card/Card";

function Cards()
{
    var pokemones = useSelector(state => state.pokemons);
    var filt = useSelector(state => state.pokemonsFilter);
    var pokeName = useSelector(state => state.pokemonsName);
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    var [currentPage, setCurrentPage] = useState(1);//indica la pagina actual
    const [pokesXPag] = useState(12);//la cantidad de juegos por pagina
    const pageNumber = Math.ceil(pokemones.length / pokesXPag);//divido la cantidad de juegos total, por los del paginado(15)
    const indexOfLastPost = currentPage * pokesXPag;//multiplico la pagina actual por los jegos por pag 
    const indexOfFirstPost = indexOfLastPost - pokesXPag;//resto el indexLAst a los jegos por pag 

    // var current3 = [];
    if (filt.length >= 1) 
    {
        var current2 = filt.slice(indexOfFirstPost, indexOfLastPost);
    } 
    // else if(current3)
    // {
    //     // var current3 = pokeName.slice(indexOfFirstPost, indexOfLastPost);
    //     current3.shift()
    //     current3.push(pokeName)
    // }
    else 
    {
        var current = pokemones.slice(indexOfFirstPost, indexOfLastPost);
    }
    //y aca extraigo los juegos que necesito para mostrar, con los parametros que iran cambiando eventualmente

    const nextPage = () => {//ACA SOLO SUMO EL CURRENT PAGE PARA HACER BIEN EL SLICE
        if (currentPage < pageNumber) setCurrentPage(currentPage + 1);
        else setCurrentPage(1);
    };
        
    const prePage = () => {//ACA SOLO RESTO EL CURRENT PAGE PARA HACER BIEN EL SLICE
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
        else setCurrentPage(pageNumber);
    };

    useEffect(() =>{
        dispatch(getPokemons());
    },[])

    function handleChange(e) {
        setName(e.target.value)
    }

    return(
        <div>
            <DivStyle2>
                <input onChange={(e)=> handleChange(e)} type='text'/>
                <button onClick={() => {
                    dispatch(getPokmeonsName(name))
                    dispatch(filtrados(pokeName));
                }}>Search 🔍</button>
                <button onClick={() => {
                    dispatch(filtrados(pokemones));
                }}>🔄</button>
            </DivStyle2>

            <DivStyle>
            {   
                // pokeName ? 
                //     <Card
                //     key={pokeName.id} 
                //     name={pokeName.name}
                //     image={pokeName.image}
                //     tipos={pokeName.tipos}
                //     id={pokeName.id}/>
                // :
                // current3.length >= 1 ? current3.map((pk,i) => {
                //     return <Card
                //     key={i} 
                //     name={pk.name}
                //     image={pk.image}
                //     tipos={pk.tipos}
                //     id={pk.id}/>
                // })
                // :
                filt.length >= 1 ? current2.map((pk,i) => {
                    return <Card
                    key={i} 
                    name={pk.name}
                    image={pk.image}
                    tipos={pk.tipos}
                    id={pk.id}/>
                })
                :
                current?.map((pk,i) => {
                    return <Card
                    key={i} 
                    name={pk.name}
                    image={pk.image}
                    tipos={pk.tipos}
                    id={pk.id}/>
                })
            }
            </DivStyle>
            
            <DivStyle2>
            <button onClick={() => prePage()}>Previus</button>
            <button onClick={() => nextPage()}>Next</button>
            </DivStyle2>
        </div>
    )
}

export default Cards;