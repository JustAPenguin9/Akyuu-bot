#! /usr/bin/env bash

read -s -p "db password: " password
echo ''
read -p "db network (probably database for podman or localhost for docker): " network

for sql in ./character-sql/*.sql; do
	echo "processing $sql"
	mariadb -u akyuu -P 3306 -h "$network" -p"$password" akyuu_records --ssl=FALSE < "$sql";
done

echo 'done'
