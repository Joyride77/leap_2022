const registorNumber = prompt("Write Registor Number");
const registorChar1 = registorNumber.substr(0,1);
const registorChar2 = registorNumber.substr(1,2);

const registorNum = registorNumber.substr(2,9);
if (!Number.isInteger(Number(registorChar1)) && !Number.isInteger(Number(registorChar2)) && Number.isInteger(Number(registorNum)) && registorNumber.length == 10) {
    alert('Your register characters are correct');
}
else {
    alert('Your register characters are wrong');
}