import { getPokemonsId } from '../../actions/actions';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Pk from './pk.js';
import {DivStyle2} from "./style";

function Pokemon(){
    const poke = useSelector(state => state.pokemonsDetail);
    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;
    
    useEffect(() => {
        dispatch(getPokemonsId(id));
    },[])

    return(
        <DivStyle2>
            <Link to='/home'>
            <button>Go back</button>
            </Link>

            {
                poke.length && <Pk key={poke[0].id}
                name={poke[0].name}
                tipos={poke[0].tipos}
                image={poke[0].image}
                hp={poke[0].hp}
                attack={poke[0].attack}
                defense={poke[0].defense}      
                speed={poke[0].speed}
                height={poke[0].height}
                weight={poke[0].weight}
                special={poke[0].specialAtack}/>
                // :
                // poke.length &&  <Pk key={poke.id}
                // name={poke.name}
                // tipos={poke.tipos}
                // image={poke.image}
                // hp={poke.hp}
                // attack={poke.attack}
                // defense={poke.defense}      
                // speed={poke.speed}
                // height={poke.height}
                // weight={poke.weight}/>
            }
        </DivStyle2>
    )
}

export default Pokemon;