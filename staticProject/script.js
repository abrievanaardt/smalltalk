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
questionElement.innerHTML = "Given the boxes above, give the resulting number of items at the end of the scenario " +
    "described below:";
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

var q2QuestionDiv = protoDivCleared.cloneNode(true);
var q2QuestionLabel = protoLabel.cloneNode(true);
q2QuestionLabel.innerHTML = "Given the table above where the first row values " +
    "represent the index or position of the character in a String formed by the " +
    "inorder sequence of the characters in the second row. Use the dropdown below " +
    "to construct the String that results from running the below instructions:";
q2QuestionDiv.appendChild(q2QuestionLabel);
articleElement.appendChild(q2QuestionDiv);
articleElement.appendChild(lineBreak())

var finalStringSize = 8;

var codeLines = ["Given to you<br> &#09;  - String called <b>name</b>, currently empty" +
    "<br>&#09;  - Number called <b>key</b> currently sent to <i>0</i> <br>  - A constant Number called <b>size</b> with the value " + finalStringSize,
    "<em>if</em>: <b>key</b> is less than 8 move to following instruction line or end all precesses",
    "\\ttake the value of <b>key</b> add <b>1</b> to the value (note: this won't change value of <b>key</b>)",
    "\\ttake the value calculated above"];
var q2SudoDiv = protoDivCleared.cloneNode(true);

for (index = 0; index < codeLines.length; index++) {
    var codeLine = protoLabel.cloneNode(true);
    codeLine.innerHTML = (index + 1) + ") " + codeLines[index];
    codeLine.style.display = "block";
    if (index % 2 == 0) {
        codeLine.style.backgroundColor = "#D3D3D3";
    }
    q2SudoDiv.appendChild(codeLine);
}

articleElement.appendChild(q2SudoDiv);
articleElement.appendChild(lineBreak())

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
for (index = 0; index < finalStringSize; index++) {
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
treeDefDiv.innerHTML = "A <b>Tree</b> is a data structure accessed beginning at the root node. Each node is" +
    " either a leaf or an internal node. An internal node has one or more child nodes and is called the parent of its child nodes.";

articleElement.appendChild(treeDefDiv);

var treeImgDiv = protoDivCleared.cloneNode(true);
treeImgDiv.style.backgroundImage = "url('images//tree.png')";
treeImgDiv.style.backgroundSize = "400px 242px";
treeImgDiv.style.width = "400px";
treeImgDiv.style.height = "242px";

articleElement.appendChild(treeImgDiv);

var treeNumbers = [22, 33, 12, 10, 22, 1, 47, 58, 12, 22, 30, 46, 27, 32];
var labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];

var numberLabel = protoLabel.cloneNode(true);
numberLabel.innerHTML = "<b>Given the number set:</b> <br> \t{";
for (index = 0; index < treeNumbers.length; index++) {
    numberLabel.innerHTML += treeNumbers[index];
    if (index < treeNumbers.length - 1) {
        numberLabel.innerHTML += ", ";
    } else {
        numberLabel.innerHTML += "}<br>";
    }
}
numberLabel.innerHTML += "Insert these numbers to the tree using the rules defined above" +
    ", then used the selection boxes below to indicated the nodes in which each number will be located." +
    "Note that one node will be left empty, this should be indicated by having no value assigned to the node";
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