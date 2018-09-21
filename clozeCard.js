//basic card import
var BasicCard = require("./basicCard.js");

// Constructor for BasicCard objects.
var ClozeCard = function (text, cloze) {
    this.cloze = cloze;
    this.fullText = text;
    this.badCloze = function(){
        return this.badCloze = `Unable to continue! This text:'${this.fullText}' is missing some parts:'${this.cloze}'.`;
    }
    //this.partial = ".... ," +
    this.partial = function(){
        //replacing part of text with (...) to get partial output
        return this.fullText.includes(this.cloze) ? 
        this.fullText.replace(this.cloze, '...') : 
        this.badCloze();	
		};
             
    }

   
    // Exports constructor
    module.exports = ClozeCard;