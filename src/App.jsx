import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/nabvar/Navbar';
import { Grid } from '@mui/material';
import TextCarousel from './components/textcarousel/TextCarousel';
import Footer from './components/footer/Footer';
import Home from '../src/pages/Home';
import Camisetas from '../src/pages/Camisetas';
import Tecnologia from './pages/Tecnología';
import Tenis from './pages/Tenis';
import DetalleProducto from './pages/DetalleProducto';
import Favoritos from './pages/Favoritos';
import { Route, Routes } from 'react-router-dom';
import Soporte from './pages/Soporte';


// Data Imports
import products from './data/NCamisetas';
import zapatos from './data/Zapatos';
import techproducts from './data/Tech';


// Combine products from different categories into a single list
const productos = [...products, ...zapatos, ...techproducts];

function App() {
  // Definition of navigation links
  const navLinks = [
    {
      title: "Home", path: "/"
    },
    {
      title: "Camisetas", path: "/Camisetas"
    },
    {
      title: "Tenis", path: "/Tenis"
    },
    {
      title: "Tecnología", path: "/Tecnologia"
    },
  ];

  return (
    <>
      {/* Reset base styles with CssBaseline */}
      <CssBaseline />
      {/* Main container */}
      <Grid container>
        <Grid item xs={12}>
          {/* Navigation bar */}
          <Navbar navLinks={navLinks} productos={productos} />
          {/* Route configuration */}
          <Routes>
            <Route path="/" element={<><TextCarousel /><Home /></>} />
            <Route path="/Camisetas" element={<><TextCarousel /><Camisetas /></>} />
            <Route path="/Tecnologia" element={<><TextCarousel /><Tecnologia /></>} />
            <Route path="/Tenis" element={<><TextCarousel /><Tenis /></>} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            <Route path="/Favoritos" element={<><TextCarousel /><Favoritos /></>} />
            <Route path="/Soporte" element={<><TextCarousel /><Soporte /></>} />
          </Routes>
          {/* Footer */}
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;