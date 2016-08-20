recurse () {
  indent=$3
  if [[ $1 == $2 ]]; then return 0; fi;
  if [[ $(( $1 % 2)) == 0 ]]; then
    line=`printf "%${indent}s" |tr " " " "`
    echo "$line $1";
    (( indent++ ))
  fi
  recurse $(( $1 + 1 )) $2 $indent
}

main() {
  echo $FUNCNAME
  recurse $1 $2 0
}

main $1 $2
