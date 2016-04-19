//firstChar
function firstChar(str1, callback) {
    var firstLetter = str1[0];
    setTimeout(function() {
        callback(firstLetter);
    }, 1000);
}

//firstChar("This is a string", function(str){console.log(str)});

//lastChar

function lastChar(str2, callback) {
    var lastLetter = str2[str2.length - 1];
    setTimeout(function() {
        callback(lastLetter);
    }, 1000);
}

//lastChar("What a great string", function(str) {console.log(str)});

//getFirstAndLast 

function getFirstAndLast(str, func) {
    firstChar(str, function(str1){
        lastChar(str, function(str2) {
            func(str1 + str2);
        });
    });
}

getFirstAndLast("Hello", function(res){
    console.log(res);
})