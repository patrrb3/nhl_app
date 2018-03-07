var express      = require("express"),
    mongoose     = require("mongoose"),
    bodyParser   = require("body-parser"),
    request      = require("request");

var app = express();


app.set("view engine", "ejs");

app.get("/", function(req, res){
    var url = "https://statsapi.web.nhl.com/api/v1/teams";
    request(url,function(err,response,body){
        if(!err && response.statusCode === 200){
            var data = JSON.parse(body);
            res.render("index", {data: data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});
