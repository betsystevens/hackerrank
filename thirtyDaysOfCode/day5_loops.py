# given n, print first 10 multiples of n
# n = 2
# 2 x 1 = 2
# 2 x 3 = 6
# 2 x 4 = 8
# .....
# 2 x 10 = 20
# 
n = int(input())

for i in range(1, 11):
  print(f"{n} x {i} = {n*i}")

