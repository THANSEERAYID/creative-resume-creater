
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Landing, Error, CreateResume, AboutResume, Preview} from './pages';
import Navbar from './components/navbar';


function App() {
  return (
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/Create-resume' element={<CreateResume/>} />
          
          <Route path='/about-resume' element={<AboutResume/>} />
          
          <Route path='/preview' element={<Preview/>} />
          
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
  
    
  );
}

export default App;
