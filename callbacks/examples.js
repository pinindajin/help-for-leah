const Dogly = require('./dogly'); // Import the Dogly library
const dogly = new Dogly();        // Create new instance of Dogly

dogly.getBreeds(function(breeds) {
    let breed = breeds[breeds.length-1]; // getting the last breed in list
    console.log(breed);
});

dogly.getBreedImages('wolfhound', function(images) {
    let image = images[0]; // getting first iimage
    console.log(image);
});

dogly.getBreedRandomImage('retriever', function(image) {
    console.log(image);
});