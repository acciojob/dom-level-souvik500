//your JS code here. If required.

// let ul = document.getElementsByTagName("ul")[0];

// for(let i=0;i<ul.children.length;i++){
// 	if(ul.children[i].id === "level"){
// 		// let index = i+1;
// 		alert("The level of the element is: "+i);
// 	}

document.addEventListener("DOMContentLoaded", function() {
  let element = document.getElementById("level");
  let level = calculateDOMLevel(element);
  alert("The level of the element is: " + level);
});

function calculateDOMLevel(element) {
  let level = 1;
  while (element.parentElement) {
    element = element.parentElement;
    level++;
  }
  return level;
}