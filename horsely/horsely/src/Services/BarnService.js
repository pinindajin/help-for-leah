// Import axios and add calls to a backend eventually...

export default class BarnService {
    // Mock data for now.
    constructor() {
        this.barns = [
            { 
                name: 'Saltaire Farms',
                address: '123 Fallbrook Road'
            },
            { 
                name: 'New Haven Ranch',
                address: '45 West Salmon Way'
            },
            { 
                name: 'Lemony Fields',
                address: '5311 Perigrin Street'
            },
            { 
                name: 'Cherry Grove',
                address: '2 Delaney Street'
            }
        ]
    }

    getBarns() {
        return this.barns;
    }
}