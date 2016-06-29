var colors

var number = [];

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
}

function nextQuestion(){
	currentQuestion++;
	document.getElementById("questionNumber").innerHTML = "Question " + (currentQuestion+1);
}

function drawArrays(){
	for (var i = 0; i < givenPatterns[currentQuestion].length; i++){
		document.getElementById("given").addElement;
	}
}