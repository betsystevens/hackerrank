function processData(input) {
    //Enter your code here
    let lines = input.trim().split('\n');
    let tele_book = new Map();
    let n = Number(lines[0]);
    for (i = 1; i <= n; i++){
      let a = lines[i].split(' ');
      tele_book.set(a[0], a[1]);
    }

    for (i = n+1; i < lines.length; i++) {
      let key = lines[i];
      let number = tele_book.get(key);
      if (number === undefined) console.log('Not found');
      else console.log(`${key}=${number}`);
    }
} 
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
