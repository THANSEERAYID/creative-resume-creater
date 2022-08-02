import NavbarCss from "../css/navbarcss"

const Navbar =()=>{
    return(
        <NavbarCss>
        <nav>
            <ul className="nav-ul">
                <li>HOME</li>
                <li>TEMPLATES</li>
                <li>PREVIEW</li>
                <li>Login</li>
            </ul>
        </nav>
        </NavbarCss>
    )
}

export default Navbar;