let myButton = document.getElementById('myButton');
let red = document.getElementsByClassName('red');
let yellow = document.getElementsByClassName('yellow');

myButton.addEventListener ("click", () => {
    red.style = 'background-color : red';
    yellow.style = 'background-color : yellow';
})