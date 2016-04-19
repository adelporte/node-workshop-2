//Module exports: we set it to export everything in the file
module.exports = function getFortune() {
    var sentences = ["Tomorrow will be a new day", "You'll see a better day", "Work harder and harder and you'll accomplish your dreams"]
    var getRandomNumber = Math.floor(Math.random() * (sentences.length - 1) + 1);
    var theSentence = sentences[getRandomNumber];
    console.log(theSentence);
};