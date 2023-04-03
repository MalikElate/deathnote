const button = document.getElementById("addButton");
button.addEventListener("click", function() {
  console.log("Button clicked!");
  // add your code here to handle the button click event
  const input = document.getElementById("emailInput");
  const value = input.value;
  console.log("input value:", value);
});