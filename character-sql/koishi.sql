SET @game = 'AoCF';
SET @character = 'Koishi Komeiji';

INSERT INTO `moves` (
	`game`, `character`, `labels`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": "7f",
			"active": "2f",
			"recovery": "15f",
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/d7/Koishic5a.gif"
		},
		{
			"title": "far 5a",
			"startup": "10f",
			"active": "3f",
			"recovery": "9f",
			"damage": "625",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6a/Koishi_f5a.gif"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a (normal)",
			"startup": "15f",
			"active": "6f",
			"recovery": "26f",
			"damage": "750",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/fc/Koishi6a.png"
		},
		{
			"title": "6a (auto)",
			"startup": "12f",
			"active": "8f",
			"recovery": "24f",
			"damage": "1050",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/fc/Koishi6a.png"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a (normal)",
			"startup": "10f",
			"active": "4f",
			"recovery": "39f",
			"damage": "750",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/b5/Koishi8a.png"
		},
		{
			"title": "8a (auto)",
			"startup": "10f",
			"active": "6f",
			"recovery": "36f",
			"damage": "975",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/b5/Koishi8a.png"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": "15f",
			"active": "70f",
			"recovery": "36f",
			"damage": "750 (1050 auto)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/47/Koishi2a.png"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": "9f",
			"active": "3f > 3f not active > 7f",
			"recovery": "22f",
			"damage": "1st: 125, 2nd: 487, flower: 500",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/49/Koishij5a.png"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a (normal)",
			"startup": "15f",
			"active": "6f",
			"recovery": "28f",
			"damage": "750",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/87/Koishij6a.png"
		},
		{
			"title": "j6a (auto)",
			"startup": "12f",
			"active": "8f",
			"recovery": "28f",
			"damage": "1050",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/87/Koishij6a.png"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a (normal)",
			"startup": "10f",
			"active": "2f",
			"recovery": "29f",
			"damage": "750",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/42/Koishij8a.png"
		},
		{
			"title": "j8a (auto)",
			"startup": "10f",
			"active": "3f",
			"recovery": "19f",
			"damage": "975",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/42/Koishij8a.png"
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": "15f",
			"active": "70f",
			"recovery": "19f",
			"damage": "750 (1050 auto)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/5c/Koishij2a.png"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"damage": "312 > 543",
			"stun": "10 > 20"
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"damage": "312 > 543",
			"stun": "10 > 20"
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"damage": "312 > 543",
			"stun": "10 > 20"
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"damage": "625 (1000 auto)",
			"stun": "20"
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"damage": "1st: 125, 2nd: 625",
			"stun": "20 (on last hit)"
		}
	]}')),
	(@game, @character, 'bbb,tenkai', JSON_COMPACT('{ "variations": [
		{
			"title": "tenkai",
			"startup": "27f",
			"damage": "60 per",
			"stun": 0
		}
	]}')),
	(@game, @character, '5c,c', JSON_COMPACT('{ "variations": [
		{
			"title": "5c",
			"startup": "10f",
			"damage": "1404",
			"stun": "20"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"startup": "14f",
			"active": "2f minimum",
			"recovery": "46f",
			"damage": "1250",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/3b/Koishi-6c.gif"
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"damage": "1125",
			"stun": "30"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"damage": "1250",
			"stun": "40"
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"startup": "14f",
			"active": "27f",
			"recovery": "43f",
			"damage": "1380 (if all hit)",
			"stun": "32",
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/bc/Koishi-8c.gif"
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": "12f",
			"active": "3f > 3f not active > 3f",
			"recovery": "11f",
			"damage": "550",
			"stun": "0",
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/bf/Koishi66a.png"
		},
		{
			"title": "dash a (teleport)",
			"startup": "12f",
			"active": "4f > 4f not active > 4f",
			"recovery": "12f",
			"damage": "550",
			"stun": "0",
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/bf/Koishi66a.png"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": "12f",
			"active": "15f",
			"recovery": "26f",
			"damage": "1062",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/45/Koishi66b.png"
		},
		{
			"title": "dash b (teleport)",
			"startup": "21f",
			"active": "21f",
			"recovery": "20f",
			"damage": "1062",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/45/Koishi66b.png"
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult",
			"damage": "1421",
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
			"damage": "2540 - 3688",
			"stun": 100,
			"cost": 1000,
			"attachment": "https://wiki.koumakan.jp/images/aocf/a/a9/Koishi_0.png"
		},
		{
			"title": "spellcard 2",
			"damage": "3187",
			"stun": 100,
			"cost": 1000,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/58/Koishi_1.png"
		},
		{
			"title": "spellcard 3",
			"damage": 1972,
			"stun": 100,
			"cost": 500,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/77/Koishi_2.png"
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": "4573-6169",
			"stun": 100
		}
	]}'));

