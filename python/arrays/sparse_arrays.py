#!/bin/python3

import math
import os
import random
import re
import sys
from collections import Counter
# Given a collection of input strings, count the occurrences of
#  each query string 
# run from command line
# $ python3 sparse_arrays.py < sparse_arrays.data

# Discovered Counter from collections
# A dict subclass for counting hashable objects

# Complete the matchingStrings function below.
def matchingStrings(strings, queries):
  string_cntr = Counter() 
  for key in strings:
      string_cntr[key] += 1
  return([string_cntr[word] for word in queries]) 

if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')
    fptr = sys.stdout

    strings_count = int(input())

    strings = []

    for _ in range(strings_count):
        strings_item = input()
        strings.append(strings_item)

    queries_count = int(input())

    queries = []

    for _ in range(queries_count):
        queries_item = input()
        queries.append(queries_item)

    res = matchingStrings(strings, queries)

    fptr.write('\n'.join(map(str, res)))
    fptr.write('\n')

    fptr.close()
