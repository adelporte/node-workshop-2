function firstChar(str1, callback) {
    var firstLetter = str1[0];
    setTimeout(function() {
        callback(firstLetter);
    }, 1000);
}

firstChar("This is a string", function(str){console.log(str)});