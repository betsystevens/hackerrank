# Given a string, S, of length N that is indexed from 0 to N-1, 
# print its even-indexed and odd-indexed characters as 
# 2 space-separated strings on a single line (see the Sample below for more detail). 
# T is number of test cases, first line of input

# input
# 2
# Hacker
# Rank
# 
# output 
# Hce akr
# Rn ak
import sys

n = sys.stdin.readline()
n = int(n)
for i in range(n):
  line = sys.stdin.readline()
  line = r(line)
  print(line)