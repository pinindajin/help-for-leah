import React, { Component } from 'react';
import './BarnList.css';
import Barn from '../Barn/Barn.js';

export default class BarnList extends Component {
    
    constructor(props) {
        super(props);
        
        // Should add this to a store later
        this.state = {
            barns: [
                { name: 'Saltaire Farms' },
                { name: 'New Haven Ranch' },
                { name: 'Lemony Fields' },
                { name: 'Cherry Grove' }
            ]
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
                { barns }
            </div>
        );
    }
}