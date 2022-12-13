console.log('exercies');

console.log(document.getElementById("aimag-101").innerHTML);
console.log(document.getElementById("aimag-522").innerHTML);
console.log(document.getElementById("aimag-315").innerHTML);


document.getElementById('aimagNames').style = "font-size: 1.5rem; list-style: none; color: brown; border: 1px solid black; border-radius : 20px; padding : 50px";

// for (let i = 0; i < document.getElementsByClassName('khangai').length; i++) {
//     document.getElementsByClassName('khangai')[i].style = "background : #ccc; border: 1px solid black; border-radius : 10px; padding:10px; color: blue";
// }

// for (let i = 0; i < document.getElementsByClassName('baruun').length; i++) {
//     document.getElementsByClassName('baruun')[i].style = "background : #777; border: 1px solid black; border-radius : 10px; padding:10px; color: white";
// }

console.log(document.getElementsByTagName('span')[0].innerHTML);

for (let i = 0; i < document.getElementById('aimagNames').getElementsByTagName('li').length; i++){
    if(document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-1')) {
        document.getElementById('aimagNames').getElementsByTagName('li')[i].style = "background : #ccc; border: 1px solid black; border-radius : 10px; padding:10px; color: blue";
    }
    if(document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-2')) {
        document.getElementById('aimagNames').getElementsByTagName('li')[i].style = "background : #777; border: 1px solid black; border-radius : 10px; padding:10px; color: white";
    }
    if(document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-3')) {
        document.getElementById('aimagNames').getElementsByTagName('li')[i].style = "background : green; border: 1px solid black; border-radius : 10px; padding:10px; color: white";
    }
    if(document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-4')) {
        document.getElementById('aimagNames').getElementsByTagName('li')[i].style = "background : #ff4444; border: 1px solid black; border-radius : 10px; padding:10px; color: black";
    }
    if(document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-5')) {
        document.getElementById('aimagNames').getElementsByTagName('li')[i].style = "background : #cc6712; border: 1px solid black; border-radius : 10px; padding:10px; color: #ccc";
    }
}

console.log(document.querySelector("#aimagNames"));

console.log(document.querySelector('.khangai'));
console.log(document.getElementsByClassName('khangai'));
console.log(document.querySelectorAll('.khangai'));

document.querySelector("#demo").innerHTML = "Date : " + Date();

document.querySelector('img').src = "img/dog.jpeg";
document.querySelector('img').style = "object-fit: cover; width: 100%";

const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const body = document.getElementsByTagName("body");
body[0].appendChild(newDiv);