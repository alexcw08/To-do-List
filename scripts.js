// Target HTML elements and set them to variables
const addBar = document.getElementById("theBar");
const testChore = document.getElementById("testChore");
const choreList = document.getElementById("choreList");
addBar.addEventListener("keypress", addToList);

function addToList(key) {
  if (key.keyCode === 13) {
    let userInput = addBar.value;
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "testChore");
    newDiv.innerHTML = userInput;
    choreList.append(newDiv);
    addBar.value = "";
  }
}
