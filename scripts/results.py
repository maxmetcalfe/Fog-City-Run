import string
import os

results_file = open("/Users/max/Downloads/racesplitter_race.csv", "r")
upload_file = open("/Users/max/Desktop/upload_results.csv", "w")

race_date = raw_input("Race Date: ")

upload_file.write("Place, Bib, Last Name, First Name, Group, Time, Date\n")

f = 0

for i in results_file:

	if f != 0:

		line = string.split(i, ",")
		place = line[0]
		bib = line[1]
		last = line[2]
		first = line[3]
		group = line[4]
		time = line[5]
		date = race_date
		upload_file.write(place + "," + bib + "," + last + "," + first + "," + group + "," + time + "," + date + "\n")

	f = f + 1

results_file.close()
upload_file.close()


os.system("cat /Users/max/Desktop/upload_results.csv ../data/all.csv > ../tmp.csv")
os.system("mv ../tmp.csv /Users/max/Desktop/")
