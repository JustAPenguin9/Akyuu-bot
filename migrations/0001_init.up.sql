-- rename old the akyuu table or make it if it doesnt exist to simplify the rest
RENAME TABLE IF EXISTS `history` TO `old_history`;
CREATE TABLE IF NOT EXISTS `old_history` (
	`id` int unsigned NOT NULL AUTO_INCREMENT,
	`winner` varchar(255) NOT NULL,
	`loser` varchar(255) NOT NULL,
	`time` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

-- new tables
CREATE TABLE IF NOT EXISTS `history` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`winner` BIGINT UNSIGNED NOT NULL,
	`loser` BIGINT UNSIGNED NOT NULL,
	`games_played` INT UNSIGNED DEFAULT 1,
	`recorded_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
	`recorded_by` BIGINT UNSIGNED,
	PRIMARY KEY (`id`),
	KEY winner_id_index(`winner`),
	KEY loser_id_index(`loser`)
);

CREATE TABLE IF NOT EXISTS `moves` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`game` VARCHAR(5459) NOT NULL,
	`character` VARCHAR(5459) NOT NULL,
	`lables` VARCHAR(5459) NOT NULL,
	`data` JSON NOT NULL,
	PRIMARY KEY (`id`),
	KEY character_index(`character`)
);

-- migrate over data from old table
INSERT INTO `history` (`winner`,`loser`,`recorded_at`)
	SELECT winner, loser, FROM_UNIXTIME(LEFT(time, 10))
	from `old_history`;

-- delete temp table
DROP TABLE `old_history`;
