
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/navbar';
import Home from './pages/home';
import AboutMe from './pages/aboutme';
import Gallery from './pages/gallery';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;