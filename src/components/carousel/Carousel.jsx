import React, { Component } from 'react'
import header from '../img/header.jpg'
import './Carousel.css'
import Top from '../top-services/Top'

export default class Carousel extends Component {
  constructor(props){
    super(props);
  }
    render() {
        return (
            <div id="carouselExampleIndicators" class="carousel slide position-relative" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                {/* <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active d-flex position-relative">
                  <img src={header} class="d-block w-100" alt="..." />
                  <div className="d-none d-md-flex flex-md-column d-md-block align-items-start position-absolute px-3 py-3">
                      <h2 className="font-weight-bold">{this.props.title}</h2>
                      <p className="text-right my-3">{this.props.content}</p>
                      <button className="btn  py-2 px-4 text-center">{this.props.btntext}</button>
                  </div>
                </div>
                {/* <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..." />
                </div> */}
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
              <div className="container w-100 d-flex justify-content-center">
                <Top />
              </div>
          </div>
        )
    }
}
