// Write a Person class with an instance variable, age, 
// and a constructor that takes an integer, initialAge, as a parameter. 
// The constructor must assign initialAge to age after confirming the 
// argument passed as initialAge is not negative; 
// if a negative argument is passed as initialAge, 
// the constructor should set age to 0
// and print Age is not valid, setting age to 0. 
// In addition, you must write the following instance methods:

    // yearPasses() should increase the age instace variable by 1
    // amIOld() should preform the following actions.
    //  if age < 13 print 'You are young.'
    //  if 13 <= age < 18 print 'You are a teenager.'
    //  if age > 18 print 'You are old.'

// input:
// first line has an integer T, 
// next T lines have integer denoting age
// sample:
// 4
// -1
// 10
// 16
// 18

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function Person(initialAge){
  // some checks on initialAge
  if (initialAge > 0) {
    this.age = initialAge;
  } else {
      this.age = 0
      console.log('Age is not valid, setting age to 0.')
  }
  this.amIOld = function(){
   // print out the correct statement to the console
      if (this.age < 13) console.log('You are young.');
      else if (this.age >= 18) console.log('You are old.');
      else console.log('You are a teenager.');
  };
  this.yearPasses = function(){
    this.age += 1;
   };
}

function main() {
    var T = parseInt(readLine());
    for(i = 0; i < T; i++){
        var age = parseInt(readLine());
        var p = new Person(age);
        p.amIOld();
        for(j = 0; j < 3; j++){
            p.yearPasses();
        }
        p.amIOld();
        console.log("");   
        }
}
