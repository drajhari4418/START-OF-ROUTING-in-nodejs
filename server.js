var express = require("express");
var ejs = require("ejs");
var engine = require("ejs-mate");
var morgan = require("morgan");
 var app = express();



 //middleware
app.use(express.static(__dirname + '/public'));
 app.engine('ejs',engine);
 app.set('view engine','ejs');

 var mainRoutes = require('./routes/main');
 app.use(mainRoutes);

 app.listen(3000,function(err){
     if (err) throw err;
     console.log("server is running on port 3000");
 })