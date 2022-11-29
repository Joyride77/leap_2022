// var x = 4;
// var y = 3;
// var z = 2;
// var n1 = 240;
// var n2 = 175;
// alert(((x*x)+(y*y)-(z*z))/(n1*n2));

// let p = 3.14;
// let r = 4;
// alert(2 * p * r);

// let a = prompt('Give bottom');
// let b = prompt('Give top');
// let h = prompt('Give height');
// let area1 = (a+b)/2*h;
// alert(area1);

// let a = prompt('Give first number');
// let b = prompt('Give second number');
// if (a < b) {
//     alert ("it's true");
// } else {
//     alert ("it's false");
// }

// const yearOfBirth = prompt('Give me your birth date');
// const curyear = 2022;
// const old = curyear - yearOfBirth;
// if (0 <= old&&old <= 1) {
//     alert('infant')
// } else if (1 < old&&old <= 3) {
//     alert('Toddler')
// } else if (3 < old&&old <= 5) {
//     alert('Preschool')
// } else if (5 < old&&old <= 12) {
//     alert('Gradeschooler')
// } else if (12 < old&&old <= 18) {
//     alert('Teen')
// } else if (18 < old&&old <= 21) {
//     alert('Yound adult')
// } else if (21 < old&&old <= 50) {
//     alert('Adult')
// } else {
//     alert('Old')
// }

// let too = prompt('Give number')

// if ((too % 2)==1) {
//     alert('Sondgoi')
// } else {
//     alert ('Tegsh')
// }

// let too = prompt('Give number')

// if ((too%3)==0 || (too%7)==0) {
//     alert ('Yes')
// } else {
//     alert ('No')
// }

// let too = prompt('Give Temperature')
// let temp = (too*9/5)+32;
// let sign = ' F';
// alert (temp+sign);

// let weight = prompt('Give weight Kg');
// let height = prompt('Give height Meter');
// let bmi = weight/(height*height);
// if (0<bmi && bmi<=18.5) {
//     alert('Жингийн дутагдалтай')
// } 
// else if (18.5<bmi && bmi<=24.9) {
//     alert('Эрүүл')
// }
// else if (25<bmi && bmi<=29.9) {
//     alert('Илүүдэл жинтэй')
// }
// else if (30<bmi && bmi<=34.9) {
//     alert('Хэт таргаллалттай (Class 2)')
// }
// else if (35<bmi && bmi<=39.9) {
//     alert('Хэт таргаллалттай (Class 2)')
// }
// else {
//     alert('Turaachee')
// }

// let day = prompt('Give Day');
// console.log(typeof day);

// let dayNumber = Number(day);
// console.log(typeof dayNumber);

// let dayName;
// switch (dayNumber) {
//     case 1:
//         dayName = 'Monday';
//         break;
//     case 2:
//         dayName = 'Thursday';
//         break;
//     case 3:
//         dayName = 'Wednesday';
//         break;
//     case 4:
//         dayName = 'Tuesday';
//         break;
//     case 5:
//         dayName = 'Friday';
//         break;
//     case 6:
//         dayName = 'Saturday';
//         break;
//     case 7:
//         dayName = 'Sunday';
//         break;
//     default:
//         dayName = 'Invalid Day'
    
// }
// alert(dayName);

let n = prompt('Give number');
if (0<n) {
    alert('Positive');
} else {
    alert('Negative');
}