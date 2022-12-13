function changeBackground () {
    document.getElementsByClassName('red')[0].style = 'background-color:red';
    document.getElementsByClassName('blue')[0].style = 'background-color:blue';

}
myButton.addEventListener("click",changeBackground);