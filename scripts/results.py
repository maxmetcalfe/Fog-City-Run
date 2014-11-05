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
os.system("rm tmp.txt")
os.system("sed -i '' -e's/\]$/\],/' ../data/data.js")
os.system("git add ../data/data.js")
os.system("rm /Users/max/Downloads/racesplitter_race.csv")
race_data = race_date.replace("/", "\/")
p = subprocess.Popen(["grep",race_date,"../data/data.js","-c"], stdout=subprocess.PIPE)
count = p.communicate()[0][:-1]

with open("../data/data.tsv", "a") as racer_count_file:
	    racer_count_file.write(race_date + "\t" + count)

os.system("git add ../data/data.tsv")
os.system("ftp -in -u ftp://maxmetcalfe@maxmetcalfe.com/fcr/data/ ../data/data.tsv")
os.system("ftp -in -u ftp://maxmetcalfe@maxmetcalfe.com/fcr/data/ ../data/data.js")
os.system("git commit -m 'Added results from  " + race_date + "'")
os.system("git fetch origin")
os.system("git rebase origin/master")
os.system("git push origin master")
# Test: Send tweet of winner. Should use Twitter API call.
b = subprocess.Popen(["head","-n1","tmp2.txt"], stdout=subprocess.PIPE)
winner = string.split(b.communicate()[0], ",")
first_name = winner[3][1:-1]
last_name = winner[2][1:-1]
time = winner[5][1:-1]
msg = first_name + " " + last_name + " won the Fog City Run this week with a time of " + time + "."
command = 'twitter -efogcityrun@email.com set %s' % msg
os.system("rm tmp2.txt")
subprocess.call(command, shell=True)
print "Tweet posted."
print "Done."

# Create top racers list (for future use in website table)
os.system("grep "" ../data/data.js | awk -F"," ' { print $4 $3}' | sed "s/''/ /g" | sed "s/'//g" | sortit | grep "[0-9][0-9]" | sed 's/^ *//g' > top_racers.txt")
