# Python script to load, parse, and format FCR results
# Max Metcalfe

import string
import os
import subprocess
import sqlite3
import argparse
import sys
import datetime
import xlrd
import csv
import time

parser = argparse.ArgumentParser()
parser.add_argument( "-d", "--date", help="race date" )
args = parser.parse_args()

def store_file_as_list(file_name):
    out_list = []
    # Finding the results file after download
    downloads_dir = '.'
    os.listdir(downloads_dir)
    matching_files = []
    for item in os.listdir('.'):
        if "race-results" in item:
            matching_files.append(item)
    if len(matching_files) == 0:
        print "No results files found."
        # No error for now, to get Jenkins to run smoothly
        sys.exit(0)
    # elif len(matching_files) > 1:
    #     print "Multiple results files found."
    #     for f in matching_files:
    #         print downloads_dir + "/" + f
    #     sys.exit(1)

    input_file = open(file_name, "r")
    print "Loading results..."
    print "Printing preview..."
    for line in input_file:
        out_list.append(line[:-1])
    for p in out_list[:5]:
        print p

    return out_list
    # response = raw_input("Continue y/n?: ")
    # if response == "y" or response == "yes":
    #     return out_list
    # else:
    #     print "Exiting..."
    #     sys.exit(1)

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
        print "Last Name: " + self.last_name
        print "First Name: " + self.first_name
        print "Time: " + self.time
        print "Bib: " + self.bib
        print "Rank: " + self.rank
        print "Group: " + self.group
        print "Date: " + self.date

def load_racers(results, date):
    racers = []
    for r in results:
        r = r.replace('''"''', "")
        line_split = string.split(r, ",")
        new_racer = Racer()
        new_racer.rank = line_split[0]
        new_racer.bib = line_split[1]
        new_racer.last_name = line_split[2]
        new_racer.first_name = line_split[3]
        new_racer.group = line_split[4]
        new_racer.time = line_split[6]
        new_racer.date = str(date)
        racers.append(new_racer)
    return racers

def connect_to_results_db():
    conn = sqlite3.connect("data/results.db")
    cursor = conn.cursor()
    return cursor,conn

def add_new_results_to_data(racers):
    cursor,conn = connect_to_results_db()
    for r in racers:
        first_name = r.first_name
        last_name = r.last_name
        if "'" in r.first_name or "'" in r.last_name:
            first_name = r.first_name.replace("'", "''")
            last_name = r.last_name.replace("'", "''")
        output = r.rank + "," + r.bib + ",'" + last_name + "','" + first_name + "','" + r.time + "','" + r.group + "','" + r.date + "'"
        cursor.execute("INSERT INTO results (rank,bib,last_name,first_name,time,group_name,date) VALUES (" + output + ")")
    conn.commit()

def get_winner(date):
    cursor,conn = connect_to_results_db()
    cursor.execute("SELECT first_name, last_name FROM results WHERE rank = 1 AND date = " + "'" + date + "'")
    return cursor.fetchall()

def get_racers_list():
    cursor,conn = connect_to_results_db()
    cursor.execute("SELECT first_name, last_name, count(*) c FROM results GROUP BY first_name, last_name ORDER BY c DESC")
    data = cursor.fetchall()
    out_file = open("data/racers.txt", "w")
    for d in data:
        out_file.write(str(d[2]) + " " + d[0] + " " + str(d[1]) + "\n")
    out_file.close()

def get_racer_rescords():
    cursor,conn = connect_to_results_db()
    cursor.execute("SELECT first_name, last_name, min(time) t FROM results GROUP BY first_name, last_name order by t;")
    data = cursor.fetchall()
    out_file = open("data/records.txt", "w")
    for d in data:
        out_file.write(str(d[2]) + " " + d[0] + " " + str(d[1]) + "\n")
    out_file.close()

def get_racer_count():
    cursor,conn = connect_to_results_db()
    cursor.execute("SELECT date, count(*) c FROM results GROUP BY date ORDER BY date(date)")
    data = cursor.fetchall()
    out_file = open("data/data.tsv", "w")
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

def con_to_secs(time):
    time_split = string.split(time, ":")
    hours = time_split[0]
    minutes = time_split[1]
    seconds = time_split[2]
    return int(hours) * 3600 + int(minutes) * 60 + float(seconds)

def con_from_secs(time):
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
    query = 'SELECT time, date FROM results'
    cursor.execute(query)
    data = cursor.fetchall()
    out_file = open("all_times.csv", "w")
    for d in data:
        if "DNF" not in d:
            time = round(con_to_secs(d[0]), 0)
            out_file.write(str(time) + "," + d[1] + "\n")
    out_file.close()

# Get current personal record from db
def get_personal_record(f_name, l_name):
    cursor,conn = connect_to_results_db()
    query = 'SELECT time FROM results WHERE first_name = "' + f_name + '" AND last_name = "' + l_name + '" ORDER BY time ASC LIMIT 1'
    cursor.execute(query)
    data = cursor.fetchall()
    return data[0][0]

# Compare recent time to current personal record and print new records
def check_for_new_records(results):
    for r in results:
        time = r.time.replace('''"''', "")
        if con_to_secs(time) <= con_to_secs(get_personal_record(r.first_name, r.last_name)):
            print "New Personal Record for " + r.first_name + " " + r.last_name + ": " + time

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
        last_name = r[2]
        first_name = r[3]
        if "'" in str(r[2]) or "'" in str(r[3]):
            last_name = str(r[2]).replace("'", "\\'")
            first_name = str(r[3]).replace("'", "\\'")
        out_strings.append("['" + str(r[0]) + "','" + str(r[1]) + "','" + last_name + "','" + first_name + "','" + r[4] + "','" + r[5] + "','" + r[6] + "'],\n")
    out_strings[-1] = out_strings[-1][:-2]
    out_strings.append("\n];")
    write_file_from_strings(out_strings, "data/data.js")

# All Git related tasks
def git(race_date):
    #os.system("git checkout master")
    os.system("git diff")
    os.system("git add --all data/")
    os.remove("race-results.csv")
    os.system("git commit -m 'Added results from  " + str(race_date)     + "'")

    #os.system("git log -3")
    #os.system("git show HEAD")
    #os.system("git fetch origin")
    #os.system("git rebase origin/master")
    #os.system("git push origin master")
    #os.system("git checkout gh-pages")
    #os.system("git merge origin/master")
    #os.system("git push origin gh-pages")

# Tweet winner
def tweet_winner(racers):
    winner = racers[0]
    msg = winner.first_name + " " + winner.last_name + " won the Fog City Run this week with a time of " + winner.time + "."
    command = 'twitter -efogcityrun@email.com set %s' % msg
    try:
        subprocess.call(command, shell=True)
        print "Tweet Posted"
    except:
        print "Tweet Failed"

def get_input():
    if args.date == None:
        print "Please provide a date."
        sys.exit(1)
    elif len(args.date) != 10:
        print "Invalid Date"
        sys.exit(1)
    else:
        split_string = string.split(args.date, "-")
        if len(split_string[0]) == 4:
            day = split_string[2]
            month = split_string[1]
            year = split_string[0]
        else:
            day = split_string[1]
            month = split_string[0]
            year = split_string[-1]

        if int(day) < 1 or int(day) >= 31 or int(month) < 1 or int(month) > 12 or int(year) < 2015:
            print "Invalid Date"
            sys.exit(1)
        else:
            return "-".join([year, month, day])

def clean_up():
    print "Removing input CSV/XLSX files..."
    try:
        os.remove("race-results.csv")
        os.remove("race-results.xlsx")
    except:
        pass
    print "Done."

def find_closest_wednesday():
    today = datetime.date.today()
    wednesday = today + datetime.timedelta( (2-today.weekday()) % 7 )
    return wednesday

closest_wednesday = find_closest_wednesday()

# Hack: Need to convert .xlsx > .csv until I can figure out CSV editing in this workflow.
def csv_from_excel():
    if os.path.isfile('race-results.xlsx'):
        wb = xlrd.open_workbook('race-results.xlsx')
        sheet_name = str(wb.sheet_names()[0])
        print "xlrd: Sheets: " + str(wb.sheet_names())
        if sheet_name == "race-results":
            sh = wb.sheet_by_name('race-results')
        elif sheet_name == "racesplitter_race":
            sh = wb.sheet_by_name('racesplitter_race')
        else:
            print "Sheet name not recognized."
            sys.exit(1)

        your_csv_file = open('race-results.csv', 'wb')
        wr = csv.writer(your_csv_file, quoting=csv.QUOTE_ALL, lineterminator='\n')
        for rownum in xrange(sh.nrows):
            out_line = sh.row_values(rownum)
            if rownum != 0:
                time_values = sh.row_values(rownum)[5:9]
                hours = 0
                minutes = 0
                seconds = 0
                time_list = []
                for t in time_values:
                    if type(t) == float:
                        time_tuple = xlrd.xldate_as_tuple(t, wb.datemode)
                        hours = str(time_tuple[-3])
                        minutes = str(time_tuple[-2])
                        seconds = str(time_tuple[-1])
                        # Hack: Deal with time format. Need to fix this.
                        if len(str(time_tuple[-3])) == 1:
                            hours = "0" + str(time_tuple[-3])
                        if len(str(time_tuple[-2])) == 1:
                            minutes = "0" + str(time_tuple[-2])
                        if len(str(time_tuple[-1])) == 1:
                            seconds = "0" + str(time_tuple[-1])
                    time_list.append(str(hours) + ":" + str(minutes) + ":" + str(seconds) + ".0")
                out_line = sh.row_values(rownum)[:-3] + time_list
            wr.writerow(out_line)
        your_csv_file.close()
    else:
        print "No Excel file found. Continuing as usual..."

def main():
    race_date = find_closest_wednesday()
    print race_date
    race_date = '2016-03-16'
    # Check to see if we got a xlsx file instead.
    csv_from_excel()
    raw_results = store_file_as_list("race-results.csv")[1:]
    print "Raw: "
    for r in raw_results:
        print r
    racers = load_racers(raw_results, race_date)
    add_new_results_to_data(racers)
    convert_to_js()
    # get_racers_list()
    # get_racer_rescords()
    # get_racer_count()
    # #get_racer_history("Max", "Metcalfe")
    # check_for_new_records(racers)
    # #tweet_winner(racers)
    # git(race_date)
    clean_up()

main()