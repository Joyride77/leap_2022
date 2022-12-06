// Function declaration
function f () {
    console.log('Hello');
}

// Function call

f();

/**
 * f(x) = x * x => x is parameter buyu function-iig gadnaas avdag huvisagch
 */
// 1.
function f1 (x) {
    console.log(x * x);
}
f1(5);

// 2.
function f2 (x,y) {
    console.log(Math.pow(x,2) + Math.pow(y,2));
}
f2(2,3);

// 3.
function f3 (x,y) {
    console.log(Math.pow((x + y),2));
}
f3(2,3);

// 4. E=mc^2
function e (m,c) {
    console.log(m * Math.pow(c,2));
}
const c = Math.pow((3*10),8);
e(78,c);

// 5. f(x) = x!
function factorial(x) {
    let sum = 1;
    for(let i = 1; i <= x; i++) {
        sum = sum * i;
    }
    console.log(sum);
}
factorial(4);

//6.
function f6(x,y) {
    console.log(Math.cos(x) - Math.cos(y));
}
f6(30,30);

//7. 
function f7(x) {
    console.log(Math.pow(x,3) + Math.pow(x,2) + (5*x) + 12);
}
f7(2);

//8.
function f8(x) {
    console.log(Math.pow(x,2));
}

//9
function f9(x) {
    console.log(Math.sqrt(x));
}
f9(9);