LOW=$1
HIGH=$2

while [[ $LOW -lt $HIGH ]]; do
  if [[ $(( $LOW % 2)) == 0 ]]; then echo $LOW; fi;
  LOW=(`expr $LOW + 1`)
done
