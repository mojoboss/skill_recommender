var port = process.env.PORT || 8000;    
var express = require("express");
var stringSimilarity = require("string-similarity");
var filename = "./jobs.json";


var jobsJson = require(filename);
//console.log(jobsJson);

//create express app
var app = express();
app.get("/", function(req, res){         
	for(var i = 0; i < jobsJson.length; i++) {
		var obj = jobsJson[i];
		//console.log(obj.role);
		res.write(obj.role + "\n");
	}
	
});

app.listen(port);