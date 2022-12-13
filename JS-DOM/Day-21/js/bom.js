console.log(window);
// window.alert('hello');

// window.open("https://google.com","haha");

// window.confirm('hello');

// let result = window.confirm("Do you want to quit?");
// console.log(result);

// let message = result ? "ta ok darlaa":
// "Ta cancel darlaa";

// alert(message);

let alertButton = document.getElementById('alertButton');
let cancelButton = document.getElementById('cancelButton');
let timeoutID;

alertButton.addEventListener('click', () => {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
});

cancelButton.addEventListener('click', () => {
    clearTimeout(timeoutID);
}) 

// My timer


let startMyTimer = document.getElementById("startTimer");
startMyTimer.addEventListener("click", () => {
    window.setInterval(startInterval, 1000);
})


function startInterval () {
    let now = new Date();
    let myTimer = document.getElementById('myTimer');
    myTimer.innerHTML = now;
}