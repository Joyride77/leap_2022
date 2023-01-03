let input = document.querySelector('.guess')
let between = document.querySelector('.between')
let button = document.querySelector('.check');
let message = document.querySelector('.message');
let number = document.querySelector('.number')
let reload = document.querySelector('.again')
let body  = document.getElementsByTagName('body')
let score = document.querySelector('.score')
let highScore = document.querySelector('.highscore')


let randomNum = Math.ceil(Math.random() * 7)
console.log('Random Number: ',randomNum)

button.addEventListener('click', () => {
    let inputValue = Number(input.value);
    let scoreNum = Number(score.textContent)
    function checkNum (num){
        if (num >= 20) {
            message.innerHTML = "20-оос бага тоо оруулна уу!";
        } 
        else if (num <= 0) {
            message.innerHTML = "0-оос их тоо оруулна уу!"
        }
        else if (!Number.isInteger(num)) {
            message.innerHTML = "Тоо оруулна уу!"
        }
        else if (num == randomNum) {
            number.innerHTML = randomNum;
            message.innerHTML = "Та яллаа!!!"
            document.body.style.backgroundColor = "#60b347";
            document.getElementsByTagName('h1')[0].innerHTML = "Та яллаа!!!";
            highScore.textContent = scoreNum;
        }
        else if (num != randomNum) {
            result = scoreNum - 1;
            score.textContent = result;
            message.innerHTML = "Үргэлжлүүлээд таагаарай..."
            if (result == 0) {
                document.body.style.backgroundColor = "red";
                document.getElementsByTagName('h1')[0].innerHTML = "Та ялагдлаа!!!";
                console.log("Lol: ",result);
                message.innerHTML = "Та ялагдлаа!!!"
                number.innerHTML = randomNum;
            } else if (result <= 0) {
                score.textContent = 0;
                message.innerHTML = "Шинээр эхлэнэ үү!!!"
            }
        }
        else {
            message.innerHTML = "Үргэлжлүүлээд таагаарай..."
        }
    }
    checkNum(inputValue);
    // console.log('Input value: ',inputValue);
    console.log('Score: ', scoreNum)
})

reload.addEventListener('click', () => {
    location.reload();
})

