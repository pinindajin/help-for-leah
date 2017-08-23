class Animal {
    
    constructor (options, callout) {
        if(!options) {
            options = {};
        }
            
        this.state = {};
        this.state.name = options.name || '';
        this.state.weight = options.weight || '';
        this.state.color = options.color || '';
        this.state.species = options.species || '';

        if(callout) {
            console.log(callout);
        }
    }

}

class Elephant extends Animal {
    constructor(options, callout) {
        if(!options) {
            options = {};
        }
        options.species = 'Elephant';
        super(options, callout);
        
        this.state.trunkLength = options.trunkLength || '';
    }
}

// Creating an Animal and an Elephant w/ all their properties defined
// Log me their states

var horsey = new Animal({ 
    name: 'Larry',
    weight: 4,
    color: 'Brown',
    species: 'Horse'
});

console.log(horsey.state);

var elephant = new Elephant({
    name: "brain",
    weight: 600,
    color: "Pink",
    trunkLength: 5
});

console.log(elephant.state);
