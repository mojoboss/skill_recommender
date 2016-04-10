var port = process.env.PORT || 8000;    
var express = require("express");
var stringSimilarity = require("string-similarity");
var filename = "./jobs.json";                                              //jaon file from where job-skills are taken


var jobsJson = require(filename);  //jobsJson is a json object
//console.log(jobsJson);

//create express app
var app = express();
app.get("/:jobtitle", function(req, res){         
	var job = req.params.jobtitle;                                           //extract the jobTitle passed as a string parameter
	//console.log(job);
	var maxx = 0, ind=0;                                                     //ind will be the index the obj with maximum job matching 
	for(var i = 0; i < jobsJson.length; i++) {
		var obj = jobsJson[i];
		var tempJob = obj.role;
		var diceCoeff = stringSimilarity.compareTwoStrings(job, tempJob);   //compute string similarity based on Dice's Coefficient
		if(diceCoeff >= maxx){                                              // get the string with maximum matching 
			maxx = diceCoeff;
			ind = i;
		}
	}

	res.setHeader('Content-Type', 'application/json');  //setting the response to JSON format
	res.send(JSON.stringify({"skills":jobsJson[ind].skills}));
	
	
});

app.listen(port);