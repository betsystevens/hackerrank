// Given a string, S, of length N that is indexed from 0 to N-1, 
// print its even-indexed and odd-indexed characters as
// 2 space-separated strings on a single line 
// (see the Sample below for more detail).
// 0 is considered to be an even index.

// Input Format
// The first line contains an integer, T (the number of test cases).
// Each line of the subsequent T lines contain a String, S. 

// sample input:
// 2
// Hacker
// Rank

// output:
// Hce akr
// Rn ak

function processData(input) {
    let lines = input.trim().split('\n');
    T = parseInt(lines[0])
    let even = true; 
    let evenString = oddString = '';
    let words = lines.slice(1)
    words.forEach(function (word) {
        for (const c of word) {
            if (even) {
                evenString += c;
            }
            else { oddString += c; }
            even = !even;
        }
        console.log(`${evenString} ${oddString}`);
        evenString = oddString = '';
        even = true;
    })
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function bar (input) {
    _input += input;
});

process.stdin.on("end", function foo() {
   processData(_input);
});

