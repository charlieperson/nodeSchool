#!/usr/bin/env bash
items=(I am ${@:2:2} and $4)
echo "${items[*]}"
