LOW=$1
HIGH=$2
COUNT=0
switch=false

main () {
  if [ $switch == false ]; then echo $FUNCNAME; switch=true; fi;
  if [[ $LOW == $HIGH ]]; then return 0; fi;
  if [[ $(( $LOW % 2)) == 0 ]]; then
    line=`printf "%${COUNT}s" |tr " " " "`
    echo "$line $LOW" ;
    (( COUNT++ ))
  fi;
  (( LOW++ ))
  main $LOW $HIGH
}

main $LOW $HIGH
