import '../App.css';
import undraw from "../images/undraw.svg"
import Wrapper from "../css/landingcss"
import ButtonYellow from '../components/button';
import resume from '../images/resume page1.jpg'



const Landing = ()=>{
    return ( 
  
    <Wrapper>
      
        <nav>
            <h5>In just 10 mins</h5>
            <h1>Create Your Own Creative Resume /CV</h1>
          
            <img className="img-1" src={undraw} alt="navimage"/>
        </nav>
        <ButtonYellow>Login/Register</ButtonYellow>
        <div>
            <img className='template' src={resume} alt="resume template-1"></img>
        </div>

    </Wrapper>
    )
};

export default Landing;
