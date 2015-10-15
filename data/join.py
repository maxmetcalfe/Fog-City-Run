import string

runners_file = open('/Users/max/Documents/Home/Fog-City-Run/data/run_results2.csv', 'r')

for line in runners_file:
	first_name = string.split(line, ",")[0]
	last_name = string.split(line, ",")[1]
	print "Now: " + first_name
	runners_lookup = open('/Users/max/Documents/Home/Fog-City-Run/data/runners_lookup.csv', 'r')
	for line2 in runners_lookup:
		if first_name == string.split(line2, ",")[2] and last_name == string.split(line2, ",")[1]:
			print string.split(line2, ",")[0]

	runners_lookup.close()

runners_file.close()