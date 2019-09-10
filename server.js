var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

var path = require('path');
app.use(express.static( __dirname + '/public/dist/public' ));




app.listen(8000, function(){
    console.log('Currently connected to port: 8000');
});
