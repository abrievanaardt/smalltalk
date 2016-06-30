// QUESTION 1
var boxes = [["a", "A", "Red", "answerA"], ["b", "B", "Blue", "answerB"], ["c", "C", "Green", "answerA"]];

// Globally shared objects - used as prototypes for cloning
var protoDivCleared = document.createElement('div');
var div = protoDivCleared.cloneNode(true);
protoDivCleared.style.clear = "both";
var protoLabel = document.createElement('label');
function lineBreak() {
    var obj = document.createElement('br');
    return obj.cloneNode(true);
}

function hr() {
    var element = document.createElement('hr');
    element.style.display = "block";
    element.style.border = "1px solid black";
    return element.cloneNode(true);
}

function createBox(idNumber, labelText, colourName) {
    var element = div.cloneNode(true);
    element.style.alignContent = "center";
    element.style.textAlign = "center";
    element.style.width = "150px";
    element.style.height = "200px";
    element.style.padding = "0px";
    element.id = idNumber;
    element.style.backgroundColor = "white";
    var label = protoLabel.cloneNode(true);
    label.innerText = labelText;
    label.style.fontSize = "30px";
    label.style.with = "150px";
    label.style.textAlign = "center";
    label.style.backgroundColor = "white";
    element.appendChild(label);
    var box = document.createElement('div');
    // background-image: url('images/box.jpg');
    box.style.backgroundImage = "url('images//box.jpg')";
    box.style.backgroundSize = "150px 150px";
    box.style.width = "150px";
    box.style.height = "150px";
    element.appendChild(box);
    element.style.margin = "5px";
    return element;
}

/**var aside = document.getElementsByTagName('asizde')[0];
var imageContainer = document.createElement('div');

imageContainer.style.display = "flex";
imageContainer.style.clear = "both";*/

var boxContainer = protoDivCleared.cloneNode(true);
boxContainer.align = "center";

for (var index = 0; index < boxes.length; index++) {
    var boxProperties = boxes[index];
    var box = createBox(boxProperties[0], boxProperties[1], boxProperties[2]);
    box.style.float = "left";
    boxContainer.appendChild(box);
}

var articleElement = document.getElementsByTagName('article')[0];

var headingElement = document.createElement('h1');
headingElement.style.clear = "both";
headingElement.innerText = "Question 1";
var subtitleElement = document.createElement('h4');
subtitleElement.style.clear = "both";
subtitleElement.innerText = "This question test your understanding and ability of using " +
    "storage locations, thus memory locations and pointers.";
var questionElement = protoLabel.cloneNode(true);
questionElement.innerHTML = "Given the boxes above and the following information, give the " +
    "resulting number of items in each box at the end of the scenario " +
    "described below:<br><br>" + 
    "You start with <b>23</b> apples.<br>" +
    "<b>7</b> apples are placed in box <b>A</b>, <b>9</b> in box <b>C</b> and the remainder in box <b>B</b>.<br>" +
    "<b>12</b> more apples are then added to box <b>B</b>.<br>" +
    "<b>3</b> apples are moved from box <b>A</b> to box <b>C</b>.<br>" +
    "<b>5</b> apples are then moved from box <b>B</b> to box <b>A</b>.<br>" +
    "Finally, <b>1</b> apple is added to box <b>C</b>.<br>";
var q1QuestionDiv = protoDivCleared.cloneNode(true);
q1QuestionDiv.appendChild(questionElement);
questionElement.appendChild(lineBreak());
questionElement.appendChild(lineBreak());

articleElement.appendChild(headingElement);
articleElement.appendChild(subtitleElement);

articleElement.appendChild(boxContainer);

articleElement.appendChild(q1QuestionDiv);

// Adding answer boxes
var answerElement = protoDivCleared.cloneNode(true);

for (index = 0; index < boxes.length; index++) {
    boxProperties = boxes[index];
    var singleAnswer = document.createElement('div');
    singleAnswer.style.margin = "3px";
    singleAnswer.style.width = "100px";
    var answerLabel = document.createElement('label');
    answerLabel.innerText = boxProperties[1];
    var answerBox = document.createElement('input');
    answerBox.type = "number";
    answerBox.defaultValue = "0";
    answerBox.style.marginLeft = "3px";
    answerBox.id = boxProperties[3];
    answerBox.style.width = "30px";
    singleAnswer.appendChild(answerLabel);
    singleAnswer.appendChild(answerBox);
    singleAnswer.style.float = "left";
    answerElement.appendChild(singleAnswer);
}

articleElement.appendChild(answerElement);

articleElement.appendChild(lineBreak());
articleElement.appendChild(lineBreak());
articleElement.appendChild(lineBreak());


/**
QUESTION 2

Element For Reuse:
protoDivCleared      - empty division cleared on both ends
div                  - empty division
headingElement       - h1 element, cleared on both ends
subtitleElement      - h4 element, cleared on both ends
**/

var headingQ2 = headingElement.cloneNode(true);
headingQ2.innerText = "Question 2"; // if item is cloned, intellisense may not show options

var subtitle2 = subtitleElement.cloneNode(true);
subtitle2.innerHTML = "This question tests your understanding of Control Structures, " +
    "in this context compise of the follow:<ul><li>Selection</li><li>Iteration</li><li>Sequence</li></ul>";

articleElement.appendChild(hr());
articleElement.appendChild(headingQ2);
articleElement.appendChild(subtitle2);

var tableDiv = protoDivCleared.cloneNode(true);
tableDiv.align = "center";

var tableElement = document.createElement('table');
tableElement.style.borderCollapse = "collapse";
tableElement.style.border = "1px solid black";
var tableRow = document.createElement('tr');
tableRow.style.border = "1px solid black";
var tableData = document.createElement('td');
tableData.width = "30px";
tableData.height = "30px";
tableData.align = "center";

var stringArray = ["J", "Y", "Q", "N", "B", "E", "W", "X", "Z", "O", "I"];
var row1 = tableRow.cloneNode(true);
var row2 = tableRow.cloneNode(true);

for (index = 0; index < stringArray.length; index++) {
    var tdR1 = tableData.cloneNode(true);
    var tdR2 = tableData.cloneNode(true);
    tdR1.innerText = index;
    tdR2.innerText = stringArray[index];
    if (index % 2 == 0) {
        tdR1.bgColor = "#0F9C07";
        tdR2.bgColor = "#0F9C07";
    }
   
    row1.appendChild(tdR1);
    row2.appendChild(tdR2);
}

tableElement.appendChild(row1);
tableElement.appendChild(row2);

tableDiv.appendChild(tableElement);
articleElement.appendChild(tableDiv);
articleElement.appendChild(lineBreak());
/**NB linebreak must be cloned because a single node cannot be added to the
DOM more than once.
**/
//30/06/2016 - Editions
var q2QuestionDiv = protoDivCleared.cloneNode(true);
var q2QuestionLabel = protoLabel.cloneNode(true);
q2QuestionLabel.innerHTML = "Given the table above where the first row values " +
    "represent the index or position of the character in a String formed by the " +
    "inorder sequence of the characters in the second row. Follow the instructions below to construct a word. <br>" +
    "<b>Rule: </b> Follow instruction in sequential line by line, starting from line one. If instructed to jump to a " +
    " given line, start of by following that instruction, and refollow instrunction from that line. After the last" +
    " instruction line, use the option boxes to create the word formed by following the instruction:";
q2QuestionDiv.appendChild(q2QuestionLabel);
articleElement.appendChild(q2QuestionDiv);
articleElement.appendChild(lineBreak())

var keys = [23, 11, 7, 13, 30, 17, 26, 3, 9, 27];
var word = "NQOBIZWE";
var keysString = "{";
for (index = 0; index < keys.length; index++) {
    keysString += keys[index];
    if (index < keys.length - 1) {
        keysString += ", ";
    } else {
        keysString += "}";
    }
}

var N = stringArray.length;

var codeLines = ["Move to instruction line 2", "Given a set of <b><i>i</i></b> values: " + keysString,
    "<b><i>N</i></b> is the number of elements in table which is " + N + " and will be used in an equation to follow. ",
    "Given the equation: <b>(<i>i</i> + 2) % N</b> where % is the modulo operator.",
    "Starting with the first value <b><i>i</i></b> in the set given in 2 and moving in sequential order from " + keys[0] + " to " + keys[keys.length - 1] +
    " using each <b><i>i</i></b> values with each iteration (instruction to be given below).",
    "<b><i>If</i></b> there is still a value <b><i>i</i></b> in set given in 2 not used in the equation below, move to the instruction line that follows the current one, otherwise <b><i>Jump</i></b> to tinstruction line 10",
    "Calculate result <b><i>r</i></b> using the equation given in 5 and the <b><i>i</i></b> values currently in sequence (use just one <b><i>i</i></b> value, one that is current in sequence).",
    "Get character that is below the number equaling to the <b><i>r</i></b> value calculated above (Note: by below meaning the number and character are in same column)." +
    "Add the character value chosen above to the word <b><i>w</i></b> such that it add up to the characters already in the word (concatinate).",
    "<b><i>Jump</i></b> back to instruction line 6, and this time use the next <b><i>i</i></b> value in the set when following instructions",
    "Iteration is now complete, meaning you have used all <b><i>i</i></b> values in the set in line 2 in the equation given in like 5. " +
    "Now create the word formed by following the instruction using the option boxes by order of the word such that the word and the combinations selected below form the same word."];
var q2SudoDiv = protoDivCleared.cloneNode(true);

for (index = 0; index < codeLines.length; index++) {
    var codeLine = protoLabel.cloneNode(true);
    codeLine.innerHTML = (index + 1) + ") " + codeLines[index];
    codeLine.style.display = "block";
    if (index % 2 == 0) {
        codeLine.style.backgroundColor = "#87ceeb";
    }
    q2SudoDiv.appendChild(codeLine);
}

articleElement.appendChild(q2SudoDiv);
articleElement.appendChild(lineBreak());
//END OF EDITIONS
//Creating dropBox to be used as prototype for all other boxes
var dropBox = document.createElement('select');
dropBox.width = "35px";
dropBox.height = "30px";
for (index = 0; index < stringArray.length; index++) {
    var option = document.createElement('option');
    var val = stringArray[index];
    option.value = val;
    option.innerText = val;
    dropBox.appendChild(option);
}

var q2AnswerDiv = protoDivCleared.cloneNode(true);
for (index = 0; index < keys.length; index++) {
    var drop = dropBox.cloneNode(true);
    drop.id = "char" + (index + 1);
    q2AnswerDiv.appendChild(drop);
    drop.style.float = "left";
}

articleElement.appendChild(q2AnswerDiv);
articleElement.appendChild(lineBreak());
articleElement.appendChild(lineBreak());

/**
QUESTION 3

Element For Reuse:
protoDivCleared      - empty division cleared on both ends
div                  - empty division
headingElement       - h1 element, cleared on both ends
subtitleElement      - h4 element, cleared on both ends
**/
var q3Heading = headingElement.cloneNode(true);
q3Heading.innerText = "Question 3";
articleElement.appendChild(hr());
articleElement.appendChild(q3Heading);

var q3Subheading = subtitleElement.cloneNode(true);
q3Subheading.innerText = "The below question test your understanding of data structure and basic traversal. " +
    "The tree structure given below is important for answering the question that follow below it.";

articleElement.appendChild(q3Subheading);

var treeDefDiv = protoDivCleared.cloneNode(true);
treeDefDiv.innerHTML = "Starting with circle A having the value of 22 in it (the first value in the list given below), work through the list" +
    " in the given order and fill in the circles with the required numbers according to the following instructions:<br><br>";

articleElement.appendChild(treeDefDiv);

var treeImgDiv = protoDivCleared.cloneNode(true);
treeImgDiv.style.backgroundImage = "url('images//tree.png')";
treeImgDiv.style.backgroundSize = "400px 242px";
treeImgDiv.style.height = "242px";
treeImgDiv.style.backgroundPosition = "center";
treeImgDiv.style.backgroundRepeat = "no-repeat";

articleElement.appendChild(treeImgDiv);

var treeNumbers = [22, 33, 12, 10, 22, 1, 47, 58, 12, 22, 30, 46, 27, 32];
var labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];

var numberLabel = protoLabel.cloneNode(true);
numberLabel.innerHTML = "<br>Compare the given value to the value in the top circle and then work down.<br>If the value is less than or equal to the value above it, place it on the left side of the branch.<br>If the value is greater than the value above it, place it on the right side of the branch.<br><br>";
numberLabel.innerHTML += "For example: Start with A (equal to 22) as the first reference number and compare the next value in the list (33) to it.<br>If it is less or equal place it on the left side and if it is more place it on the right side in the circle below.<br>If the circle below it already contains a number compare the value you are working with to this new number and then place it on either the left or right circle below according to the rules.<br>";

numberLabel.innerHTML += "<br><b>Given the number set:</b> <br> \t{";
for (index = 0; index < treeNumbers.length; index++) {
    numberLabel.innerHTML += treeNumbers[index];
    if (index < treeNumbers.length - 1) {
        numberLabel.innerHTML += ", ";
    } else {
        numberLabel.innerHTML += "}<br>";
    }
}
numberLabel.innerHTML += "Insert these numbers to the tree using the rules defined above" +
    ", then use the selection boxes below to indicated the nodes in which each number will be located. " +
    "Note that one node will be left empty, this should be indicated by having no value assigned to the node.<br>";
articleElement.appendChild(numberLabel);

var q3AnswersDiv = protoDivCleared.cloneNode(true);

for (var pos = 0; pos < labels.length; pos++) {
    var numDropBox = document.createElement('select');
    numDropBox.width = "35px";
    numDropBox.height = "30px";
    var alpha = labels[pos];
    numDropBox.id = "numAnswer" + alpha;
    var firstOption = document.createElement('option');
    firstOption.innerText = alpha;
    numDropBox.appendChild(firstOption);
    for (index = 0; index < stringArray.length; index++) {
        var option = document.createElement('option');
        var val = treeNumbers[index];
        option.value = val;
        option.innerText = val;
        numDropBox.appendChild(option);
    }
    q3AnswersDiv.appendChild(numDropBox);
    numDropBox.style.float = "left";
}

articleElement.appendChild(lineBreak());
articleElement.appendChild(q3AnswersDiv);

var buttonDiv = protoDivCleared.cloneNode(true);
buttonDiv.align = "center";
buttonDiv.style.padding = "3px";

articleElement.appendChild(lineBreak());
articleElement.appendChild(hr())

var btnSubmit = document.createElement('button');
// btnSubmit.type = "button";
btnSubmit.id = "btnSubmit";
btnSubmit.innerHTML = "<h3>Submit</h3>";
btnSubmit.style.width = "150px";
btnSubmit.style.height = "60px";
buttonDiv.appendChild(btnSubmit);
articleElement.appendChild(buttonDiv);

btnSubmit.onclick =  function(){
    articleElement.innerHTML = "";
}