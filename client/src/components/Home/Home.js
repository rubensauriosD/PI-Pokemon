import DivStyle from './style'
import Filter from './Filter-Order/Filter'
import Order from './Filter-Order/Order'
import Cards from './Cards/Cards'

function Home(){
    return(
        <DivStyle>
            <div className='utils'>   
                <Filter/>
                <Order/>
            </div>
            <div>
                <Cards/>
            </div>
        </DivStyle>
    )
}

export default Home;