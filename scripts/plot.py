import os
import string
import csv
import time
import datetime

results = open('../data/all.csv', 'r')

# 1,22,Matlis,Sean,ALL,00:27:15.4,3/12/2014
nameKeyList = []

resultsDict = {}

for line in results: 

	line = line[:-1]
	list_results = string.split(line, ",")
	rank = list_results[0]
	bib = list_results[1]
	last_name = list_results[2]
	first_name = list_results[3]
	group = list_results[4]
	time_str = list_results[5][:-2]
	date = list_results[6]
	name_key = last_name.lower() + "_" + first_name.lower()

	if name_key in resultsDict.keys():

		resultsDict[name_key].append([rank, bib, group, time_str, date])

	else:
		resultsDict[name_key] = [[rank, bib, group, time_str, date]]

results.close()


#### Make plots ####


for runner in resultsDict.keys():

	runnerResults = resultsDict[runner]
		
	out_string = """
<html>
<head>
<center>
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(drawChart);
  function drawChart() {
	var data = google.visualization.arrayToDataTable([
	  ['Date', 'Time'],
"""
	times = ""
	for t in runnerResults:
		print t 
		if t[-2] != '':
			
			cleanTime = time.strptime(t[-2],'%H:%M:%S%f')
			cleanTime = datetime.timedelta(hours=cleanTime.tm_hour,minutes=cleanTime.tm_min,seconds=cleanTime.tm_sec).total_seconds()
		else:

			cleanTime = 'NULL'

		times = times + "['" + t[-1] + "', " + str(cleanTime) + "],\n"
	
	out_string2 = """
]);
var options = {
var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
chart.draw(data, options);
}
</script>
</head>
<body>
<div id="chart_div" style="width: 900px; height: 500px;"></div>
</body>
</center>
</html>
"""
	file_name = runner + '.html'
	out_file = open(file_name, 'w')
	out_file.write(out_string + times + out_string2)
