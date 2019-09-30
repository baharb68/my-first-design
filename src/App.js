import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'vazir-font/dist/font-face.css';
import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carousel'

function App() {
  return (
    <div className="App">
      <div className="container-fluid bg-black">
        <Navbar logo="لوگو" />
      </div>
      <Carousel />
    </div>
  );
}

export default App;
