'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
// Given a base-10 integer, n, convert it to binary (base-2). 
// Then find and print the base-10 integer denoting the maximum 
// number of consecutive 1's in n's binary representation.
// input
// 5 
// output
// 2
// binary of 5 is 101, 1 consecutive 1's
//
// input
// 13
// output
// 2
// binary of 13 is 1101, 2 consecutive 1's

function main() {
    const n = parseInt(readLine(), 10);
    console.log(n.toString(2));
    const binaryString = n.toString(2);
    let onesStreak = 0, maxStreak = 0;
    for (const c of binaryString) {
      onesStreak = ({
        '0' : 0,
        '1' : ++onesStreak
      })[c];
      if (onesStreak > maxStreak) maxStreak = onesStreak;
    }
    console.log(maxStreak);
}
