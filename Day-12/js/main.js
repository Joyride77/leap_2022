// let a = 'hi';
// let b = 'hi';
// console.log(a < b);

// console.log(a == b);

// console.log(a === b);

// let c = 10;
// let d = '10';
// console.log(c == d);
// console.log(c === d);

// let e = true;
// let f = false;
// console.log(e < f);
// console.log(e > f);

// let result = 10;
// if (result > 10) {
//     console.log('more than 10');
// } else {
//     console.log('less than 10');
// }

// result > 10 ? (result < 11 ? console.log(test): console.log('hi')) : console.log('less than 10');

// const tip1 = 3000;
// const tip2 = 10000;
// const tip3 = 100000;

// let tipResult2 = (5000 <= tip2 && 30000 >= tip2) ? tip2 * 0.15 + tip2 : tip2 * 0.2 + tip2;
// console.log(tipResult2);

// const money = prompt("Money");
// const huu15 = money * 1.15;
// const huu20 = money *1.2;
// let tipResult = (5000 <= money && 30000 >= money) ? alert(huu15): alert(huu20);

// const sPoint = Number(prompt('Give me your score'));
// const sName = prompt('Give me your Name');
// let space = ' ';
// let onoo = 'оноо авсан ';
// let tentssen = '(Tentssen)';
// let tentseegui = '(Tentseegui)';

// let sResultF = 'Маш муу'
// let sResultD = 'Хангалттай'
// let sResultC = 'Дунд'
// let sResultB = 'Сайн'
// let sResultA = 'Маш сайн'
// if (sPoint < 60 ) {
//     alert(sName + space + sResultF + space + onoo + tentseegui);
// }
// else if (60 < sPoint && sPoint >69) {
//     alert(sName + space + sResultD + space + onoo + tentssen);
// }
// else if (70 < sPoint && sPoint >79) {
//     alert(sName + space + sResultC + space + onoo + tentssen);
// }
// else if (80 < sPoint && sPoint >89) {
//     alert(sName + space + sResultB + space + onoo + tentssen);
// }
// else if (90 < sPoint && sPoint >100){
//     alert(sName + space + sResultA + space + onoo + tentssen);
// } else {
//     console.log('buruu');
// }

// console.log(`${sName} - ${sResultF} - ${sPoint}`);

// alert(`Lorem Ipsum is simply \"dummy text of the printing\" and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n\n 
// \t when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
// `)

// const str = "Life, the universe";
// console.log(str.length);

// .charat(index) str[index]
// console.log(registorNumber.charAt(0));
// console.log(registorNumber[2]);

// const str = "Life and Universe";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let firstName = 'Jhon';
// let fullName = firstName.concat(' ','Smith')
// console.log(fullName);

// let ner = "Call of Duty";
// console.log(ner.substr(0,4));
// console.log(ner.substr(8,4));

// const registorNumber = prompt("Write Registor Number")
// if (registorNumber.length == 10) {
//     alert('Your Registor Number is correct!')
// } else {
//     alert('Your Registor Number is incorrect!')
// }

// const registorNumber = prompt("Write Registor Number")
// const registorChar1 = registorNumber.substr(0,1);
// const registorChar2 = registorNumber.substr(1,2);

// const registorNum = registorNumber.substr(2,9);
// if (!Number.isInteger(Number(registorChar1)) && !Number.isInteger(Number(registorChar2)) && Number.isInteger(Number(registorNum)) && registorNumber.length == 10) {
//     alert('Your register characters are correct');
// }
// else {
//     alert('Your register characters are wrong')
// }

const phoneNum = prompt("Please type your phone number!");
const phoneNationNum1 = phoneNum.substr(0,1);
const phoneNationNum2 = phoneNum.substr(1,1);
const phoneNationNum3 = phoneNum.substr(2,1);
const phoneNationNum4 = phoneNum.substr(3,1);
const phoneNationNumAll = phoneNum.substr(0,4);
const phoneNumber = phoneNum.substr(4,11);

if (!Number.isInteger(Number(phoneNationNum1)) && Number.isInteger(Number(phoneNationNumAll)) && phoneNationNum2 == 9 && phoneNationNum3 == 7 && phoneNationNum4 == 6 && Number.isInteger(Number(phoneNumber)) && phoneNationNum1 == '+' && phoneNum.length == 12) {
    alert("Your phone number is Correct");
} else {
    alert("Your phone number is Incorrect");
}

