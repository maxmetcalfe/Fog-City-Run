# This script compiles the times for the Fog City Run results
# Max Metcalfe

# Specify input/ouput files
INPUT=/Users/maxmetcalfe/Documents/fog_city_run/Results/all.csv
OUT=/Users/maxmetcalfe/Documents/fog_city_run/Results/compiled.txt

# Get unique racer names
UNIQUE_NAMES=`cut -d"," -f3,4 $INPUT | sort | uniq`

# Print header to output file
echo "Results" >> $OUT

# Loop through unique racer names
for i in $UNIQUE_NAMES
do 

	# Print racer name and format
	echo $i >> $OUT
	echo "-----" >> $OUT
	
	# Get results for racer, sort, and format
	RESULTS=`grep $i $INPUT | sort -t":" -k2 | sed 's/ /\n/g' | cut -d"," -f-6,9 | tr ',' '\t    '`

	# Write results to output
	echo "$RESULTS" >> $OUT
	# Add newline
	echo "\n" >> $OUT

# We are done
done
