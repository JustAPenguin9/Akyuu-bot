SET @game = 'AoCF';
SET @character = 'Shinmyoumaru Sukuna';

INSERT INTO `moves` (
	`game`, `character`, `labels`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": 6,
			"active": 2,
			"recovery": 11,
			"damage": 180,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/70/Sukunac5a.gif"
		},
		{
			"title": "far 5a",
			"startup": 12,
			"active": 4,
			"recovery": 17,
			"damage": 470,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/15/Shinmy-f5a.gif"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": 12,
			"active": 8,
			"recovery": 20,
			"damage": 690,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/37/Sukuna6a.png"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": 12,
			"active": 6,
			"recovery": 78,
			"damage": 690,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/70/Sukuna8a.png"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": 42,
			"active": 6,
			"recovery": 26,
			"damage": 625,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/53/Sukuna2a.png"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": 11,
			"active": 8,
			"recovery": 28,
			"damage": 470,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/c/c9/Sukunaj5a.png"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": 12,
			"active": 6,
			"recovery": 35,
			"damage": 690,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/2/25/Sukunaj6a.png"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a",
			"startup": 13,
			"active": 8,
			"recovery": 30,
			"damage": 690,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/64/Sukuna-j8a.gif"
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": 12,
			"active": 7,
			"recovery": 42,
			"damage": 625,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/41/Sukuna-j2a.gif"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"damage": "479 (if all hit)",
			"stun": 25
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"damage": "479 (if all hit)",
			"stun": 25
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"damage": "479 (if all hit)",
			"stun": 25
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"startup": 14,
			"active": "2f > 5f not active > 2f > 5f not active > 2f > 5f not active > 2f > 5f not active > 2f",
			"recovery": 35,
			"damage": "511 (if all hit)",
			"stun": "25 (5 per)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/3c/Shinmy-6b.gif"
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"damage": 750,
			"stun": 40
		}
	]}')),
	(@game, @character, 'bbb,tenkai', JSON_COMPACT('{ "variations": [
		{
			"title": "tenkai",
			"damage": 60,
			"stun": 0
		}
	]}')),
	(@game, @character, '5c,c', JSON_COMPACT('{ "variations": [
		{
			"title": "5c",
			"damage": 590,
			"stun": 0
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"startup": 14,
			"damage": 750,
			"stun": 60
		}
	]}')),
	(@game, @character, 'j6c', JSON_COMPACT('{ "variations": [
		{
			"title": "j6c",
			"startup": 17,
			"active": "min: 4f, mean: 12f, max: reaching mid lane",
			"recovery": 26,
			"damage": "845 (if all hit, 250 per)",
			"stun": "40 (on last hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/0/0b/Shinmy-j6c-one-loop.gif"
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"damage": "1419 (if all hit)",
			"stun": "80 (10 per)"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c",
			"damage": 1000,
			"stun": 40
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c top lane",
			"startup": 12,
			"active": "39f-55f or until land canceled",
			"recovery": 15,
			"damage": "955 (if all hit)",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/7c/Shinmy-8c.gif"
		},
		{
			"title": "8c bottom lane",
			"startup": 19,
			"active": "39f-55f or until land canceled",
			"recovery": 15,
			"damage": "955 (if all hit)",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/7c/Shinmy-8c.gif"
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": 12,
			"active": 4,
			"recovery": 17,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/43/Sukuna66a.png"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": 12,
			"active": 26,
			"recovery": 28,
			"damage": "1496 (if all hit)",
			"stun": "40 (if all hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/39/Sukuna66b.png"
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult",
			"damage": "125 per",
			"stun": "10 per"
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
			"damage": 4544,
			"stun": 100,
			"cost": 1400
		},
		{
			"title": "spellcard 2",
			"damage": 2053,
			"stun": 100,
			"cost": 700
		},
		{
			"title": "spellcard 3",
			"damage": 3575,
			"stun": 100,
			"cost": 1000
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": "4732-6568",
			"stun": 100
		}
	]}'));

