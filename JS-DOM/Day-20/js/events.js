console.log('events');

let myButton = document.getElementById('myButton');
let color = 'green';

// function changeBackgroundColor() {
//     myButton.style = 'background-color : green'
// }

function changeColors() {
    console.log('clicked');
    if(color === 'green') {
        myButton.style = `background-color : ${color}`;
        color = 'white';
    } else {
        myButton.style = `background-color : ${color}`;
        color = 'green';
    }
}

// myButton.addEventListener("click", changeColors);

myButton.addEventListener('click', () => {
    if(color === 'green') {
        myButton.style = `background-color : ${color}`;
        color = 'white';
    } else {
        myButton.style = `background-color : ${color}`;
        color = 'green';
    }
})

let registerButton = document.querySelector('#register');
document.querySelector('#register').disabled = true;

myButton