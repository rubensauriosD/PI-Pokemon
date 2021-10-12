import DivStyle from './style'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react';
import {getTypes} from '../../actions/actions'
import img from '../../imgaes/14711.jpg'
import axios from 'axios'

function validate(input) {
    let errors = {};

    if (!input.name) {
        errors.name = 'Name is required';
    } 
    // else if (!/\S+@\S+\.\S+/.test(input.username)) {
    //     errors.name = 'Name is invalid';
    // }

    return errors;
};

function Create(){
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState({
        name:'',
        hp:0,
        attack:0,
        defense:0,
        speed:0,
        height:0,
        weight:0,
        image:img,
        tipos:[],
        type:[]
    })
    const pokesCreat = useSelector(state => state.pokemonsDB);
    var types = useSelector(state => state.types);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getTypes());
    },[])

    function handleChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        
        setErrors(validate({
            ...errors,
            [e.target.name]: e.target.value
        }));
    } 

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/pokemons', inputs)
        pokesCreat.push(inputs)//esto agrega el juego en el arary de juegos creados asi puedo hacer el filtro
        alert(`${inputs.name} create succesfully`)
    }

    function handleTypes(e) {
        let x = Number(e.target.value[0]);
        let y = '';
        for (let index = 4; index < e.target.value.length; index++) {
            y = y + e.target.value[index]
        }
        inputs.type.push(x);
        inputs.tipos.push({name:y});
    }

    return(
        <DivStyle>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <label>Name</label>
                <input type='text' name='name' onChange={(e) => handleChange(e)} className={errors.name && 'danger'} value={inputs.name} required/>
                {/* {errors.name && (
                <p className="danger">{errors.name}</p>)} */}

                <label>Hp ( life )</label>
                <input type='number' name='hp' onChange={(e) => handleChange(e)}/>

                <label>Attack</label>
                <input type='number' name='attack' onChange={(e) => handleChange(e)}/>

                <label>Defense</label>
                <input type='number' name='defense' onChange={(e) => handleChange(e)}/>

                <label>Speed</label>
                <input type='number' name='speed' onChange={(e) => handleChange(e)}/>

                <label>Height</label>
                <input type='number' name='height' onChange={(e) => handleChange(e)}/>

                <label>Weight</label>
                <input type='number' name='weight' onChange={(e) => handleChange(e)}/>

                <label>Types</label>
                <select name='tipos' multiple onChange={(e) => handleTypes(e)}>
                {
                    types && types.map((t,id) => {
                        return <option key={id}>
                        {`${t.id} - ${t.name}`}
                        </option>
                    })
                }
            </select>

            <button type='submit'>Create</button>
            </form>
        </DivStyle>
    )
}

export default Create;