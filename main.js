//import card files
var ClozeCard = require("./clozeCard.js");
var BasicCard = require("./basicCard.js");

//for inquirer
var inquirer = require('inquirer');
var fs = require("fs");

//-------Basic Cards--------
//Pushing basic card questions in array
//Basic Cards questions
var firstQuestion = new BasicCard("Who was the first president of the United States?", "George Washington");
var secondQuestion = new BasicCard("Who is the current president of the United States?", "Donald Trump");
var thirdQuestion = new BasicCard("Who was the first Batman.", "Adam West");
var fourthQuestion = new BasicCard("Name a form of government that is run for and by the people, giving people the supreme power.", "Democracy");
var fifthQuestion = new BasicCard("In what city was the Declaration of Independence signed?", "Philadelphia");

//Array for Basic Card questions
var basicCardsArr = [];

//pushing questions to basicCardsArr
basicCardsArr.push(firstQuestion);
basicCardsArr.push(secondQuestion);
basicCardsArr.push(thirdQuestion);
basicCardsArr.push(fourthQuestion);
basicCardsArr.push(fifthQuestion);

//reading file
var count = 0;

//functions for sorting basic cards
function basicCardSorting() {
  
  if (count < basicCardsArr.length) {
    console.log(basicCardsArr[count].front);
    inquirer
    .prompt([
      // Here we give the user a list to choose from.
      {
        type: "confirm",
        message: "Would you like to see an answer:",
        name: "confirm"
      }
    ])
    //function for sorting answer
    .then(function(response) {
      if (response.confirm){
        console.log(basicCardsArr[count].back);
        count++;
        basicCardSorting();
      }
      else {
        count++;
        basicCardSorting();
      }
    });
  }
}
//-------Cloze Cards--------
//Close Cards questions
var firstQuestionCloze = new ClozeCard( "George Washington was the first president of the United States.", "George Washington");
//  console.log('cloze = ', firstQuestionCloze.cloze);
//  console.log('full = ', firstQuestionCloze.fullText);
//  console.log('partial =', firstQuestionCloze.partial());

var secondQuestionCloze = new ClozeCard( "Donald Trump is the current president of the United States?", "Donald Trump");
// console.log('cloze = ', secondQuestionCloze.cloze);
// console.log('full = ', secondQuestionCloze.fullText);
// console.log('partial =', secondQuestionCloze.partial());

var thirdQuestionCloze = new ClozeCard("Adam West was the first Batman.", "Adam West");
// console.log('cloze = ', thirdQuestionCloze.cloze);
// console.log('full = ', thirdQuestionCloze.fullText);
// console.log('partial =', thirdQuestionCloze.partial());

var fourthQuestionCloze = new ClozeCard("Democracy is form of government that is run for and by the people, giving people the supreme power.", "Democracy");
// console.log('cloze = ', fourthQuestionCloze.cloze);
// console.log('full = ', fourthQuestionCloze.fullText);
// console.log('partial =', fourthQuestionCloze.partial());

var fifthQuestionCloze = new ClozeCard("Philadelphia was a city that Declaration of Independence was signed?", "Philadelphia");
// console.log('cloze = ', ffifthQuestion.cloze);
// console.log('full = ', ffifthQuestion.fullText);
// console.log('partial =', ffifthQuestion.partial());

//Cloze question array
var clozeCardsArr = [];

//Pushing cloze card questions in Cloze question array
clozeCardsArr.push(firstQuestionCloze);
clozeCardsArr.push(secondQuestionCloze);
clozeCardsArr.push(thirdQuestionCloze);
clozeCardsArr.push(fourthQuestionCloze);
clozeCardsArr.push(fifthQuestionCloze);
//console.log(clozeCardsArr);

//functions for Cloze Cards sorting 
function clozeCardSorting() {
  
  if (count < clozeCardsArr.length) {
    let question = clozeCardsArr[count].partial();
    //console.log(question);
    //console.log(typeof question);
    inquirer
    .prompt([
      //user a list for imput
      {
        type: "input",
        name: "name",
        message: question
      }
    ])
    //function for sorting answer
    .then(function(response) {
      //console.log(clozeCardsArr);
      if (response.name.toLowerCase() == clozeCardsArr[count].cloze.toLowerCase()){
        //console.log(clozeCardsAr);
        console.log("The answer is: " + clozeCardsArr[count].cloze + ".Your answer is correct!");
        count++;
        clozeCardSorting();
      }
      else {
        console.log("The answer is: " + clozeCardsArr[count].cloze + ".Your answer is incorrect!");
        count++;
        clozeCardSorting();
      }
    });
  }
}
  
  inquirer
  .prompt([
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "Please choose from folowing options",
      choices: ["Basic Card Game", "Cloze Card Game", "Quit Game"],
      name: "event"
    }
  ])
  //function for sorting answer
  .then(function(response) {
    //if concert is choice
    if (response.event === "Basic Card Game"){
      basicCardSorting();
    } 
    else if (response.event === "Cloze Card Game" ) {
      clozeCardSorting();
    }
    else if (response.event === "Quit Game") {
      
    }
    
  });