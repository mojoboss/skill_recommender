var port = process.env.PORT || 8000;    
var express = require("express");
var stringSimilarity = require("string-similarity");
var filename = "./jobs.json";


var jobsJson = require(filename);  //jobsJson is a json object
//console.log(jobsJson);

//create express app
var app = express();
app.get("/:jobtitle", function(req, res){         
	console.log(req.params.jobtitle);
	for(var i = 0; i < jobsJson.length; i++) {
		//var obj = jobsJson[i];
		//console.log(obj.role);
		//res.write(obj.role + "\t" + obj.skills + "\n");

	}
	
});

app.listen(port);