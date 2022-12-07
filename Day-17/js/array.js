// array at function

function findAt (arr,index) {
    return arr[index];
}

const array1 = [1,2,3,4,5];
console.log(findAt(array1, 0));
console.log(findAt(array1, 4));

console.log(array1.at(0));


//arr1 = [1,2,3] arr2 = [4,5,6] => [1,2,3,4,5,6]

function arrConcat(arr1, arr2) {

    let concatedArray = [];
    //arr.push()
    for (let i = 0; i < arr2.length; i++) {
        concatedArray.push(arr2[i])
    }
    for (let i = 0; i < arr1.length; i++) {
        concatedArray.push(arr1[i])
    }
    return concatedArray;
}

let arrayC1 = [1,2,3];
let arrayC2 = [4,5,6];
console.log(arrConcat(arrayC1,arrayC2));
console.log(arrConcat(arrayC2,arrayC1));

//arr1 = [1,2,3] arr2 = [4,5,6] => arr3 = [5,7,9]
function arrayElementAdd (arr1, arr2) {
    let sum = []
    for (let i = 0; i < arr1.length; i++) {
        sum[i] = arr1[i] + arr2[i];
    }
    return sum;
}
console.log(arrayElementAdd(arrayC1, arrayC2));

// array concat method [easy version]
console.log(arrayC1.concat(arrayC2));
console.log(arrayC1 + ',' + arrayC2);

// array includes method

// arr1 = [2,4,5] => 5->true , 2-> true, 3 ->false

let arrayIncludes = function (arr,number) {
    let found = false;
    for (let i = 0; i < arr.length; i++){
        if (number === arr[i]) {
            found = true;
            break;
        }
    }
    return found;
}
const arrayInc = [2,4,5];
console.log(arrayIncludes(arrayInc, 2)); //true
console.log(arrayIncludes(arrayInc, 5)); //true
console.log(arrayIncludes(arrayInc, 3)); //false

// array implicit function includes [easy version]
console.log('methods includes of array');
console.log(arrayInc.includes(2));
console.log(arrayInc.includes(5));
console.log(arrayInc.includes(3));

// arr1 = [1,2,3] => 3 index ? => 2

let findIndex = function (arr, number) {
    let index = -1;
    for (let i = 0; i <arr.length; i++) {
        if (number === arr[i]) {
            index = i;
        }
    }
    return index;
}

const arrIndex = [1,2,3];
console.log(findIndex(arrIndex, 3)); // => 2
console.log(findIndex(arrIndex, 2)); // => 1
console.log(findIndex(arrIndex, 10)); // => -1

// indexof [easy version]

console.log(arrIndex.indexOf(3)); // => 2
console.log(arrIndex.indexOf(2)); // => 1
console.log(arrIndex.indexOf(10)); // => -1

const animals = ['chono', 'buhun', 'temee', 'nugas', 'buhuns'];
console.log(animals.indexOf('buhen')); // => 1
console.log(animals.indexOf('buhen', 2)); // => 4
console.log(animals.indexOf('buhen', 2)); // => 4

// JOIN function

// arr1 = [1 ,2 ,3] => 123

let funcJoin = (arr,symbol) => {
    let output = '';

    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            symbol = '';
        }
        output = output + arr[i] + symbol;
    }
    return output;
}

const arrayJoin = [1,2,3];
console.log(funcJoin(arrayJoin, ',')) // => 1,2,3

// JOIN [easy version] 

const jiguurten = ['Elee', 'Heree', 'Galuu'];
console.log(jiguurten.join()); // 'Elee,Heree,Galuu'
console.log(jiguurten.join('')); // 'EleeHereeGaluu'
console.log(jiguurten.join('-')); // 'Elee-Heree-Galuu'

// Pop

// arr1 = [1,2,3] => pop => 3 hamgiin suulchiin elementiig hasna => [1,2]

let popFunc = (arr) => {
    const lastIndex = arr.length - 1;
    let poppedArray = [];

    for (let i =0; i < arr.length; i++) {
        if (i != lastIndex) {
            poppedArray.push(arr[i]);
        }
    }
    return poppedArray;
}

const popArray = [1,2,3];
console.log(popFunc(popArray)); // [1,2]
console.log(popFunc([12,3,5,1,3])); // [12,3,5,1]

// Pop [easy version]

const popArrayResult = [3,4,5,6,7]; // [3,4,5,6]
popArrayResult.pop();
console.log(popArrayResult);