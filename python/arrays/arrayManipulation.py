#!/bin/python3

import math
import os
import random
import re
import sys
from collections import defaultdict

# start with 1-indexed array of zeros and a list of operations
#   [0 0 0 0 0]
# input: 
#   5 3       // 5: length array 3: number of subsequent lines
#   1 2 100   // add 100 to elements [1:2] inclussive
#   2 5 100   // add 100 to elements [2:5] inclusive
#   3 4 100   // add 100 to elements [3:4] inclusive
#   [100 100 0 0 0]
#   [100 200 100 100 100]
#   [100 200 200 200 100]
# return highest number, 200 in above example
# 
# Used algorithm from JAVAAID youtube video 
# Uses O(n+m) time.
# Once the time was brought down, my submission still failed many tests.
# I had not optimized the space and needlessly used two arrays.
# Only one array is needed. 
# Still could not pass after removing extra array.
# I had added one extra element to the array to make indexing easier. 
# When I removed the one extra element all tests passed.
# Literally one array element caused 7 or 8 tests to fail.
# Lesson learned.

# Complete the arrayManipulation function below.
def arrayManipulation(n, queries):
  a = [0]*(n+2)
  for query in queries:
    start = query[0]
    end = query[1]
    k = query[2]
    a[start] += k
    a[end+1] += -k
  maxval = 0
  for i in range(1, len(a)):
    a[i] = a[i] + a[i-1]
    if (maxval < a[i]): maxval = a[i]
  return maxval

if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')
    fptr = sys.stdout

    nm = input().split()

    n = int(nm[0])

    m = int(nm[1])

    queries = []

    for _ in range(m):
        queries.append(list(map(int, input().rstrip().split())))

    result = arrayManipulation(n, queries)

    fptr.write(str(result) + '\n')

    fptr.close()
