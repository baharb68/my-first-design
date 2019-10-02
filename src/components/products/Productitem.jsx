import React, { Component } from 'react'

export default class Productitem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="col-12 col-md-4 pb-3">
                <div className="productitem d-flex position-relative">
                    <img src={this.props.photo} alt="" className="w-100"/>
                    <div className="d-flex align-items-center justify-content-center position-absolute w-100 py-3">
                        <h3 className="text-white font-weight-light m-0">{this.props.title}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
