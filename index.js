const { IgApiClient } = require('instagram-private-api'); // TS kullanıldığı için import yerine require kullanılmalı!

var sample = require('lodash');
const ig = new IgApiClient(); // new instance


// You must generate device id's before login.
// Id's generated based on seed
// So if you pass the same value as first argument - the same id's are generated every time


ig.state.generateDevice(process.env.IG_USERNAME);

// Optionally you can setup proxy url
ig.state.proxyUrl = process.env.IG_PROXY;

console.log("node app works...");