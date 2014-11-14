# Python script to load, parse, and format FCR results
# Max Metcalfe

import string
import os
import subprocess

def store_file_as_list(file_name):
	out_list = []
	input_file = open(file_name, "r")
	for line in input_file:
		out_list.append(line[:-1])
	return out_list

class Racer:
	def _init_(self, last_name, first_name, time, bib, rank, group, date):
		self.last_name = last_name
		self.first_name = first_name
		self.time = time
		self.bib = bib
		self.rank = rank
		self.group = group
		self.date = date
	def print_all(self):
		print self.last_name
		print self.first_name
		print self.time
		print self.bib
		print self.rank
		print self.group
		print self.date

def load_racers(results, date):
	racers = []
	for r in results:
		line_split = string.split(r, ",")
		new_racer = Racer()
		new_racer.rank = line_split[0]
		new_racer.bib = line_split[1]
		new_racer.last_name = line_split[2]
		new_racer.first_name = line_split[3]
		new_racer.group = line_split[4]
		new_racer.time = line_split[5]
		new_racer.date = date
		racers.append(new_racer)
	return racers

def add_new_results_to_data(racers):
	data_file = store_file_as_list("../data/data.js")
	data_file = data_file[:-1]
	for r in racers:
		out_string = "['" + r.rank + "','" + r.bib + "','" + r.last_name + "','" + r.first_name + "','" + r.group + "','" + r.time + "','" + r.date + "'],"
		data_file.append(out_string)
	data_file[-1] = data_file[-1][:-1]
	data_file.append("];")
	file_to_write = open("../data/data.js", "w")
	for d in data_file:
		file_to_write.write(d + "\n")
	file_to_write.close()

def main():

	raw_results = store_file_as_list("/Users/max/Downloads/racesplitter_race.csv")[1:]
	race_date = raw_input("Race Date: ")
	racers = load_racers(raw_results, race_date)
	add_new_results_to_data(racers)
	################## Adding racer count to count file #######
	race_data = race_date.replace("/", "\/")
	p = subprocess.Popen(["grep",race_date,"../data/data.js","-c"], stdout=subprocess.PIPE)
	count = p.communicate()[0][:-1]
	with open("../data/data.tsv", "a") as racer_count_file:
	    	racer_count_file.write("\n" + race_date + "\t" + count)
	################## Posting Winner Tweet ###################
	winner = racers[0]
	msg = winner.first_name + " " + winner.last_name + " won the Fog City Run this week with a time of " + winner.time + "."
	#command = 'twitter -efogcityrun@email.com set %s' % msg
	#subprocess.call(command, shell=True)
	print "Tweet posted."
	###########################################################
	# Git and house cleaning
	os.system("git add ../data/data.tsv")
	os.system("git commit -m 'Added results from  " + race_date + "'")
	os.system("git fetch origin")
	os.system("git rebase origin/master")
	os.system("git push origin master")
	os.system("git add ../data/data.js")
	os.system("ftp -in -u ftp://maxmetcalfe@maxmetcalfe.com/fcr/data/ ../data/data.tsv")
	os.system("ftp -in -u ftp://maxmetcalfe@maxmetcalfe.com/fcr/data/ ../data/data.js")
	## Create top racers list (for future use in website table)
	os.system('''grep "" ../data/data.js | awk -F"," ' { print $4 $3}' | sed -e "s/''/ /g" -e "s/'//g" | sort | uniq -c | sort -nr | grep "[0-9][0-9]" > top_racers.txt''')

main()
