console.log('Lesson Object');

let rabbit1 = {
    color : 'white',
    rName : 'Chandaga',
    gender : 'male',
    age : 2,

    jump: function () {
        console.log("Sorry I can't jump");
    },
    sayMyName : function( myName ) {
        console.log(`Your name is ${myName}`);
    }
}

console.log(rabbit1);
console.log(rabbit1.color);
rabbit1.color = 'Shavhai';
console.log(rabbit1);
rabbit1.jump();
rabbit1.sayMyName('Joy');

let rabbit2 = {
    color : 'pink',
    rName : 'Blackpink',
    gender : 'female',
    age : 3,

    jump: function() {
        console.log('I can jump');
    }
}
console.log('@@@@@@@@@@@@@@@');
console.log('Here is rabbit2');
console.log('@@@@@@@@@@@@@@@');

console.log(rabbit2);
let rabbits = [rabbit1, rabbit2];
console.log(rabbits);
rabbit2.jump();

