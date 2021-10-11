// Target HTML elements and set them to variables
const addBar = document.getElementById("theBar");
const choreList = document.getElementById("theChoreList");
const doneButton = document.getElementById("doneBtn");
var isClicked = false;

// Function that will capture what is input and creates an entry holding the input, along with a done button
addBar.addEventListener("keypress", addToList);
function addToList(key) {
  if (key.keyCode === 13) {
    let userInput = addBar.value;
    // Create new elements
    const newDiv = document.createElement("div");
    const newDoneButton = document.createElement("button");
    const newDelButton = document.createElement("button");
    const newBtnContainer = document.createElement("div");

    // Set ID and innerHtml for newly created elements
    newDiv.setAttribute("class", "testChore");
    newDiv.innerHTML = userInput;

    newDoneButton.setAttribute("id", "doneBtn");
    newDoneButton.innerHTML = "Done";

    newDelButton.setAttribute("id", "delBtn");
    newDelButton.innerHTML = "Delete";

    newBtnContainer.setAttribute("id", "btnContainer");

    // Append new elements
    choreList.append(newDiv);
    newDiv.append(newBtnContainer);
    newBtnContainer.append(newDoneButton);
    newBtnContainer.append(newDelButton);

    // Resets the value of the add bar
    addBar.value = "";

    // Event listeners for buttons
    newDoneButton.addEventListener("click", doneFunc);
    newDelButton.addEventListener("click", delFunc);
  }
}
// Done function that toggles between element appearing 'undone' and 'done
function doneFunc() {
  this.parentElement.parentElement.classList.toggle("testClicked");
}
// Delete function that removes the container holding the chore element
function delFunc() {
  this.parentElement.parentElement.remove();
}
