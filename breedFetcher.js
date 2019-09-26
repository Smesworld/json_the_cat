const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!(error === null)) {
      return callback(error, null);
    }

    if (body === "[]") {
      callback(`${breedName} is not a breed of cat.`, null);
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };