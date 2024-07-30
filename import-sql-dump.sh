#! /usr/bin/env bash

read -s -p "db password: " password
echo ''
read -p "db network (probably database for podman or localhost for docker): " network

if test -f dump.sql; then
	echo "using dump.sql"
	mariadb -u akyuu -P 3306 -h "$network" -p"$password" akyuu_records --ssl=FALSE < dump.sql
else
	echo "cant find dump.sql"
fi

echo 'done'
