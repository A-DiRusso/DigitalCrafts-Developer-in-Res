hist = {}

word = input('Please enter a word')


for i in word:
  hist[i] = hist.get(i, 0) + 1


print(hist)

