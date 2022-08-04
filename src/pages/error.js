import {Link} from 'react-router-dom'
import notfound from '../images/undraw_page_not_found.svg'
import Errorcss from '../css/errorcss'


const Error=()=>{
    return(
        <Errorcss>
            <img src={notfound} alt="not found"></img>
            <Link  className='link' to='/'><button>Back to Home</button></Link>
        </Errorcss>

    );
}

export default Error;