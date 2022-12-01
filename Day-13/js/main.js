// console.log(Math.PI);
// console.log(Math.PI.toFixed(2));

// const budget = 1_000_000_000;
// console.log(budget);

// const degrees = 45;
// let rad = degrees * (Math.PI / 180);
// console.log(rad.toFixed(4));

// let a = 5, b = 9;
// const diff = Math.abs(a-b); 
// console.log(diff);

// console.log(Math.ceil(0.8)); //output 1
// console.log(Math.floor(5.99)); //output 5
// console.log(Math.round(0.49)); //output 0
// console.log(Math.max(1,3,2)); //output 3
// console.log(Math.min(2,3,1)); //output 1

// console.log(Math.pow(7,3)); //7-iin 3n zereg output 343
// console.log(Math.sqrt(45)); //Zereg olno

// const y = Number(prompt('Give me Y'));
// const z = Number(prompt('Give me Z'));

// let fixed1 = Math.sqrt((Math.pow(y,2))+(Math.pow(z,2))).toFixed(3);
// console.log(fixed1);

// console.log(Math.ceil(Math.random() * 5));

// let num1 = Number(prompt('Give Random Number'));
// let num2 = Number(prompt('Give Random Number'));

// console.log(Math.ceil(Math.random() * (Math.max(num1,num2) - Math.min(num1,num2)) + Math.min(num1,num2)));

// let count = 1;
// while (count <= 50) {
//     console.log(Math.ceil(Math.random() * (Math.max(num1,num2) - Math.min(num1,num2)) + Math.min(num1,num2)));
//     count = count + 1;
// }

// console.log('loop ended');

// let answer = prompt("Do you want to play? Yes/No");
// while (answer == 'yes') {5
//     answer = prompt("Want to continue?");
//     if (answer == 'yes') {
//         alert('Thanks');
//     }
// }
// console.log('you lose');

let number = Number(prompt('Give number'));
let num1 = 1;
let sum = 0;
while (num1 <= number) {
    num1 = num1 + 1;
    sum = sum + num1;
}
console.log(sum);