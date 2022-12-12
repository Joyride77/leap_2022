console.log('data is here');
let now = new Date();
console.log( now );

let Dec31_2022 = new Date("2022-12-31");
console.log(Dec31_2022);
let differencec = Dec31_2022 - now;


let time = new Date(differencec);
console.log(time.getDate());