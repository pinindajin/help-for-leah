import React, { Component } from 'react';
import './Stall.css';

export default class Stall extends Component {
    constructor(props) {
        super(props);

        let stall = props.stall

        this.state = {
            stall: stall
        }
    }

    render () {
        return (
            <div className="stall-card">
                <div className="row">

                    {/* Stall Title + Subtitle */}
                    <div className="col-md-4 col-sm-5 col-xs-12">
                        <div className="row">
                            <div className="clearfix">
                                <div className="pull-left">
                                    <span className="stall-title">{ this.state.stall.occupant.name }</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="clearfix">
                                <div className="pull-left ">
                                    <span className="stall-sub-title">{ this.state.stall.occupant.breed }</span>
                                </div>
                            </div>
                        </div> 
                    </div>

                    {/* Stall Card Content */}
                    <div className="col-md-8 col-sm-7 col-xs-12">
                        <div className="clearfix">
                            <div className="pull-left">
                            </div>
                        </div>
                    </div>

                </div>                
            </div>
        );
    }
}