const axios = require('axios');
const baseUrl = 'https://dog.ceo/api/';

function Dogly() {
    if(!(this instanceof Dogly)) {
        return new Dogly();
    }
}

function _get(url, callback) {
    axios.get(url)
    .then(success=>callback(success.data.message))
    .catch(err=>callback(err));
}

Dogly.prototype.getBreeds = function(callback) {
    _get(`${baseUrl}breeds/list`, callback);
}

Dogly.prototype.getBreedImages = function(breed, callback) {
    _get(`${baseUrl}breed/${breed}/images`, callback);
}

Dogly.prototype.getBreedRandomImage = function(breed, callback) {
    _get(`${baseUrl}breed/${breed}/images/random`, callback);
}

module.exports = Dogly;
