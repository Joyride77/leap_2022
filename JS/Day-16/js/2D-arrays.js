/**
 * Problem
 * 
 * Example - 1 : Battleship
 * 
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * 
 * Example - 2 :Tic Tac Toe
 * 
 * x o x => row1
 * o o x => row2
 * x x o => row3
 */

let row1 =['x', 'o', 'x'];
let row2 =['o', 'o', 'x'];
let row3 =['o', 'o', 'x'];
console.log(row1);
console.log(row2);
console.log(row3);

let tictactoe = [['x', 'o', 'x'], ['o', 'o', 'x'], ['o', 'o', 'x']];
console.log(tictactoe);
console.log(tictactoe[1]);
console.log(tictactoe[1][1]);

tictactoe[prompt("Give col")][prompt("Give row")] = prompt('X or O');

console.log('for loop with for loop');

for (let n = 0; n < tictactoe.length; n++) {
    // double FOR loops
    let output = '';
    for (let m = 0; m < tictactoe[n].length; m++){
        output = output + "| " + tictactoe[n][m] + " |";
    }
    console.log(output);
}

