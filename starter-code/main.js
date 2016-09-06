var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour ="king";

var matchMatch = function(choiceOne, choiceTwo) {
	if(choiceOne === "queen" && choiceTwo === "queen"){
		alert("You found a match!");
	}
	else if (choiceOne === "king" && choiceTwo === "king"){
		alert("You found a match!");
	}	
	else if ((choiceOne === "queen" && choiceTwo === "king") || (choiceOne === "king" && choiceTwo === "queen")){
		alert("Sorry, try again.");
	}
};