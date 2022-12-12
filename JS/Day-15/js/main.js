// /**
//  * Game setup
//  * 
//  * User should guess a number 
//  * 
//  * We need to create a new ship on the board
//  * 
//  * | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
//  * | x | x | 0 | 0 | 0 | x | x |
//  * 
//  */

// let guesses = 0;
// let isSunk = false;
// let hit = 0;

// let location1 = 3;
// let location2 = 4;
// let location3 = 5;
// console.log("Game begins!");

// while (!isSunk) {
//     let userGuess = Number(prompt("Give me your position?"));
//     guesses = guesses + 1;
//     if (guesses > 6) {
//         // console.log(guesses);
//         break;
//     }
//     if (userGuess > 0 && userGuess < 7) {
//         console.log(userGuess);
//         if (location1 == userGuess || location2 == userGuess || location3 == userGuess) {
//             hit = hit + 1;
//             // if you hit the location1
//             if (location1 == userGuess) {
//                 location1 = -1;
//             }
//             if (location2 == userGuess) {
//                 location2 = -1;
//             }
//             if (location3 == userGuess) {
//                 location3 = -1;
//             }
//             console.log("You hit!");
//         } else {
//             console.log("You miss!");
//         }
        
//         console.log(hit);
//         if (hit == 3) {
//             isSunk = true;
//         }
        
//     } else {
//         console.log('Give me numbers between 0 and 6');
//     }
// }
// if (isSunk == true && guesses < 6) {
//     console.log("You WON!");
// } else if (guesses > 6) {
//     console.log("You LOSE!");
// } else {
//     console.log("You LOSE!");
// }
// console.log("Game ends!");