import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Navbar from './Routes/Navbar.jsx';
import Footer from './Routes/Footer.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
);
