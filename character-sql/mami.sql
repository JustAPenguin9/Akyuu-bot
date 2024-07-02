SET @game = 'AoCF';
SET @character = 'Mamizou Futatsuiwa';

INSERT INTO `moves` (
	`game`, `character`, `lables`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": "11f",
			"active": "3f",
			"recovery": "22f",
			"damage": 400,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/ff/Mamizouc5a.gif"
		},
		{
			"title": "far 5a",
			"startup": "16f",
			"active": "3f",
			"recovery": "25f",
			"damage": "750",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/39/Mamizouf5a.gif"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": "1st: 16f, 2nd: 31f, 25f if 1st hits",
			"active": "1st: 3f, 2nd: 3f",
			"recovery": "22f",
			"damage": "437 > 962",
			"stun": "40 (on last hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/e/ed/Mamizou6a.png"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": "13f",
			"active": "12f",
			"recovery": "28f",
			"damage": "825",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/4c/Mamizou8a.gif"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": "19f",
			"active": "20f",
			"recovery": "38f",
			"damage": 810,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/a/ac/Mamizou2a.gif"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": "12f",
			"active": "6f",
			"recovery": "27f",
			"damage": "500",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/58/Mamizouj5a.png"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": "1st: 16f, 2nd: 31f, 25f if 1st hits",
			"active": "1st: 3f, 2nd: 3f",
			"recovery": "22f",
			"damage": "437 > 962",
			"stun": "40 (on last hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/8a/Mamizouj6a.png"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a",
			"startup": "18f",
			"active": "12f",
			"recovery": "28f",
			"damage": 825,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/53/Mamizouj8a.gif"
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": "15f",
			"active": "20",
			"recovery": "38f",
			"damage": "810",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/d0/Mamizouj2a.gif"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"damage": "839 (if all hit)",
			"stun": "29"
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"damage": "839 (if all hit)",
			"stun": "29"
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"damage": "839 (if all hit)",
			"stun": "29"
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"damage": "1330 (if all hit)",
			"stun": "50"
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"damage": "625",
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
			"damage": "943 (if all hit)",
			"stun": "30",
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/11/Mami5c.png"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"damage": "1250",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/df/Mami6c.png"
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"startup": "6f",
			"active": "30f",
			"damage": "1250",
			"stun": "100",
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/3a/Mami4c.png"
		}
	]}')),
	(@game, @character, 'j4c', JSON_COMPACT('{ "variations": [
		{
			"title": "j4c",
			"damage": "964 (if all hit)",
			"stun": "35",
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/9b/Mamij4c.png"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c",
			"damage": "1136 (if all hit)",
			"stun": "40 (on last hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/2/2c/Mami2c.png"
		}
	]}')),
	(@game, @character, '8c,lj8c', JSON_COMPACT('{ "variations": [
		{
			"title": "top lane 8c",
			"startup": "17f",
			"active": "30f",
			"recovery": "16f",
			"damage": "1000",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/0/0d/Mamizouhj8c.gif"
		},
		{
			"title": "bottom lane 8c",
			"startup": "21f",
			"active": "30f",
			"recovery": "16f",
			"damage": "1000",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/d9/Mamizou-8c.gif"
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": "15f",
			"active": "3f",
			"recovery": "15f",
			"damage": "500",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/48/Mamizou66a.png"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": "17f",
			"active": "15f",
			"recovery": "44f",
			"damage": "1075",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/e/e2/Mamizou66b.png"
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult (ball)",
			"damage": "700",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6b/MamiAlienBalls1.gif"
		},
		{
			"title": "occult (blue)",
			"startup": "6f",
			"damage": "1001 (if all hit)",
			"stun": 25,
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/92/MamiAlien1.png"
		},
		{
			"title": "occult (red)",
			"startup": "13f",
			"damage": "1339 (if all hit)",
			"stun": 70,
			"attachment": "https://wiki.koumakan.jp/images/aocf/c/c3/MamiAlien2.png"
		},
		{
			"title": "occult (green)",
			"startup": "9f",
			"damage": "1217 (if all hit)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/d1/MamiAlien3.png"
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
			"damage": "2563",
			"stun": 100,
			"cost": 1000,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/52/Mamizou_0.png"
		},
		{
			"title": "spellcard 2",
			"damage": "4029",
			"stun": 100,
			"cost": 1300,
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/da/Mamizou_1.png"
		},
		{
			"title": "spellcard 3",
			"damage": 0,
			"stun": 0,
			"cost": 800,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1f/Mamizou_2.png"
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": 5021,
			"stun": 100
		}
	]}'));

