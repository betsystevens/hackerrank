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



function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    console.log(arr);

    let max = []; 
    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
            let hourArr = 
                [arr[i+1][j+1]]
                .concat(arr[i].slice(j,j+3), arr[i+2].slice(j,j+3));
            max.push(hourArr.reduce((sum,num) => sum + num));
        }
    }
    console.log(Math.max(...max));

}
