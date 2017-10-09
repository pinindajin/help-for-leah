import React, { Component } from 'react';
import './BarnList.css';
import Barn from '../Barn/Barn.js';
import BarnService from '../../Services/BarnService.js';

export default class BarnList extends Component {
    
    constructor(props) {
        super(props);
        
        let barnService = new BarnService();
        
        this.state = {
            barns: barnService.getBarns()
        }
    }

    goToBarnDetails(barnId) {
        this.props.history.push(`/stall/${barnId}`);
    }

    render () {
        let barns = this.state.barns.map((barn) => {
            return (
                <div key={ barn.id } onClick={ this.goToBarnDetails.bind(this, barn.id) }>
                    <Barn barn={ barn }/>
                </div>
            );
        });

        return (
            <div className="container-fluid">
                <div className="barn-list-title">
                    Barns
                </div>
                { barns }
            </div>
        );
    }
}
