SET @game = 'AoCF';
SET @character = 'Fujiwara no Mokou';

INSERT INTO `moves` (
	`game`, `character`, `labels`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": 7,
			"active": 2,
			"recovery": 13,
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1d/Mokouc5a.gif"
		},
		{
			"title": "far 5a",
			"startup": 9,
			"active": 6,
			"recovery": 14,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/47/Mokou-f5a.gif"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": 15,
			"active": 6,
			"recovery": 24,
			"damage": 812,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/33/Mokou6a.png"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": 14,
			"active": "4f > 24f not active > 6f",
			"recovery": 25,
			"damage": "375 > 901",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/e/e6/Mokou8a.gif"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": 12,
			"active": 6,
			"recovery": 28,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/f0/Mokou2a.png"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": 12,
			"active": 6,
			"recovery": 24,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/9f/Mokouj5a.gif"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": 14,
			"active": 6,
			"recovery": 39,
			"damage": 687,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/d3/Mokou_j6a.gif"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a",
			"startup": 11,
			"active": 6,
			"recovery": 25,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6f/Mokou-j8a.gif"
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": 13,
			"active": 6,
			"recovery": 38,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/f0/Mokou2a.png"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"startup": 6,
			"damage": "616 (if all hit)",
			"stun": 35,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6f/Mokou5b.png"
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"startup": 6,
			"damage": "616 (if all hit)",
			"stun": 35,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6f/Mokou5b.png"
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"startup": 6,
			"damage": "616 (if all hit)",
			"stun": 35,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6f/Mokou5b.png"
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"startup": 16,
			"damage": 735,
			"stun": "20 on fireball, 25 on pheonixes (if all hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1d/Mokou6b.png"
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"startup": 17,
			"damage": 971,
			"stun": 30,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/66/Mokou-b-.png"
		}
	]}')),
	(@game, @character, 'bbb,tenkai', JSON_COMPACT('{ "variations": [
		{
			"title": "tenkai",
			"damage": "224 (if all hit)",
			"stun": 0,
			"attachment": "https://aocf.koumakan.jp/wiki/File:(B)_Trajectories.png"
		}
	]}')),
	(@game, @character, '5c,c', JSON_COMPACT('{ "variations": [
		{
			"title": "5c",
			"startup": 26,
			"damage": "1179 - 2319",
			"stun": 16,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6b/Mokou5c.png"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"startup": "1st: 20f, 2nd: 15f, 3rd: 21f",
			"active": "1st: 3f, 2nd: 2f, 3rd: 2f",
			"recovery": 43,
			"damage": 1631,
			"stun": "40 (on last hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/81/Mokou-6c.gif"
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"startup": 30,
			"active": 4,
			"recovery": 28,
			"damage": 1250,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/48/Mokou-4c.gif"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c",
			"startup": 18,
			"active": 42,
			"recovery": 10,
			"damage": "867 (if all hit)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/99/Mokou2c.gif"
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"startup": "1st: 12f, 2nd: 13f",
			"active": "1st: 3f, 2nd: ?",
			"recovery": "1st: 88f (jump cancellable after 23f), 2nd: ?",
			"damage": "1st: 750, 2nd: 1000",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/d6/Mokou-8c.gif"
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": 15,
			"active": 5,
			"recovery": 10,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/73/Mokou66a.png"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": 18,
			"active": 6,
			"recovery": 26,
			"damage": 812,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/d8/Mokou66b.png"
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult"
		}
	]}')),
	(@game, @character, 'tag,taga,tagja,tagb,ta,tja,tb', JSON_COMPACT('{ "variations": [
		{
			"title": "tag a",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/73/Mokou66a.png"
		},
		{
			"title": "tag ja",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/9f/Mokouj5a.gif"
		},
		{
			"title": "tag b",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1d/Mokou6b.png"
		}
	]}')),
	(@game, @character, 'sc,spellcard', JSON_COMPACT('{ "variations": [
		{
			"title": "spellcard 1",
			"startup": 12,
			"damage": "3723 - 6628",
			"stun": 100,
			"cost": 1200,
			"attachment": "https://wiki.koumakan.jp/images/aocf/2/20/Mokou_0.png"
		},
		{
			"title": "spellcard 2",
			"startup": 12,
			"damage": "3721 - 4401",
			"stun": 100,
			"cost": 1200,
			"attachment": "https://wiki.koumakan.jp/images/aocf/c/cc/Mokou_1.png"
		},
		{
			"title": "spellcard 3",
			"startup": 15,
			"damage": "614 - 2613",
			"stun": 100,
			"cost": 800,
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/34/Mokou_2.png"
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"startup": 12,
			"damage": 5060-6446,
			"stun": 100,
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/8a/MokouLW.png"
		}
	]}'));

