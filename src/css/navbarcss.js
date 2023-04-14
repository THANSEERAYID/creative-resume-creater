import styled from "styled-components";

const NavbarCss = styled.nav`

.nav-ul{
    list-style: none;
    display: flex;
    justify-content:space-evenly;
    padding: 1rem;
   

}

.nav-ul>li{
    text-decoration: none;
}

.link{
    text-decoration: none;
    color: black;
}


nav{
   
    height: 3.5rem;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
}

`

export default NavbarCss;