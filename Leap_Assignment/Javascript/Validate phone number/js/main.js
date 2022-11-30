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