import os
import string

results = open('../data/results.csv', 'r')

racers = []

for line in results:

	first = string.split(line, ",")[2]
	last = string.split(line, ",")[3]

	racers.append(last+","+first)

	os.system("grep '" + last + "," + first + "' ../data/all.csv > test.csv")


results.close()
