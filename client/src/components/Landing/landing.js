import {Link} from 'react-router-dom';
import DivStyle from './style'

function Landing(){
    return(
        <DivStyle>
            <h1 className='titulo'>App Pokemon</h1>
            <Link to='/home'>
                <button className='btn'>
                    Go Home
                </button>
            </Link>
        </DivStyle>
    )
}

export default Landing;