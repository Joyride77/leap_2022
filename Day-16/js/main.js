let arrayHero = [1,4,5,6,7,10,3,2,10,9,8];
let array = [1,4,5,6,7,10,3,2,10,9,8];
let n = 0;
for (n; n < array.length; n++) {
    if (isEven(array[n])) {
        array[n] = array[n] + 4;
    } else {
        array[n] = array[n] - 5;
    }
}
console.log(arrayHero);
console.log(array);

function isEven(x) {
    if (x % 2 == 0) {
        // console.log("It is a even number");
        return true;
    } else {
        // console.log("It is a odd number");
        return false;
    }
}

console.log(isEven(arrayHero[0]));
console.log(isEven(arrayHero[1]));
// isEven(5);
// isEven(100);
// isEven(arrayHero[0]);

function addTwoNumbers(x,y) {
    return x + y;
}
console.log(addTwoNumbers(4,5));

function multiTwoNum (x,y) {
    const n = x * y;
    return n;
}
const result = multiTwoNum(4,5);
console.log(result);