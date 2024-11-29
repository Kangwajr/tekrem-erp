import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import CloudSolutions from './pages/services/CloudSolutions';
import AiMl from './pages/services/AiMl';
import Cybersecurity from './pages/services/Cybersecurity';
import MobileDev from './pages/services/MobileDev';
import DataAnalytics from './pages/services/DataAnalytics';
import WebDev from './pages/services/WebDev';
import IoTSolutions from './pages/services/IoTSolutions';
import CustomDev from './pages/services/CustomDev';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/ai-ml" element={<AiMl />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/mobile-development" element={<MobileDev />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/web-development" element={<WebDev />} />
          <Route path="/services/iot-solutions" element={<IoTSolutions />} />
          <Route path="/services/custom-development" element={<CustomDev />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;