// import logo from './logo.svg';


// import "bootstrap/dist/js/bootstrap.min.js"

// Import React, ReactDOM and the useState for toggles
import React from 'react';

// Add styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// ADDED: import parts from react-boostrap in this project
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Toast from 'react-bootstrap/Toast';

// Add layouts and pages to App
import Navigation from './layouts/Navigation.js';
import Home from './pages/index.js';
import About from './pages/about.js';

// React Router v6 app
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>  
        <Route path='/' element={ <Navigation /> }>
          <Route index element={ <Home />} />
          <Route path='about' element={<About/>} />

          <Route path='*' element={ <Navigation replace to="/"/> }/>
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
