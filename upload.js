var Joi = require('joi');
var http = require('http');
var mongodb = require('mongodb');
//var collName = "posts";

var MongoClient = mongodb.MongoClient;
var dbAddy = "mongodb://neapolitan:pebblesmo0@linus.mongohq.com:10081/neapolitan1";
//var dbAddy = process.env.MONGOHQ_URL;

alert("HI I AM LOADED");
var entlanding;
var maxid = 0;

function getLowID() {
 	MongoClient.connect(dbAddy, function (err, db) {
    	var collection = db.collection('posts');
    	collection.find().sort({"id": -1}).limit(1).toArray(function (err, docs) {
      		maxid = docs[0].id;
      		console.log(docs[0].id);
      		maxid++;
    	});
  	});
}


var ear = document.getElementById('submitbutton');
ear.addEventListener("click", pushPost, false);


function pushPost(){


  
  var newname = document.getElementById('author').value;
  var newentry= document.getElementById('entry').value;



	var newPost = {
		id: maxid,
    date: "22102014",
    name: newname,
    text: newentry
    };
	  MongoClient.connect(dbAddy, function (err, db) {
    	var collection = db.collection('posts');
	    collection.insert(newEntry, function(err,data) {
  			if(err) console.log(err);
	  		alert("uploaded");
	  		pullPosts();
	  		maxid++;
			});
		});
	}




