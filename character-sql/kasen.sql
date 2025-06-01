SET @game = 'AoCF';
SET @character = 'Kasen Ibaraki';

INSERT INTO `moves` (
	`game`, `character`, `labels`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": 6,
			"active": 2,
			"recovery": 10,
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/c/c6/Kasenc5a.gif"
		},
		{
			"title": "far 5a",
			"startup": 10,
			"active": 6,
			"recovery": 20,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/b0/Kasen-f5a.gif"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": 15,
			"active": 3,
			"recovery": 22,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/2/21/Kasen6a.png"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": 14,
			"active": 7,
			"recovery": 24,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/12/Kasen-8a.gif"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": 12,
			"active": 3,
			"recovery": 28,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/e/eb/Kasen-2a.gif"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": 9,
			"active": 9,
			"recovery": 21,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/e/eb/Kasen_j5a.gif"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": 12,
			"active": 12,
			"recovery": 35,
			"damage": "250 > 806",
			"stun": "40 (on last hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/5b/Kasenj6a.png"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a",
			"startup": 12,
			"active": 7,
			"recovery": 21,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/8e/Kasenj8a.png"
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": 14,
			"active": 3,
			"recovery": 45,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/86/Kasenj2a.png"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"startup": 15,
			"damage": "851 (far)",
			"stun": "20 on close, 36 on far (if all hit)"
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"startup": 15,
			"damage": "851 (far)",
			"stun": "20 on close, 36 on far (if all hit)"
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"startup": 15,
			"damage": "851 (far)",
			"stun": "20 on close, 36 on far (if all hit)"
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"startup": 12,
			"damage": "1001 (if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"startup": 27,
			"damage": "1212 (375 + 1000)",
			"stun": "20 > 60"
		}
	]}')),
	(@game, @character, 'bbb,tenkai', JSON_COMPACT('{ "variations": [
		{
			"title": "tenkai",
			"stun": 0
		}
	]}')),
	(@game, @character, '5c,c', JSON_COMPACT('{ "variations": [
		{
			"title": "5c",
			"startup": 26,
			"damage": "1381 (500 + 1000)",
			"stun": "40 (on ball)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/9a/5c.gif"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"startup": "1st: 26f, 2nd: 58f",
			"damage": "1238 (300 + 1000)",
			"stun": "40 (on last hit)"
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"damage": "1000 (large orb), 953 (10x125 small orbs)",
			"stun": "40 (large orb), 5 per hit (small orbs)"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c",
			"startup": 19,
			"damage": "625 | 1014 | 1718",
			"stun": "10 to 30"
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"startup": 13,
			"active": "N/A",
			"recovery": "N/A",
			"damage": "N/A",
			"stun": "N/A"
		},
		{
			"title": "8c a",
			"damage": 1000,
			"stun": 40
		},
		{
			"title": "8c b",
			"startup": 38,
			"damage": 875,
			"stun": 40
		},
		{
			"title": "8c b (with a becon set)",
			"damage": 1550,
			"stun": 80
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": 13,
			"active": 7,
			"recovery": 20,
			"damage": "250 > 472 > 686",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/fe/Kasen66a.png"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": 24,
			"active": 3,
			"recovery": 35,
			"damage": 825,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/36/Kasen66b.png"
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult",
			"damage": "1000",
			"stun": "40"
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
			"damage": 4500,
			"stun": 100,
			"cost": 1300,
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/8b/Kasen_0.png"
		},
		{
			"title": "spellcard 2",
			"damage": 2714,
			"stun": 100,
			"cost": 1000,
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/3d/Kasen_1.png"
		},
		{
			"title": "spellcard 3",
			"damage": 1873,
			"stun": 100,
			"cost": 700,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/bf/Kasen_2.png"
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": 4675-6462,
			"stun": 100
		}
	]}'));

