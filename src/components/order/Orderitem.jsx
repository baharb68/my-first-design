import React, { Component } from 'react'

export default class Orderitem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="col-12 col-md-4">
                <div className="order d-flex flex-column bg-white b-shadow">
                    <div className="d-flex">
                        <div className="col-3 d-flex align-items-center justify-content-center p-0">
                            <img src={this.props.icon} alt=""/>
                        </div>
                        <div className="col-9 p-0 py-3 ">
                            <h2 className="text-right pr-2">{this.props.title}</h2>
                        </div>
                    </div>
                    <p className="p-2">{this.props.content}</p>
                </div>
            </div>
        )
    }
}
