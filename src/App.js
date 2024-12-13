import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeamProperties from "./Calculators/BeamProperties/BeamProperties";
import Footer from "./Footer/Footer";
import Padeye from "./Calculators/Padeye/Padeye";
import BeamDeflection from "./Calculators/BeamDeflection/BeamDeflection";
import AboutUs from "./AboutUS/AboutUs";

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<><BeamProperties /></>} />
          {/* <Route path="/BeamProperties" element={<><Navbar /><BeamProperties /><Footer/></>} /> */}
          {/* <Route path="/PadEye" element={<><Navbar/><Padeye/><Footer/></>} /> */}
          {/* <Route path="/BeamDeflection" element={<><Navbar/><BeamDeflection/><Footer/></>} /> */}
          {/* <Route path="/AboutUs" element={<><Navbar/><AboutUs/><Footer/></>} /> */}
          {/* <Route path="/BeamDeflectionCalculatortest" element={<BeamDeflectionCalculatorTest/>} /> */}
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
