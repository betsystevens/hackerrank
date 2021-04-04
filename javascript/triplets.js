'use strict';
// usage: node triplets.js

// given r and list of integers count the number of triplets
// where {i,j,k} are a geometric sequence
// of common ratio r
// example
/*
   * r = 3
   {1,3,9}, {3,9,27}, {9,27,81} are valid geometric sequences
   * r = 4
   {1,4,16} and {4,16,64} would be geometric sequences 
  
*/
/*
 *  1. create Map to hold each number 
        entries = new Map();

 *  2. traverse array

 *  3. for each unique element, n in array
        an entry will be made in entries
        entries.set(n, {count: 1, r: 0, r2: 0})
        count: number of occurrences of n
        r: count of r factors
        r2: count of r squared factors 

 *  3. count: number of occurrences of n in array
        count is increased by one on each occurrence 

 *  4. r: number of occurrences of n/r
        when n is first entered, and on every encounter,
        check for n/r in Map, 
          if entries.has(n/r) add current count of n/r to r
          let nEntry = entries.get(n)
          let rEntry = entries.get(n/r)
          nEntry[r] = nEntry[r] + rEntry[count]
          entries.set(n, nEntry)
 *  similarly for n/r*r
 *  5. r2: number of occurrences of n/r*r
          when n if first entered and every subsequent occurrence, 
          check for n/r*r in Map,
          if exists update r2 for n
 *  6. if r2 is increased, triplets count has increased
          from n/r entry, get r
          let rEntry = entries.get(n/r)
          sum = sum + rEntry(r)
  *   for n, if it's r2 increased, triplets were completed
  *   The number of triplets completed with ths increase in n
  *   is the number of valid pairs, valid {i, j} that have already
  *   occurred in the array. This is the value stored in 
  *   entries(n/r) r property.
 */

const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

function get_rCount(n) {
  if (entries.has(n / r)) {
    return entries.get(n / r).count;
  } else {
    return 0;
  }
}
function get_r2Count(n) {
  if (entries.has(n / r)) {
    return entries.get(n / r).r;
  } else {
    return 0;
  }
}
// const arr5 = [1, 3, 1, 3, 9, 3, 3, 9, 27];
const arr5 = [1, 3, 1, 3, 9, 3, 3, 9, 27, 1, 3, 9, 9, 27];
const r = 3;
const entries = new Map();
let sum = 0;
arr5.forEach((n) => {
  let rCount = get_rCount(n);
  let r2Count = get_r2Count(n);
  if (entries.has(n)) {
    let newCount = entries.get(n).count + 1;
    let newR = entries.get(n).r + rCount;
    entries.set(n, { count: newCount, r: newR });
    if (entries.has(n / r)) {
      sum += r2Count;
    }
  } else {
    entries.set(n, { count: 1, r: rCount });
    if (entries.has(n / r)) {
      sum += r2Count;
    }
  }
});
console.log('the final map....');
entries.forEach(function(value, key) {
  console.log(`${key}: ${value.count}, ${value.r}`);
});
console.log(`sum: ${sum}`);

/* brute force algorithm */
const arr1 = [
  [1, 1, 1, 3, 9],
  [1, 1, 1, 3, 9, 9],
  [1, 1, 1, 3, 9, 9, 9],
  [1, 1, 1, 3, 9, 9, 9, 9],
];

const arr4 = [
  [1, 3, 1, 3, 9],
  [1, 3, 1, 3, 9, 3, 3, 9],
  [1, 3, 1, 3, 9, 3, 3, 9, 27],
  [1, 3, 1, 3, 9, 3, 3, 9, 27, 1, 3, 9],
  [1, 3, 1, 3, 9, 3, 3, 9, 27, 1, 3, 9, 27],
  [1, 3, 1, 3, 9, 3, 3, 9, 27, 1, 3, 9, 27, 81],
];
function findTriplets(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 3; i++) {
    for (let j = i + 1; j <= arr.length - 2; j++) {
      for (let k = j + 1; k <= arr.length - 1; k++) {
        if (arr[k] === arr[j] * r && arr[j] == arr[i] * r) {
          sum += 1;
        }
      }
    }
  }
  return sum;
}
// let r = 3;
const arr6 = [[1, 3, 1, 3, 9, 3, 3, 9, 27, 1, 3, 9, 9, 27]];
arr6.forEach((a) => {
  let sum = 0;
  console.log(a);
  sum = findTriplets(a);
  console.log(`sum: ${sum}`);
});
