// let a = prompt('number');
// let sum = 0;
// let count = 0;
// while (count < a) {
//     // console.log(a.charAt(count));
//     sum = sum + Number(a.charAt(count));
//     count = count + 1;
// }
// console.log(sum);

// let n = Number(prompt("Give number"));
// let sum = 0;
// let rem = 0;

// while(n > 0) {
//     rem = n % 10;
//     sum = sum + rem;
//     n = Math.floor(n / 10);
// }
// console.log(sum);

let n = 0, rem = 0, sum = 0;
for (n = Number(prompt("Give number")); n > 0; n = Math.floor(n / 10)) {
    rem = n % 10;
    sum = sum + rem;
}
console.log(sum);

// 2 