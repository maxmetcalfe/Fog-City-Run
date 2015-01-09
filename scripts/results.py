# Python script to load, parse, and format FCR results
# Max Metcalfe

import string
import os
import subprocess
import sqlite3

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

def connect_to_results_db():
	conn = sqlite3.connect("/Users/max/Documents/Home/Fog-City-Run/data/results.db")
	cursor = conn.cursor()
	return cursor,conn

def add_new_results_to_data(racers):
	cursor,conn = connect_to_results_db()
	for r in racers:
		output = r.rank + "," + r.bib + ",'" + r.last_name + "','" + r.first_name + "','" + r.time + "','" + r.group + "','" + r.date + "'"
		cursor.execute("INSERT INTO results (rank,bib,last_name,first_name,time,group_name,date) VALUES (" + output + ")")
	conn.commit()

def get_winner(date):
	cursor,conn = connect_to_results_db()
	cursor.execute("SELECT first_name, last_name FROM results WHERE rank = 1 AND date = " + "'" + date + "'")
	return cursor.fetchall()

def get_top_racers():
	cursor,conn = connect_to_results_db()
	cursor.execute("SELECT first_name, last_name, count(*) c FROM results GROUP BY first_name, last_name HAVING c >= 10 ORDER BY c DESC")
	data = cursor.fetchall()
	out_file = open("../data/top_racers.txt", "w")
	for d in data:
		out_file.write(str(d[2]) + " " + d[0] + " " + str(d[1]) + "\n")
	out_file.close()

def get_racer_count():
	cursor,conn = connect_to_results_db()
	cursor.execute("SELECT date, count(*) c FROM results GROUP BY date ORDER BY date(date)")
	data = cursor.fetchall()
	out_file = open("../data/data.tsv", "w")
	out_file.write("race\tracers\n")
	for d in data:
		out_file.write(str(d[0]) + "\t" + str(d[1]) + "\n")
	out_file.close()

def get_racer_history(f_name, l_name):
	cursor,conn = connect_to_results_db()
	query = 'SELECT * FROM results where first_name = "' + f_name + '" AND last_name = "' + l_name + '" ORDER BY time ASC'
	cursor.execute(query)
	data = cursor.fetchall()
	print "Racer History for " + f_name + " " + l_name
	for d in data:
		print d[5] + "\t" + d[6]

def convert_time_to_secs(time):
	time_split = string.split(time, ":")
	hours = time_split[0]
	minutes = time_split[1]
	seconds = time_split[2]
	return int(hours) * 3600 + int(minutes) * 60 + float(seconds)

def convert_time_from_secs(time):
	hours = time / 3600
	minutes = (time % 3600) / 60
	seconds = (time % 3600) % 60
	if len(str(hours)) == 1:
		hours = "0" + str(hours)
	if len(str(minutes)) == 1:
		minutes = "0" + str(minute)
	if len(str(seconds)) == 1:
		seconds = "0" + str(seconds)
	return str(hours) + ":" + str(minutes) + ":" + str(seconds)

def find_bucket(time):
	buckets = range(0,5000,25)
	for b in buckets:
		if time <= b:
			return b

def get_all_times():
	cursor,conn = connect_to_results_db()
	query = 'SELECT time, date FROM results where first_name = "Max"'
	cursor.execute(query)
	data = cursor.fetchall()
	out_file = open("all_times.csv", "w")
	for d in data:
		if "DNF" not in d:
			time = round(convert_time_to_secs(d[0]), 0)
			out_file.write(str(time) + "," + d[1] + "\n")
	out_file.close()

def write_file_from_strings(strings, out_filename):
	out_file = open(out_filename, "w")
	for s in strings:
		out_file.write(s)
	out_file.close()

def convert_to_js():
	cursor, conn = connect_to_results_db()
	cursor.execute("SELECT rank, bib, last_name, first_name, group_name, time, date FROM results")
	raw_results_dump = cursor.fetchall()
	out_strings = []
	out_strings.append("var aDataSet = [\n")
	for r in raw_results_dump:
		out_strings.append("['" + str(r[0]) + "','" + str(r[1]) + "','" + r[2] + "','" + r[3] + "','" + r[4] + "','" + r[5] + "','" + r[6] + "'],\n")
	out_strings[-1] = out_strings[-1][:-2]
	out_strings.append("\n];")
	write_file_from_strings(out_strings, "/Users/max/Documents/Home/Fog-City-Run/data/data.js")

def main():

	raw_results = store_file_as_list("/Users/max/Downloads/racesplitter_race.csv")[1:]
	race_date = raw_input("Race Date: ")
	racers = load_racers(raw_results, race_date)
	add_new_results_to_data(racers)
	convert_to_js()
	get_top_racers()
	get_racer_count()
	#get_racer_history("Max", "Metcalfe")
	################# Posting Winner Tweet ###################
	winner = racers[0]
	msg = winner.first_name + " " + winner.last_name + " won the Fog City Run this week with a time of " + winner.time + "."
	command = 'twitter -efogcityrun@email.com set %s' % msg
	subprocess.call(command, shell=True)
	print "Tweet posted."
	##########################################################
	#Git and house cleaning
	os.system("git add ../data/data.tsv")
	os.system("git add ../data/data.js")
	os.system("git add ../data/results.db")
	os.system("git add ../data/top_racers.txt")
	os.system("git commit -m 'Added results from  " + race_date + "'")
	os.system("git fetch origin")
	os.system("git rebase origin/master")
	os.system("git push origin master")
	os.system("git add ../data/data.js")
	os.system("ftp -in -u ftp://maxmetcalfe@maxmetcalfe.com/fcr/data/ ../data/data.tsv")
	os.system("ftp -in -u ftp://maxmetcalfe@maxmetcalfe.com/fcr/data/ ../data/data.js")

main()
