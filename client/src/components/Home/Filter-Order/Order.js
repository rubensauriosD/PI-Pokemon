import DivStyle from './style'
import {useDispatch, useSelector} from 'react-redux'
import { generico } from "../../../actions/actions";

function Order(){
    var pokes = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();

    function order(e) {
        var names = pokes.map((m) => m.name);
        var attack = pokes.map((m) => m.attack);
        var specialA = pokes.map((m) => m.specialAtack);
        var o = [];

        switch (e.target.value) {
            case "asc":
                names = names.sort();
                names.forEach((n) =>{
                    pokes.forEach((element) =>{
                        if(n === element.name){
                            o.push(element);
                        }
                    });
                });
                pokes = [...o]
                // console.log(games)
                dispatch(generico(pokes))
                break;

            case "desc":
                names = names.sort().reverse();
                names.forEach((n) =>{
                    pokes.forEach((element) =>{
                        if(n === element.name){
                            o.push(element);
                        }
                    });
                });
                pokes = [...o]
                dispatch(generico(pokes))
                break;

            case "attack+":
                attack = attack.sort((a,b) => b - a);
                attack.forEach((f) => {
                    pokes.forEach((element) => {
                        if(f === element.attack){
                            o.push(element);
                        }
                    });
                });

                o = o.filter((e, i) => o.indexOf(e)=== i);
                pokes = [...o]
                dispatch(generico(pokes))
                break;

            case "attack-":
                attack = attack.sort((a,b) => a - b);
                attack.forEach((f) => {
                    pokes.forEach((element) => {
                        if(f === element.attack){
                            o.push(element);
                        }
                    });
                });

                o = o.filter((e, i) => o.indexOf(e)=== i);
                pokes = [...o]
                console.log(o)
                dispatch(generico(pokes))
                break;

            case "special+":
                specialA = specialA.sort((a,b) => b - a);
                specialA.forEach((f) => {
                    pokes.forEach((element) => {
                        if(f === element.specialAtack){
                            o.push(element);
                        }
                    });
                });

                o = o.filter((e, i) => o.indexOf(e)=== i);
                pokes = [...o]
                console.log(o)
                dispatch(generico(o))
                break;

            case "special-":
                specialA = specialA.sort((a,b) => a - b);
                specialA.forEach((f) => {
                    pokes.forEach((element) => {
                        if(f === element.specialAtack){
                            o.push(element);
                        }
                    });
                });

                o = o.filter((e, i) => o.indexOf(e)=== i);
                pokes = [...o]
                dispatch(generico(pokes))
                break;
        }
    }

    return(
        <DivStyle>
            <h2>Ordered</h2>
            <select onChange={(e) => order(e)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
            <option value="attack+">Higher Attack 📈 </option>
            <option value="attack-">Lower Attack 📉</option>
            <option value="special+">Higher Special Attack 📈 </option>
            <option value="special-">Lower Special Attack 📉</option>
            </select>
        </DivStyle>
    )
}

export default Order;