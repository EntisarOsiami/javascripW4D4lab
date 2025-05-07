let heading = document.getElementsByClassName('h1')[0];
heading.style.color = 'blue';
heading.style.backgroundColor = 'beige';

heading.textContent = "Hello World!";

let para = document.getElementById("text");
para.className ="classP";
para.style.fontWeight = "bold";
para.textContent = "Hello World-p!";

let img = document.getElementsByTagName('img')[0];
img.src = "https://www.w3schools.com/images/w3schools_green.jpg";

let list = document.querySelectorAll('li');
for (let i = 0; i < list.length; i++) {
    list[i].textContent = "list item !";
    list[i].style.color = "red";
    list[i].style.border = "1px solid black";
    list[i].style.display = "inline-block";
}

let tableClass = document.getElementById('table1');
tableClass.classList.add('classTable');