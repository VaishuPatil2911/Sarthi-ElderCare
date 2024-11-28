import React, { useState } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import AboutUs from './components/AboutUs'; 
import Service from './components/Service';
import ContactUs from './components/ContactUs';
import Login from './components/Login'; 
import Register from './components/Register'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards'; 
import Footer from './components/Footer'; 
import Modal from './components/Modal'; // Import Modal component

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false); // State for the modal

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <h1 
                  className="home-heading" 
                  style={{ textAlign: 'center', color: '#ff3377', fontFamily: 'Poppins' }}
                >
                  "Caring for Those Who Cared for Us."
                </h1>
                <Carousel />
                <Cards />
              </>
            } 
          />
          {/* About Us Page with Key Features Modal */}
          <Route 
            path="/about" 
            element={
              <>
                <AboutUs onKeyFeaturesClick={handleOpenModal} /> {/* Pass the handler */}
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
              </>
            } 
          />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/login" element={<Login />} />  
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
