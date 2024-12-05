import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import HomePage from './pages/HomePage';
import ConstructionPage from './components/ConstructionPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/en-construccion" element={<ConstructionPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
