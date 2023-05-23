import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css";
import Home from './pages/Home';
import DataPengguna from './pages/DataPengguna';
import Product from './pages/Product';
import DetailAlamat from './pages/DetailAlamat';
import AboutUs from './pages/AboutUs';
import TvProgram from './pages/TvProgram';
import FaqPage from './pages/FaqPage';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/datapengguna" element={<DataPengguna />} />
        <Route path="/detailalamat" element={<DetailAlamat />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/tvprogram" element={<TvProgram />} />
        <Route path="/faqpage" element={<FaqPage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  )
};

export default App
