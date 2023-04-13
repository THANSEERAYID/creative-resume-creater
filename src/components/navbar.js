
import NavbarCss from "../css/navbarcss"

import {Link} from 'react-router-dom'

const Navbar =()=>{
    return(
        <NavbarCss>
        <nav>
            <ul className="nav-ul">
                <li><Link className="link" to='/'>Home</Link></li>
                <li><Link className="link" to='/Create-resume'>Create Resume</Link></li>
                <li><Link className="link" to='/preview'>Preview</Link></li>
                <li><Link className="link" to='/about-resume'>About</Link></li>
            </ul>
        </nav>
        </NavbarCss>
    )
}

export default Navbar;