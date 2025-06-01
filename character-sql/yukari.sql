SET @game = 'AoCF';
SET @character = 'Yukari Yakumo';

INSERT INTO `moves` (
	`game`, `character`, `labels`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": 9,
			"active": 4,
			"recovery": 22,
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/2/2d/Yukaric5a.gif"
		},
		{
			"title": "far 5a",
			"startup": 11,
			"active": 5,
			"recovery": 19,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/58/Yukari-f5a.gif"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": 18,
			"active": 7,
			"recovery": 30,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/43/Yukari6a.png"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": 8,
			"active": "1st: 3f > 4f not active > 2nd: 6f",
			"recovery": 24,
			"damage": "1161 (750 second hit only)",
			"stun": "40 (on last hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/84/Yukari-8a.gif"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": 17,
			"active": 6,
			"recovery": 20,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/a/a0/Yukari2a.png"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": 8,
			"active": 34,
			"recovery": 38,
			"damage": 515,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/e/e4/Yukari-j5a.gif"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": 16,
			"active": 8,
			"recovery": 36,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/2/21/Yukari-j6a.gif"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a",
			"startup": 11,
			"active": 26,
			"recovery": 15,
			"damage": 673,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/8e/Yukari-j8a.gif"
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": 20,
			"active": 7,
			"recovery": 41,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/52/Yukari-j2a.gif"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"damage": "478 (if all hit)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6e/Projectile5b.png"
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"stun": 40
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"damage": "478 (if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"damage": "839 (if all hit)",
			"stun": 30
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"damage": 1000,
			"stun": 40
		}
	]}')),
	(@game, @character, 'bbb,tenkai', JSON_COMPACT('{ "variations": [
		{
			"title": "tenkai",
			"damage": "62 per",
			"stun": 0
		}
	]}')),
	(@game, @character, '5c,c', JSON_COMPACT('{ "variations": [
		{
			"title": "5c",
			"damage": "125 per, 904 (if all hit)",
			"stun": 100
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"damage": 1000,
			"stun": 1000
		}
	]}')),
	(@game, @character, 'j6c', JSON_COMPACT('{ "variations": [
		{
			"title": "j6c",
			"damage": 1000,
			"stun": 40
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"startup": 15,
			"active": 39,
			"recovery": 20,
			"damage": "250 per, 896 (melee, if all hit), 819 (projectile, if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c",
			"damage": 907,
			"stun": 60
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"startup": 11,
			"active": 2,
			"recovery": 58,
			"damage": 1000,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/0/09/Yukari-8c.gif"
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": 8,
			"active": 24,
			"recovery": 20,
			"damage": 947,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/90/Yukari66a.png"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": 13,
			"active": "3f > 6f not active > 3f > 6f not active > 3f > 6f not active > 3f > 6f not active > 3f",
			"recovery": 38,
			"damage": 1193,
			"stun": "40 (on last hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/7d/Yukari66b.png"
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult",
			"damage": 1000,
			"stun": 40
		},
		{
			"title": "occult a",
			"damage": 250,
			"stun": 0
		},
		{
			"title": "occult b",
			"damage": 1000,
			"stun": 40
		},
		{
			"title": "occult 6b",
			"damage": 1193,
			"stun": 40
		},
		{
			"title": "occult 4c",
			"damage": 1000,
			"stun": 40
		},
		{
			"title": "occult 5/6/8/2c",
			"damage": 1000,
			"stun": 40
		}
	]}')),
	(@game, @character, 'tag,taga,tagja,tagb,ta,tja,tb', JSON_COMPACT('{ "variations": [
		{
			"title": "tag a"
		},
		{
			"title": "tag ja"
		},
		{
			"title": "tag b"
		}
	]}')),
	(@game, @character, 'sc,spellcard', JSON_COMPACT('{ "variations": [
		{
			"title": "spellcard 1",
			"damage": 4617,
			"stun": 100,
			"cost": 1500
		},
		{
			"title": "spellcard 2",
			"damage": 2489,
			"stun": 100,
			"cost": 800
		},
		{
			"title": "spellcard 3",
			"damage": 4114,
			"stun": 100,
			"cost": 1100
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"startup": "15f > 60 freeze frames > 6f",
			"active": 30,
			"recovery": 25,
			"damage": "4526-6151",
			"stun": 100
		}
	]}'));

