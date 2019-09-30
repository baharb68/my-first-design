import React, { Component } from 'react'

export default class Serviceitem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="col-12 col-md-3">
                <div className="service d-flex flex-column align-items-center">
                    <div className=" d-flex rounded-circle position-relative align-items-center justify-content-center">
                        <img src={this.props.icon} alt="" className="position-absolute"/>
                    </div>
                    <h2 className="py-3 m-0">{this.props.title}</h2>
                    <p className="">{this.props.content}</p>
                    <button className="btn">{this.props.btntext}</button>
                </div>
            </div>
        )
    }
}
