import DivStyle from './style'
import {NavLink} from 'react-router-dom';

function Card({id, name, tipos, image, special}) {
    return(
        <DivStyle>
            <div className='conteiner'>
                <img src={image} alt={name}/>
                    <NavLink className='link' to={`/pokemon/${id}`}>
                    <h3>{name}</h3>
                    </NavLink>
                    <h4>Tipos</h4>
                    <ul>
                    {    
                        // tipos ? <li>{tipos}</li>
                        // :
                        tipos.length >= 1 && tipos.map((p,id) =>
                        {
                            return <li key={id}>{p.name}</li>
                        })
                    }
                    <h4>Special Attack</h4>
                    <h3>{special}</h3>
                </ul>
            </div>
        </DivStyle>
    )
}

export default Card;