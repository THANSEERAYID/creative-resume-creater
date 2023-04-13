
import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CreateResume from './Pages/CreateResume';
import Navbar from './HomePageComp/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='Create-resume/' element={<CreateResume/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
