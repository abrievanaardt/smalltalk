/*
	CSS colours:
		red
		orange
		yellow
		green
		blue
		indigo
		purple
*/

const GIVEN = 32;
const BUILD = 64;

//Patterns to be constructed
var givenPatterns = [
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 1
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 2
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 3
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 4
						["red", "orange", "green", "orange", "orange", "green", "orange"]	//Question 5
					];
					
//Patterns being constructed
var buildPatterns = [
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 1
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 2
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 3
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 4
						["red", "orange", "green", "orange", "orange", "green", "orange"]	//Question 5
					];

var currentQuestion = 0;

function init(){
	//init stuff (Perhaps fetch questions from database?)
	drawArray(buildPatterns[0],BUILD);
}

function nextQuestion(){
	currentQuestion++;
	document.getElementById("questionNumber").innerHTML = "Question " + (currentQuestion+1);
}

function drawArray(arrayIn, view){
	var panel;
	
	if(view == GIVEN){
		panel = "G";
	}
	
	if(view == BUILD){
		panel = "B";
	}
	
	for(var i = 0; i < arrayIn.length; i++){
		var number = i;
		number++;
		document.getElementById(panel+number).className = "blockStack " + arrayIn[i];
	}
}