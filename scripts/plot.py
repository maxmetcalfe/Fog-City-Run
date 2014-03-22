import os
import string
import csv
import time
import datetime
import fileinput

results = open('../data/all.csv', 'r')

resultsDict = {}

for line in results: 

	info_dict = {}
	line = line[:-1]
	list_results = string.split(line, ",")
	info_dict['rank'] = list_results[0]
	info_dict['bib'] = int(list_results[1])
	last_name = list_results[2]
	first_name = list_results[3]
	info_dict['group'] = list_results[4]
	if list_results[5][:-2] != '':
		info_dict['time'] = time.strptime(list_results[5][:-2],'%H:%M:%S')
	else: 
		info_dict['time'] = 'NULL'
	info_dict['date'] = datetime.datetime.strptime(list_results[6], "%m/%d/%Y")
	name_key = last_name.lower() + "_" + first_name.lower()

	if name_key in resultsDict.keys():

		resultsDict[name_key].append(info_dict)

	else:
		resultsDict[name_key] = [info_dict]

results.close()

#### Make plots ####

for runner in resultsDict.keys():
	runnerResults = resultsDict[runner]
	time_out_string = []
	for r in runnerResults:
		date_format = r['date'].strftime('%m/%d/%Y')
		time_secs = datetime.timedelta(hours=r['time'].tm_hour,minutes=r['time'].tm_min,seconds=r['time'].tm_sec).total_seconds()
		time_out_string.append((date_format, time_secs))
	time_out_sorted_list = sorted(time_out_string , key=lambda x: datetime.datetime.strptime(x[0], "%m/%d/%Y"))
	## Part 1
	out_1 = """<html>
<head>
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
['Year', ''],
"""
	## Part 2
	out_2 = """
]);
var options = {
title: '**',
hAxis: { textPosition: 'none' }
};
var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
chart.draw(data, options);
}
</script>
</head>
<body>
<div id="chart_div" style="width: 900px; height: 500px;"></div>
</body>
</html>
"""
	runner_file = open(runner + ".html", "w")
	out_2 = out_2.replace("**", runner)
	runner_file.write(out_1)
	for t in time_out_sorted_list:
		t = str(t)
		t = t.replace('(','[')
		t = t.replace(')',']')
		t = t + ","
		runner_file.write(str(t) + "\n")
	runner_file.write(out_2)
