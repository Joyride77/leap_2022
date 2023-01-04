function add(x,y) {
    return x+y;
}

function print (f) {
    let y=2;
    let x=3;
    console.log(f(x,y));
}
print(add);

let x = () => {
    console.log('arrow function');
}

setTimeout (x,2000);

setTimeout(() => {
    console.log('x');
}, 2000);

function startInterval () {
    let now = new Date();
}

// My timer




function startInterval () {
    let now = new Date();
    let myTimer = document.getElementById('myTimer');
    myTimer.innerHTML = now;
}

startInterval(window.setInterval(startInterval, 1000));