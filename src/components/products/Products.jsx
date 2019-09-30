import React, { Component } from 'react'
import './Products.css'
import Parttitle from '../parttitle/Parttitle'
import Productitem from './Productitem'
import seperator from '../img/seperator.png'

export default class Products extends Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center mt-4">
                <Parttitle title="محصولات" seperator={seperator}/>
                
            </div>
        )
    }
}
