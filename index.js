var fs = require("fs");
var port = 8080;
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/assets")); //use static files in ROOT/public folder

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
});

app.listen(8937);