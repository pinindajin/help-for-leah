import React, { Component } from 'react';
import BarnService from '../../Services/BarnService.js';
import Stall from '../Stall/Stall.js';
import './StallList.css';

export default class StallList extends Component {
    constructor(props) {
        super(props);
        
        let barnId = props.match.params.id;
        let barnService = new BarnService();
        let stalls = barnService.getStalls(props.match.params.id);

        this.state = {
            barnId: barnId,
            stalls: stalls
        }

        console.log(this.state.stalls);
    }

    render() {
        let stalls = this.state.stalls.map((stall) => {
            console.log(stall);
            return (
                <div key={ stall.id }>
                    <Stall stall={ stall }/>
                </div>
            );
        });

        return (
            <div className="container-fluid">
                <div className="stall-list-title">
                    Stalls
                </div>
                { stalls }
            </div>
        );
    }
}
