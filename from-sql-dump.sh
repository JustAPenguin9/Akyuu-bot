#! /usr/bin/env bash

read -s -p "db password: " password
echo ''
read -p "db network (probably localhost for docker and database for podman): " network

mariadb -u akyuu -P 3306 -h "$network" -p"$password" akyuu_records --ssl=FALSE < dump.sql

DATABASE_URL=mariadb://akyuu:$password@$network:3306/akyuu_records cargo sqlx mig run
DATABASE_URL=mariadb://akyuu:$password@$network:3306/akyuu_records cargo sqlx prepare

for sql in ./character-sql/*.sql; do
	echo "processing $sql"
	mariadb -u akyuu -P 3306 -h "$network" -p"$password" akyuu_records --ssl=FALSE < "$sql";
done

echo 'done'
