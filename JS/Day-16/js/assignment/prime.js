let input = Number(prompt("Give me your Prime Number"));
let temp = 0;
let i = 2;

for (i; i < Math.round(input/2); i++); {
    if (input % i == 0) {
        temp = temp + 1;
    }
}

console.log(temp);
if (temp == 0) {
    console.log("It's prime number");
} else {
    console.log("Not prime number");
}