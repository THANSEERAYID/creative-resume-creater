import '../App.css';
import undraw from "../images/undraw.svg"
import Wrapper from "../css/landingcss"
import ButtonYellow from '../components/button';



const Landing = ()=>{
    return ( 
  
    <Wrapper>
      
        <nav>
            <h5>In just 10 mins</h5>
            <h1>Create your own creative Resume /CV</h1>
          
            <img className="img-1" src={undraw} alt="navimage"/>
        </nav>
        <ButtonYellow>Login/Register</ButtonYellow>
    </Wrapper>
    )
};

export default Landing;