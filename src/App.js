import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'vazir-font/dist/font-face.css';
import arrow from './components/img/arrow-black.png'
import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carousel'
import Service from './components/Services/Service'
import Products from './components/products/Products'

function App() {
  return (
    <div className="App">
      <div className="container-fluid bg-black">
        <Navbar logo="لوگو" />
      </div>
      <Carousel title="نام وب سایت" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون " btntext="کلیک کنید" btnicon={arrow}/>
      <Service />
      <Products />

    </div>
  );
}

export default App;
