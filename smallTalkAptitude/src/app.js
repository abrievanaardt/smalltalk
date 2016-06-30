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

var credits = [];

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
						["yellow"],	//Question 1
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 2
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 3
						["red", "orange", "green", "orange", "orange", "green", "orange"],	//Question 4
						["red", "orange", "green", "orange", "orange", "green", "orange"]	//Question 5
					];
					
var marked = [];

var currentQuestion = 0;

function init(){
	for(var i = 0; i < givenPatterns.length; i++){
		credits.push(100);
	}
	
	for(var i = 0; i < buildPatterns[currentQuestion].length; i++){
		marked.push(0);
	}
	drawGivenArray();
	update();
}

function nextQuestion(){
	currentQuestion++;
	document.getElementById("questionNumber").innerHTML = "Question " + (currentQuestion+1);
}

function update(){	//Called each time an action is performed
	updateCredits();
	
	for(var i = 0; i < buildPatterns[currentQuestion].length; i++){
		document.getElementById("B"+i).className = "blockStack " + buildPatterns[currentQuestion][i];
	}
}

function drawGivenArray(){	//Only called for new questions
	for(var i = 0; i < givenPatterns[currentQuestion].length; i++){
		document.getElementById("G"+i).className = "blockStack " + givenPatterns[currentQuestion][i];
	}
}

function updateCredits(){
	var creditDisplay = document.getElementById("credits");
	
	creditDisplay.innerHTML = "Total credits: " + credits[currentQuestion];
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
			credits[currentQuestion]--;
			update(buildPatterns[currentQuestion], BUILD);
		}
		else alert("Select colours to repeat from 'build' field.");
	}
	
		
}

function addColor(element){
	var square;
	
	if(buildPatterns[currentQuestion].length < givenPatterns[currentQuestion].length){
		buildPatterns[currentQuestion].push(element.className.split(" ")[1]);
		marked.push(0);
		credits[currentQuestion] -= 2;
		update(buildPatterns[currentQuestion], BUILD);
	}
	else alert("Build stack is full");
}