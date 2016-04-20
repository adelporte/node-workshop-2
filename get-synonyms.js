var synonyms = require("./library/synonyms");
var colors = require('colors');

var newUser = new synonyms.SynonymAPI("db08c8f47b902224cdad50185d6af2a6");
console.log(newUser);

//Get user word
    var prompt = require('prompt');
    
    prompt.start();
    
    prompt.get(["word"], function (err, result) {
    
    newUser.getSynonyms(result.word, function(obj){
        obj.forEach(function(word){
            console.log(word.yellow)
        })
    });
});