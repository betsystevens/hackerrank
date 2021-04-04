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
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    // [1, 4, 3, 2]
    console.log(arr);

    // reverse array into newArr
    let l = arr.length;
    let newArr = arr.slice(-1);
    console.log(newArr);
    for (let i = 1; i < l; i++){
      newArr = newArr.concat(arr.slice(-i-1,-i));
      console.log(newArr);
    }

    // use reduce to convert array elements to a string
    let result = newArr.reduce(makeString, '');

    function makeString(numString, num){ 
      return numString + num.toString() + ' ';
    }
    console.log(result);


}
