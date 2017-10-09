import React, { Component } from 'react';
import './Barn.css';
import HorseIcon from '../Icons/HorseIcon.js';

export default class Barn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            barn: props.barn
        }
    }
    
    render () {
        return (
            <div className="barn-card">
                <div className="row">

                    {/* Horse Icon */}
                    <div className="col-md-1 col-sm-1 col-xs-2">
                        <HorseIcon height="3em" width="3em" stroke="#992E2E" fill="#992E2E"/>
                    </div>

                    {/* Barn Title + Subtitle */}
                    <div className="col-md-3 col-sm-4 col-xs-10">
                        <div className="row">
                            <div className="clearfix">
                                <div className="pull-left">
                                    <span class="barn-title">{ this.state.barn.name }</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="clearfix">
                                <div className="pull-left ">
                                    <span className="barn-sub-title">{ this.state.barn.address }</span>
                                </div>
                            </div>
                        </div> 
                    </div>

                    {/* Barn Card Content */}
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