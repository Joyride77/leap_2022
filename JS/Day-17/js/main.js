// function pow (number,exponent) {
//     let multiply = 1;
//     for (let i = 1; i <= exponent; i++) {
//         multiply = multiply * number;
//     }
//     return multiply;
// }

// let result = pow (2,3);
// console.log(result);
// console.log(pow(2,4));
// console.log(pow(5,2));


function findMin(x,y) {
    if (x > y) {
        // console.log(y + " is smaller than " + x);
        return true;
    } else {
        // console.log(x + " is smaller than " + y);
        return false;
    }
}
console.log(findMin(2,4));
console.log('END');

function printArray (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}


let findArrayMax = function (arrays) {
    let max = -1;
    for (let n = 0; n < arrays.length; n++) {
        if (max < arrays[n]){
            max = arrays[n];
        }
    }
    return max;
}


let findArrayAverage = (ret) => {
    let sum = 0;
    for (let b = 0; b < ret.length; b++) {
        sum = ret[b] + sum;
    }
    const average = sum/ret.length;
    return average;
}

let myArr = [1,2,3,4,5,6];
console.log(findArrayAverage(myArr));
console.log('END');
// printArray(myArr);
// console.log(findArrayMax(myArr));
// console.log('END');