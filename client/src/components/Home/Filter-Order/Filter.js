import DivStyle from './style'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react';
import {getTypes, filtrados} from '../../../actions/actions'


function Filter(){
    var types = useSelector(state => state.types);
    var filters = useSelector(state => state.pokemonsFilter);
    var pokemons = useSelector(state => state.pokemons);
    var existentes = useSelector(state => state.pokemonsAPI);
    var creados = useSelector(state => state.pokemonsDB);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getTypes());
    },[])

    function filteredTypes(e) {
        var typ = []

        pokemons.filter((item) => {
            if (item.tipos) {
                item.tipos.forEach(element => {
                    if (element.name === e.target.value) {
                        typ.push(item)
                    }
                });
            }
        })

        filters = [...typ]
        dispatch(filtrados(filters))
    }

    function filteredExist(e) {

        if (e.target.value === 'exist') 
        {
            // for (let index = 0; index < creados.length; index++) 
            // {
            //     existentes.shift()
            // }
            dispatch(filtrados(existentes))
        }
        else
        { 
            dispatch(filtrados(creados))
        }
    }

    return(
        <DivStyle>
            <h2>Filters</h2>

            <select onChange={filteredExist}>
                <option value="exist">Existing Pokemon</option>
                <option value="create">Pokemon Created</option>
            </select>

            <select onChange={filteredTypes}>
                {
                    types && types.map((t,id) => {
                        return <option key={id}>
                            {`${t.name}`}
                        </option>
                    })
                }
            </select>

            <button onClick={() => dispatch(filtrados(pokemons))}>🔄</button>
        </DivStyle>
    )
}

export default Filter;