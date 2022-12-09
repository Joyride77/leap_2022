let animals = [
    {
        type: 'dog',
        sound: 'woof'
    },
    {
        type: 'cow',
        sound: 'moo'
    },
    {
        type : 'cat',
        sound: 'meow'
    }
]

function howDoesTheFoxSay(array, animalType) {
    for(let i = 0; i < array.length; i++){
        if (array[i].type == animalType) {
            console.log(array[i].sound+'-'+array[i].sound+'-'+array[i].sound);
        }
    }
}

howDoesTheFoxSay(animals,'dog'); //Woof-Woof-Woof
console.log('Dog barking');
howDoesTheFoxSay(animals,'cow'); //Moo-Moo-Moo
console.log('Cow mooing');
howDoesTheFoxSay(animals,'cat'); //Meow-Moew-Moew
console.log('Cat meowing');