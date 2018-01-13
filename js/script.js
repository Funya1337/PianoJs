function riw() {
  document.getElementById('myDiv').className = "riw";
  document.getElementById("butka").innerHTML = "DO";
}
function fiw() {
  document.getElementById('myDiv').className = "fiw";
  document.getElementById("butkl").innerHTML = "RE";
}
function liw() {
  document.getElementById('myDiv').className = "liw";
  document.getElementById("butkk").innerHTML = "MI";
}
function showAlert() {
  var myInput = document.getElementById('my_Input_name');
  var inputValue = myInput.value;
  if (inputValue === "g") {
    alert("Это нота до");
  }
  if (inputValue === "r") {
    alert("Это нота ре");
  }
  if (inputValue === "m") {
    alert("Это нота ми");
  }
}
