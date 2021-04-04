'use strict';
// usage (1):
//      node readStdinSkeleton.js
// >    line one
// >    line two
// >    ^d
// usage (2):
//      node readStdinSkeleton.js < someDataFile

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function main() {
  // this is where you would do some amazing stuff....
  console.log(inputString);
}
