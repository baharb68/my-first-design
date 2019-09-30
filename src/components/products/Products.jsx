import React, { Component } from 'react'
import './Products.css'
import Parttitle from '../parttitle/Parttitle'
import Productitem from './Productitem'
import seperator from '../img/seperator.png'
import p1 from '../img/p1.jpg'
import p2 from '../img/p2.jpg'
import p3 from '../img/p3.jpg'
import p4 from '../img/p4.jpg'
import p5 from '../img/p5.jpg'
import p6 from '../img/p6.jpg'

export default class Products extends Component {
    render() {
        return (
            <div className=" container d-flex flex-column align-items-center mt-4">
                <Parttitle title="محصولات" seperator={seperator}/>
                <div className="d-flex flex-column flex-md-row flex-wrap mt-4">
                    <Productitem photo={p6} title="محصول یکم" />
                    <Productitem photo={p6} title="محصول دوم" />
                    <Productitem photo={p6} title="محصول سوم" />
                    <Productitem photo={p6} title="محصول چهارم" />
                    <Productitem photo={p6} title="محصول پنجم" />
                    <Productitem photo={p6} title="محصول ششم" />
                </div>
                
            </div>
        )
    }
}
