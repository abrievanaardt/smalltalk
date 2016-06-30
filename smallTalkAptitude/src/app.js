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
						["purple", "orange", "green", "orange", "orange", "green", "orange"],	//Question 1
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 2
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 3
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 4
						["red", "orange", "green", "orange", "orange", "green", "orange"]	//Question 5
					];
					
//Patterns being constructed
var buildPatterns = [
						[],	//Question 1
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 2
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 3
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 4
						["red", "orange", "green", "orange", "orange", "green", "orange"]	//Question 5
					];
					
var marked = [];

var currentQuestion = 0;

function init(){
	for(var i = 0; i < buildPatterns[currentQuestion].length; i++){
		marked.push(0);
	}
		drawArray(givenPatterns[currentQuestion],GIVEN);
		drawArray(buildPatterns[currentQuestion],BUILD);	
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
		document.getElementById(panel+i).className = "blockStack " + arrayIn[i];
	}
}

function highlight(element){
	var index = parseInt(element.id.charAt(1));
	
	if( (marked[index] == 1) && ( (index-1 < 0) || (index+1 >= buildPatterns[currentQuestion].length) || (marked[index+1] == 0)  || (marked[index-1] == 0) )){
				element.style.border = "0px";
				marked[parseInt(element.id.charAt(1))] = 0;
			}
	else	if( (empty(marked)) || (marked[parseInt(element.id.charAt(1))+1] == 1) || (marked[parseInt(element.id.charAt(1))-1] == 1) ){
				element.style.border = "1px solid black";
				marked[parseInt(element.id.charAt(1))] = 1;
			}	
			else alert("Only adjacent squares can be selected");
}

function empty(array){
	for(var i = 0; i < array.length; i++){
		if(array[i]==1) return false;
	}
	
	return true;
}

function countMarked(array){
	var count = 0;
	
	for(var i = 0; i < array.length; i++){
		if(array[i]==1) count++;
	}
	
	return count;
}

function doRepeat(){
	
	if(countMarked(marked) > givenPatterns[currentQuestion].length-buildPatterns[currentQuestion].length){
		alert("Build stack is full");
	}
	else{
		if(!empty(marked)){
			for(var i = 0; i < marked.length; i++){
				if(marked[i] == 1){
					buildPatterns[currentQuestion].push(buildPatterns[currentQuestion][i]);
					marked.push(0);
				}
			}
			drawArray(buildPatterns[currentQuestion], BUILD);
		}
		else alert("Select colours to repeat from 'build' field.");
	}
	
		
}

function addColor(element){
	var square;
	
	if(buildPatterns[currentQuestion].length < givenPatterns[currentQuestion].length){
		buildPatterns[currentQuestion].push(element.className.split(" ")[1]);
		marked.push(0);
		drawArray(buildPatterns[currentQuestion], BUILD);
	}
	else alert("Build stack is full");
}