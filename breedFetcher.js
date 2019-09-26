const request = require('request');

const catReq = function(catBreed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
    if (!(error === null)) {
      console.log('error:', error); // Print the error if one occurred
      return;
    }

    if (body === "[]") {
      console.log(`${catBreed} is not a breed of cat.`);
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
  });
};

const args = process.argv.slice(2);
catReq(args[0]);
