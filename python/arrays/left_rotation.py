#!/bin/python3

import math
import os
import random
import re
import sys

# given array of length N and rotation amount D
# rotate array A to the left D positions
#  
# command line exection with sample input and output
#   N = 5, D = 3, A = 1 2 3 4 5
#   $ py left_rotation.py
#   5 3 
#   1 2 3 4 5
#   4 5 1 2 3
# 
#   N = 9, D = 2, A = 10 22 35 44 53 62 71 80
#   $ py left_rotation.py
#   8 2
#   10 22 35 44 53 62 71 80

if __name__ == '__main__':
    # get input user input
    nd = input().split()
    n = int(nd[0])
    d = int(nd[1])
    a = list(map(int, input().rstrip().split()))

    # rotate once d positions
    d = d % len(a) 
    b = a[d:] 
    b = b + a[0:d]
    print(" ".join(map(str, b)))

