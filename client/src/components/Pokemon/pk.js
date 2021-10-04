import {DivStyle} from "./style";

function Pk({id, name, tipos, image, hp, attack, defense, speed, height, weight}) 
{
    return(
        <DivStyle>
            <div className='conteiner'>
                <div className='izq'>
                <h1>{name}</h1>

                <img src={image} alt={name}/>
                </div>
                
                <div className='der'>
                <h2>Hp</h2>
                <p>{hp} 📈</p>

                <h2>Tipos</h2>
                <ul>
                    {
                        tipos && tipos.map((g,id) => {
                            return <li key={id}>{g.name}</li>
                        })
                    }
                </ul> 

                <h2>Attack</h2>
                <p>{attack}</p>

                <h2>Defense</h2>
                <p>{defense}</p>

                <h2>Speed</h2>
                <p>{speed}</p>

                <h2>Height</h2>
                <p>{height}</p>

                <h2>Weight</h2>
                <p>{weight}</p>
                </div>
            </div>
        </DivStyle>
    )
}

export default Pk;