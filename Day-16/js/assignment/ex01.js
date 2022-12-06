function findMax (x,y) {
    if (x < y) {
        console.log(y + " is bigger than " + x);
    } else {
        console.log(x + " is bigger than " + y);
    }
}
findMax(Number(prompt('Num1')), Number(prompt('num2')));