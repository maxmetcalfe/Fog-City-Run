import string
import os

results_file = open("/Users/max/Downloads/racesplitter_race.csv", "r")
os.system("grep -v '];' ../data/data.js > tmp.txt")
upload_file = open("tmp2.txt", "w")

race_date = raw_input("Race Date: ")

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
		upload_file.write("['" + place + "','" + bib + "','" + last + "','" + first + "','" + group + "','" + time + "','" + date + "'],\n")

	f = f + 1

upload_file.write("];")
results_file.close()
upload_file.close()
os.system("cat tmp.txt tmp2.txt > ../data/data.js")
os.system("rm tmp.txt && rm tmp2.txt")
os.system("sed -i '' -e's/\]$/\],/' ../data/data.js")
os.system("git add ../data/data.js")
os.system("git commit -m 'Added results from  " + race_date + "'")
os.system("git fetch origin")
os.system("git rebase origin/develop")
os.system("git push origin develop")
os.system("rm /Users/max/Downloads/racesplitter_race.csv")

print "Done."
