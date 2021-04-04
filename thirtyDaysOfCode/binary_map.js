function getBinary(n) {
  const result = [0,1,2,3,4,5,
            6,7,8,9,10,
            11,12,13,14,15,
            16,17,18,19,20].map(x => 2**x);
  console.log(result);

  console.log(n.toString(2));

  let i = 0;
  while (i < result.length && result[i] < n) i++;
  console.log(n);
  let binary = '';
  // console.log(i-1);
  for (j = i - 1; j >= 0; j-- ) {
    let bin_digit = Math.trunc(n / result[j]);
    binary = binary.concat(bin_digit.toString());
    console.log(binary);
    n = n - bin_digit * result[j];
  }
  console.log(binary);

}

n = 100;
getBinary(n);

