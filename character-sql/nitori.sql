SET @game = 'AoCF';
SET @character = 'Nitori Kawashiro';

INSERT INTO `moves` (
	`game`, `character`, `labels`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": "8f",
			"active": "3f > 9f not active > 3f",
			"recovery": "11f",
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6f/Nitoric5a.gif"
		},
		{
			"title": "far 5a",
			"startup": "11f",
			"active": "3f",
			"recovery": "18f",
			"damage": "500",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/b9/Nitorif5a.gif"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": "13f",
			"active": "3f",
			"recovery": "29f",
			"damage": "750",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/4e/Nitori6a.png"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": "10f",
			"active": "18f",
			"recovery": "23f",
			"damage": "839",
			"stun": 55,
			"attachment": "https://wiki.koumakan.jp/images/aocf/0/0a/Nitori8a.png"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": "10f",
			"active": "15f",
			"recovery": "22f",
			"damage": 697,
			"stun": 30,
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/91/Nitori2a.gif"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": "8f",
			"active": "3f > 9f not active > 3f",
			"recovery": "20f",
			"damage": "472",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6f/Nitoric5a.gif"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": "12f",
			"active": "3f",
			"recovery": "32f",
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/e/ed/Nitori-j6a.gif"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "high j8a",
			"startup": "10f",
			"active": "3f",
			"recovery": "28f",
			"damage": 706,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/4f/Nitori-hj8a.gif"
		},
		{
			"title": "low j8a",
			"startup": "17f",
			"active": "minimum 9f",
			"recovery": "16f",
			"damage": 706,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/0/04/Nitorilj8a.gif"
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": "21f",
			"active": "10f",
			"recovery": "30f",
			"damage": "750",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/2/23/Nitori-j2a.gif"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"damage": "795 (if all hit)",
			"stun": "30"
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"damage": "795 (if all hit)",
			"stun": "30"
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"damage": "795 (if all hit)",
			"stun": "30"
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"damage": "1069 (if all hit)",
			"stun": "32"
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"damage": "827",
			"stun": 100
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
			"damage": "843 (1 spin, 1 throw)",
			"stun": "40 (if throw connects)"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"startup": "11f (uncharged)",
			"active": "24f",
			"recovery": "31f",
			"damage": "901 - 1047",
			"stun": "40 (on last hit)"
		}
	]}')),
	(@game, @character, 'j6c', JSON_COMPACT('{ "variations": [
		{
			"title": "low j6c",
			"startup": "18f",
			"active": "12f > 12f not active > 9f",
			"recovery": "21f",
			"damage": "1125",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/b8/Nitori-lj6c.gif"
		},
		{
			"title": "high j6c",
			"startup": "15f",
			"active": "12f > 9f not active > 15f",
			"recovery": "15f",
			"damage": "1125",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/d9/Nitori-hj6c.gif"
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"damage": "979 (if all hit)",
			"stun": "5 per (max 15)"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c",
			"damage": "853",
			"stun": "40"
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"startup": "15f",
			"active": "15f",
			"recovery": "17f",
			"damage": "1453 (625 launch + 1000 rocket)",
			"stun": "20 > 40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/11/Nitori8c.gif"
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": "12f",
			"active": "9f",
			"recovery": "23f",
			"damage": "780",
			"stun": "40 (on last hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/33/Nitori66a.png"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": "20f",
			"active": "24f",
			"recovery": "16f",
			"damage": "1293",
			"stun": 60,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/47/Nitori66b.png"
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult",
			"damage": "705",
			"stun": 20
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
			"damage": "3547",
			"stun": 100,
			"cost": 1200,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/57/Nitori_0.png"
		},
		{
			"title": "spellcard 2",
			"damage": "3426 or 4575",
			"stun": 100,
			"cost": 1000,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/bf/Nitori_1.png"
		},
		{
			"title": "spellcard 3",
			"damage": 2532,
			"stun": 100,
			"cost": 700,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6a/Nitori_2.png"
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": "5090-6478",
			"stun": 100
		}
	]}'));

