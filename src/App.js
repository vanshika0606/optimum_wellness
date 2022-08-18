
import './App.css';
import Carousel from './components/carousel/Carouseel';
import Coaches from './components/Coaches/Coaches';
import Methodology from './components/Methodology/Methodology';
import Navbar from './components/Navbar/Navbar.js';
import Steps from './components/steps/Steps';
import UnderNavbar from './components/UnderNavbar/UnderNavbar.js'

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <UnderNavbar/>
      <Methodology/>
      <Steps/>
      <Carousel/>
      {/* <Coaches/> */}
      
    </div>
  );
}

export default App;
