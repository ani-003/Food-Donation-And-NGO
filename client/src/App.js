import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Boots from './components/Boots';
import Headlines from './components/Headlines';
import Flex2 from './components/Flex2';
import Navigation from './components/Navigation';
import Main from './components/VolunteerForm';
import Form from './components/NgoReg';
import Gallery from './components/Gallery';
import DonSignup from './components/Form';
import Tno from './components/Tno';
// import Aboutus from './components/Aboutus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Navigation />} />
          {/* <Route exact path='/Aboutus' element={<Aboutus />} /> */}
          <Route exact path='/Gallery' element={<Gallery />} />
          <Route exact path='/Tno' element={<Tno />} />
          {/* <Route exact path='/signup' element={<DonSignup />} /> */}
        </Routes>

        <Boots />
        <br />

        <Headlines />
        <br />

        <Flex2 />
        <br />
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
