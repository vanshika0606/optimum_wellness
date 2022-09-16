import './App.css';
import Home from './pages/Home_page.js'
import Programs from './pages/Programs_page';
import Transformation from './pages/Transformation';
import About from './pages/About.js';
import Contact from './pages/Contact';
import { 
    Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Home/>} />
       
      <Route exact path="/programs" element={<Programs/>} />
        
      <Route exact path="/transformations"  element={<Transformation/>} />
        
      <Route exact path="/about" element={<About/>}/>

      <Route exact path="/contact" element={<Contact/>}/>

      </Routes> 
    </div>
  );
}

export default App;
