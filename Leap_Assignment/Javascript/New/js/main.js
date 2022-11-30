const phoneNum = prompt("Please type your phone number!");
const phoneNationNum1 = phoneNum.str(0,1);
const phoneNationNum2 = phoneNum.str(1,2);
const phoneNationNum3 = phoneNum.str(2,3);
const phoneNationNum4 = phoneNum.str(3,4);
const phoneNationNumAll = phoneNum.str(0,4);
const phoneNumber = phoneNum.str(4,11);

if (!Number.isInteger(Number(phoneNationNum1)) && Number.isInteger(Number(phoneNationNumAll)) && phoneNationNum2 == 9 && phoneNationNum2 == 7 && phoneNationNum2 == 6 && Number.isInteger(Number(phoneNumber)) && phoneNum.length == 12) {
    alert("Your phone number is Correct");
} else {
    alert("Your phone number is Incorrect");
}