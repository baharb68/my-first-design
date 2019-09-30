import React, { Component } from 'react'

export default class Productitem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="col-12 col-md-4 productitem d-flex position-relative">
                <img src={this.props.photo} alt=""/>
                <div className="position-absolute">
                    <h3 className="w-100 text-white text-center">{this.props.title}</h3>
                </div>
                
            </div>
        )
    }
}
