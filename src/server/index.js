// Configure the environment variables
const dotenv = require('dotenv');
//  add Configuration to be able to use env variables
dotenv.config();
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios')
const cors = require('cors');
const PORT = 8081;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
//added NEW
var FormData = require('form-data');
const fetch = require("node-fetch");
//new-memo
var textapi = process.env.API_KEY;

//end new-memo
console.log(`Your API key is ${process.env.API_KEY}`);
//  Configure cors to avoid cors-origin issue
app.use(cors());
//  Create an instance for the server
app.use(bodyParser.json());
//  Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
// Configure express static directory.
app.use(express.static('dist'));
console.log(__dirname)
app.get('/', function(req, res) {
    // path.resolve('src/client/views/index.html')
    res.sendFile(res.sendFile('dist/index.html'))
});
app.post('/data', function(req, res) {
    const form = new FormData();
    form.append("key", process.env.API_KEY);
    form.append("url", req.body.url);
    form.append("lang", "en");
    let post = {
        method: 'POST',
        body: form,
        redirect: 'follow'
    };
    fetch(baseURL, post).then(
        response => response.json()).then(response => res.send(response)).catch(error => console.log(error));
})

app.get('/test', function(req, res) {
        res.send(mockAPIResponse)
    })
    // designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})