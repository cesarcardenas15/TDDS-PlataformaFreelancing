import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularCategories from './components/PopularCategories';
import FeaturedJobs from './components/FeaturedJobs';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ServicesMenuPage from './pages/ServicesMenuPage'
import ConstructionPage from './components/ConstructionPage';
import CreateServiceForm from './components/CreateServiceForm';
import CrearPerfil from './pages/CrearPerfil';
import PerfilFreelancer from './pages/PerfilFreelancer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <PopularCategories />
              <FeaturedJobs />
            </>
          } />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/servicios" element={<ServicesMenuPage />} />
          <Route path="/en-construccion" element={<ConstructionPage />} />
          <Route path="/crear-servicio" element={<CreateServiceForm />} />
          <Route path="/crear-perfil" element={<CrearPerfil />} />
          <Route path="/profile" element={<PerfilFreelancer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
