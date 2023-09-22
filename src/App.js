
import './App.css';
import Cart from './components/cart';
import Home from './components/home';
import About from './components/about';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

// create a Product component with a h5 for the title
//render a <QuantityPicker/> inside of product
//render the product in the catalog and render it 5 times

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer/>
      </BrowserRouter>
    </div>
  );
}

//too nervous to wreck this to make any real changes

export default App;

//create the footer componenet and import the footer component, please

// href = "/"