import string
import os
import subprocess

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
os.system("rm tmp.txt tmp2.txt")
os.system("sed -i '' -e's/\]$/\],/' ../data/data.js")
os.system("git add ../data/data.js")
os.system("git commit -m 'Added results from  " + race_date + "'")
os.system("git fetch origin")
os.system("git rebase origin/master")
os.system("git push origin master")
os.system("rm /Users/max/Downloads/racesplitter_race.csv")
race_data = race_date.replace("/", "\/")
p = subprocess.Popen(["grep",race_date,"../data/data.js","-c"], stdout=subprocess.PIPE)
count = p.communicate()[0][:-1]

with open("../data/data.tsv", "a") as racer_count_file:
	    racer_count_file.write(race_date + "\t" + count)

os.system("ftp -in -u ftp://maxmetcalfe@maxmetcalfe.com/fcr/data/ ../data/data.tsv")

print "Done."
