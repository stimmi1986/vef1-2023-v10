import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Routes/LandingPage.jsx';
import Games from './Routes/Games.jsx';
import Teams from './Routes/Teams.jsx';
import NotFound from './Routes/NotFound.jsx';
import Navbar from './Routes/Navbar.jsx';
import Footer from './Routes/Footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
