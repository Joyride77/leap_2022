// Ex02 - simple 1

let array = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon','Coffee'];
console.log(array);
array.sort();

console.log('Sorting')
console.log(array);

console.log('Reversing')
const reverse = array.reverse();
console.log(reverse);

console.log('Removing first index');
const firstElement = array.shift();
console.log(array);

console.log('Removing middle index');
if (array.length % 2 == 0){
    let tempArray = array.splice(array.length/2 - 1 ,2);
    console.log(array);
} else {
    let tempArray = array.splice(array.length/2 , 1);
    console.log(array);
}

console.log('Removing last index');
const popValue = array.pop();
console.log(array);

console.log('Remove all index');
const RemoveAll = array.splice(0,array.length);
console.log(array);
