//firstChar
function firstChar(str1, callback) {
    var firstLetter = str1[0];
    setTimeout(function() {
        callback(firstLetter);
    }, 1000);
}

firstChar("This is a string", function(str){console.log(str)});

//lastChar

function lastChar(str2, callback) {
    var lastLetter = str2[str2.length - 1];
    setTimeout(function() {
        callback(lastLetter);
    }, 1000);
}

lastChar("What a great string", function(str) {console.log(str)});