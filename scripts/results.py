import string
import os

results_file = open("/Users/max/Downloads/racesplitter_race.csv", "r")
upload_file = open("../data/results.csv", "w")

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

os.system("cat ../data/results.csv ../data/all.csv > /Users/max/Desktop/upload.csv")
os.system("cat /Users/max/Desktop/upload.csv | grep -v Name > ../data/new.csv")
os.system("rm ../data/results.csv")
os.system("mv ../data/new.csv ../data/all.csv")
os.system("git add ../data/all.csv")
os.system("git commit -m 'Added results from  " + race_date + "'")
os.system("git fetch origin")
os.system("git rebase origin/develop")
os.system("git push origin develop")
os.system("rm /Users/max/Downloads/racesplitter_race.csv")

print "Done."
