// Constructor for BasicCard objects.
var BasicCard = function(front, back){
    this.front = front;
    this.back = back;
}

//questions
var firstQuestion = new BasicCard("Who was the first president of the United States?", "George Washington");
// console.log(firstQuestion.front);
// console.log(firstQuestion.back);
// console.log('-------------------------------------');

var secondQuestion = new BasicCard("Who is the current president of the United States?", "Donald Trump");
// console.log(secondQuestion.front);
// console.log(secondQuestion.back);
// console.log('-------------------------------------');

var thirdQuestion = new BasicCard("Who was the first Batman.", "Adam West");
// console.log(thirdQuestion.front);
// console.log(thirdQuestion.back);
// console.log('-------------------------------------');

var fourthQuestion = new BasicCard("Name a form of government that is run for and by the people, giving people the supreme power.", "Democracy");
// console.log(fourthQuestion.front);
// console.log(fourthQuestion.back);
// console.log('-------------------------------------');

var fifthQuestion = new BasicCard("In what city was the Declaration of Independence signed?", "Philadelphia");
// console.log(fifthQuestion.front);
// console.log(fifthQuestion.back);
// console.log('-------------------------------------');

// Exports constructor for ClozeCard
module.exports = BasicCard;