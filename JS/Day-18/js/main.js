console.log('Day 18 - Array methods');

// shift

// arr1 = [1,2,3] => shift(arr1) => [2,3]

let shiftArr = (arr) => {
    let tempArray = [];
    for (let i = 0; i < arr.length; i++){
        if (i != 0) {
            tempArray.push(arr[i]);
        }
    }
    return tempArray;
}

let arr1 = [1,2,3];

console.log(shiftArr(arr1)); // [2,3]
console.log('array shift method');

// shift [easy version]

const arr = [1,2,3];
const firstElement = arr.shift();
console.log(arr); // [2,3]
console.log(firstElement);

// unshift array algorithm

// let unshiftArray = function(arr, number) {
//     let tempArray = [];
//     tempArray.push(number);

//     for(let i = 0; i < arr.length; i++){
//         tempArray.push(arr[i]);
//     }

//     return tempArray;
// }

// let arr2 = [5,6,7]
// console.log(unshiftArray());

// unshift [easy version]

const array1 = [1,2,3];
console.log(array1.unshift(4)); // 5
console.log(array1);
console.log('end');

// sort 
function sortingAlgorithm(arr) {
    for(let i = 0; i <= arr.length - 2; i++){
        let indexMin = i;
        for(let j = i+1;j < arr.length -1; j++){
            if(arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = temp;
    }
    return arr;
}

let sortArray = [1,2,7,8,-1,10];
console.log(sortingAlgorithm(sortArray)); // [-1,1,2,7,8,10]

// sort [easy version] 
const names = ['Marlaa', 'Javkhaa', 'Erdene', 'Dorj'];
names.sort();
console.log(names);

// Reverse 

function arrayReverse(arr) {
    let tempArray = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        tempArray.push(arr[i]);
    }
    return tempArray;
}

let arrReverse = [4,5,1,8];
console.log(arrayReverse(arrReverse)); // [8,1,5,4]

// Reverse [easy version]

const numbers = ['one', 'two', 'three'];
console.log('array1:', numbers);
const reversed = numbers.reverse();
console.log('reversed:', reversed);

// Slice 
const nameSlice = ['bat', 'dorj', 'purev', 'davaa', 'tomor'];
console.log(nameSlice.slice(2));
console.log(nameSlice);

function nameSlices (arr,index) {
    let tempArray = [];
    for (let i = index; i < arr.length; i++) {
        tempArray.push(arr[i]);
    }
    return tempArray;
    // for(let i = 0; i < index; i++){
    //     arr.shift();
    // }
    // return arr;
}

console.log(nameSlices([1,2,3,4,5], 2)); // [3,4,5]

// SPLICE 
console.log('splice method');

const spliceNames = ['davaa', 'lkhagva','purev','byamba'];
spliceNames.splice(1,0,'myagmar');
// 1 deh index  deer shineer uyga nemeg uildel
console.log(spliceNames);
spliceNames.splice(4,0,'baasan');
console.log(spliceNames);