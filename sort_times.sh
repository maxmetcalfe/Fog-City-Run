
INPUT=/Users/maxmetcalfe/Documents/fog_city_run/Results/all.csv
OUT=/Users/maxmetcalfe/Documents/fog_city_run/Results/compiled.txt
UNIQUE_NAMES=`cut -d"," -f3,4 $INPUT | sort | uniq`

echo "Results" >> $OUT

for i in $UNIQUE_NAMES
do 

	echo $i >> $OUT
	echo "-----" >> $OUT
	
	RESULTS=`grep $i $INPUT | sort -t":" -k2 | sed 's/ /\n/g' | cut -d"," -f-6,9 | tr ',' '\t    '`

	echo "$RESULTS" >> $OUT
	echo "\n" >> $OUT
done
