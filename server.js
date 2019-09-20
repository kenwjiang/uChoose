var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

var path = require('path');
app.use(express.static( __dirname + '/public/dist/public' ));

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/');


app.get("/portfolio", (req, res)=>{
    res.render('index');
})
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function(){
    console.log('Currently connected to port: 8000');
});
