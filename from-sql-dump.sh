#! /usr/bin/env bash

read -s -p "db password: " password


mariadb -u akyuu -P 3306 -h localhost -p"$password" akyuu_records --ssl=FALSE < dump.sql

DATABASE_URL=mariadb://akyuu:$password@localhost:3306/akyuu_records cargo sqlx mig run
DATABASE_URL=mariadb://akyuu:$password@localhost:3306/akyuu_records cargo sqlx prepare

for sql in ./character-sql/*.sql; do
	echo "processing $sql"
	mariadb -u akyuu -P 3306 -h localhost -p"$password" akyuu_records --ssl=FALSE < "$sql";
done

echo 'done'
