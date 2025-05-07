let heading = document.getElementsByClassName("h1")[0];
heading.style.color = "blue";
heading.style.backgroundColor = "beige";

heading.textContent = "Hello World!";

let para = document.getElementById("text");
para.className = "classP";
para.style.fontWeight = "bold";
para.textContent = "Hello World-p!";

let img = document.getElementsByTagName("img")[0];
img.src = "https://www.w3schools.com/images/w3schools_green.jpg";

let list = document.querySelectorAll("li");
for (let i = 0; i < list.length; i++) {
  list[i].textContent = "list item !";
  list[i].style.color = "red";
  list[i].style.border = "1px solid black";
  list[i].style.display = "inline-block";
}

let table = document.createElement("table");
document.body.appendChild(table);

let row = table.insertRow(0);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);

cell1.textContent = "heading";
cell2.textContent = "heading";
cell3.textContent = "heading";
let row2 = table.insertRow(1);
let cell5 = row2.insertCell(0);
let cell6 = row2.insertCell(1);
let cell7 = row2.insertCell(2);
let cell8 = row2.insertCell(3);
cell5.textContent = "1";
cell6.textContent = "2";
cell7.textContent = "3";

let row3 = table.insertRow(2);
let cell9 = row3.insertCell(0);
let cell10 = row3.insertCell(1);
let cell11 = row3.insertCell(2);
let cell12 = row3.insertCell(3);

cell9.textContent = "4";
cell10.textContent = "5";
cell11.textContent = "6";

table.classList.add("classTable");