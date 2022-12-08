// Ex01 - JS Methods

const shoppingCard = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCard.includes('Meat')) {
    shoppingCard.unshift('Meat');
}
console.log(shoppingCard);

if (!shoppingCard.includes('Sugar')) {
    shoppingCard.push('Sugar');
}
console.log(shoppingCard);

let tempArray = shoppingCard.indexOf('Honey');
shoppingCard.splice(tempArray,1);
console.log(shoppingCard);

let tempArray1 = shoppingCard.indexOf('Tea');
shoppingCard.splice(tempArray1,1,'Green Tea');
console.log(shoppingCard);