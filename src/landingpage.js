import './App.css';
import undraw from "./images/undraw.svg"
import Wrapper from "./css/landingcss"
import ButtonYellow from './components/button';
import Navbar from './components/navbar';


const Landing = ()=>{
    return ( 
  
    <Wrapper>
        <Navbar/>
        <nav>
            <h1>Create your own personal Resume /CV</h1>
          
            <img className="img-1" src={undraw} alt="navimage"/>
        </nav>
        <ButtonYellow>Login/Register</ButtonYellow>
    </Wrapper>
    )
};

export default Landing;