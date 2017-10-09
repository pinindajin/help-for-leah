// Import axios and add calls to a backend eventually...

export default class BarnService {
    // Mock data for now.
    constructor() {
        this.barns = [
            { name: 'Saltaire Farms' },
            { name: 'New Haven Ranch' },
            { name: 'Lemony Fields' },
            { name: 'Cherry Grove' }
        ]
    }

    getBarns() {
        return this.barns;
    }
}