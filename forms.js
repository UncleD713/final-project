
var form = document.getElementById("form");
var input = document.getElementById("input");
var button = document.getElementById("button");
var list = document.getElementById("list");
var id = 1;

button.addEventListener("click" , addToDoItem);

list.addEventListener("click", boxChecked);

function addToDoItem() {
    
}
var text = input.nodeValue;
var item = <li id="li"