// import logo from './logo.svg';

// Import Boostrap's styling
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js"

// Import React, ReactDOM and the useState for toggles
import React from 'react';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// ADDED: import parts from react-boostrap in this project
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Toast from 'react-bootstrap/Toast';

// Import custom made Header
import Navbar from './pages/Navbar.js';

function App() {
  return (
    <Navbar />
  );
}

export default App;
