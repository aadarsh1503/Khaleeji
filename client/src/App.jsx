import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Servicess from './components/Servicess/Servicess';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<GetInTouch />} />
          <Route path="/services" element={<Servicess />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
