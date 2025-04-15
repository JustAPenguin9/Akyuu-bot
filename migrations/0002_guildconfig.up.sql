CREATE TABLE IF NOT EXISTS `guild` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`guild_id` BIGINT UNSIGNED NOT NULL UNIQUE,
	`config` JSON NOT NULL, -- GuildConfig
	PRIMARY KEY (`id`),
	KEY guild_id_index(`guild_id`)
);
