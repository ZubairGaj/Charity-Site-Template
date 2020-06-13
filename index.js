var fs = require("fs");
var port = process.env.PORT || 3003;
var express = require("express");
console.log(port);

var app = express();
app.use(express.static(__dirname + "/assets")); //use static files in ROOT/public folder

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
});

app.listen(port);