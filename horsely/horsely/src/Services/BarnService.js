// Import axios and add calls to a backend eventually...

export default class BarnService {
    // Mock data for now.
    constructor() {
        this.barns = [
            { 
                id: 1,
                name: 'Saltaire Farms',
                address: '123 Fallbrook Road',
            },
            { 
                id: 2,
                name: 'New Haven Ranch',
                address: '45 West Salmon Way',
            },
            { 
                id: 3,
                name: 'Lemony Fields',
                address: '5311 Perigrin Street',
            },
            { 
                id: 4,
                name: 'Cherry Grove',
                address: '2 Delaney Street',
            }
        ]

        this.stalls = [
            {  
                id: 1,
                barnId: 1,
                occupant: { name: 'Larry', breed: 'Palmino' }
            },
            {  
                id: 2,
                barnId: 1,
                occupant: { name: 'Jim', breed: 'Quarterhorse' }
            },
            {  
                id: 3,
                barnId: 1,
                occupant: { name: 'Heather', breed: 'Arabian' }
            },
            {  
                id: 4,
                barnId: 1,
                occupant: { name: 'Tim', breed: 'Painted' }
            },
            {  
                id: 5,
                barnId: 2,
                occupant: { name: 'Yennifer', breed: 'Fresian' }
            },
            {  
                id: 6,
                barnId: 2,
                occupant: { name: 'Kerry', breed: 'Clidesdale' }
            },
            {  
                id: 7,
                barnId: 2,
                occupant: { name: 'Bob', breed: 'Arabian' }
            },
            {  
                id: 8,
                barnId: 2,
                occupant: { name: 'John', breed: 'Painted' }
            },
            {  
                id: 9,
                barnId: 3,
                occupant: { name: 'Ferris', breed: 'Quarterhorse' }
            },
            {  
                id: 10,
                barnId: 3,
                occupant: { name: 'Xena', breed: 'Quarterhorse' }
            },
            {  
                id: 11,
                barnId: 1,
                occupant: {}
            },
            {  
                id: 12,
                barnId: 1,
                occupant: {}
            },
            {  
                id: 13,
                barnId: 4,
                occupant: {}
            },
            {  
                id: 14,
                barnId: 4,
                occupant: {}
            }
        ]
    }

    getBarns() {
        return this.barns;
    }

    getStalls(barnId) {
        return this.stalls.filter(function(stall) {
            return stall.barnId === parseInt(barnId, 10);
        });
    }
}