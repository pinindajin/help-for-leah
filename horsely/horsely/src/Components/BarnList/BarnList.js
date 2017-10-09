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

    render () {
        let barns = this.state.barns.map((barn, index) => {
            return (
                <Barn key={ index } barn={ barn }/>
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