import DivStyle from './style'
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <DivStyle>
            <Link to='/home'className='link'>
                <h3>Home</h3>
            </Link>
            <Link to='/create' className='link'>
                <h3>Create Pokemon</h3>
            </Link>
            <Link to='/' className='link'>
                <h3>Get Out</h3>
            </Link>
        </DivStyle>
    )
}

export default Nav;