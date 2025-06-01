SET @game = 'AoCF';
SET @character = 'Mononobe no Futo';

INSERT INTO `moves` (
	`game`, `character`, `labels`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": "8f",
			"active": "2f",
			"recovery": "12f",
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/0/0e/Futoc5a.gif"
		},
		{
			"title": "far 5a",
			"startup": "13f",
			"active": "12f",
			"recovery": "15f",
			"damage": "515 (if all hit)",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/66/Futof5a.gif"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": "14f",
			"active": "12f > 6f not active > 2f",
			"recovery": "23f",
			"damage": "732 (if all hit)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/3a/Futo6a.png"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": "12f",
			"active": "6f > 12f not ative > 5f",
			"recovery": "27f",
			"damage": "959 (if all hit)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/85/Futo8a.png"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": "12f",
			"active": "3f",
			"recovery": "24f",
			"damage": 625,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/0/09/Futo2a.png"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": "12f",
			"active": "9f",
			"recovery": "34f",
			"damage": "515 (if all hit)",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/2/27/Futoj5a.png"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": "12f",
			"active": "6f",
			"recovery": "34f",
			"damage": 687,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/3e/Futoj6a.png"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a",
			"startup": "12f",
			"active": "21f",
			"recovery": "26f",
			"damage": 706,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1b/Futoj8a.png"
		}
		]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": "14f",
			"active": "3f",
			"recovery": "41f",
			"damage": "625",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/44/Futoj2a.png"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"startup": "24f",
			"damage": "531 (if all hit)",
			"stun": "40"
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"damage": "531 (if all hit)",
			"stun": "40"
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"damage": "531 (if all hit)",
			"stun": "40"
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"damage": "618 (if all hit)",
			"stun": "20"
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"damage": "816",
			"stun": 40
		}
	]}')),
	(@game, @character, 'bbb,tenkai', JSON_COMPACT('{ "variations": [
		{
			"title": "tenkai",
			"damage": "292 (if all hit)",
			"stun": 0
		}
	]}')),
	(@game, @character, '5c,c', JSON_COMPACT('{ "variations": [
		{
			"title": "5c",
			"damage": "833",
			"stun": "40 on explosion, 20 on pass-through"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"startup": "35f",
			"active": "min: 7f, max: 18f",
			"recovery": "47f",
			"damage": "1250",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/de/Futo-6c-max.gif"
		}
	]}')),
	(@game, @character, 'j6c', JSON_COMPACT('{ "variations": [
		{
			"title": "j6c",
			"startup": "17f",
			"active": "9f",
			"recovery": "77f",
			"damage": "875",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/db/Futo-j6c.gif"
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"damage": "856 (1 plate), 302-3022 (5 plates)",
			"stun": "12 (1 pillar), 60 (5 pillars)"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c / high j2c",
			"startup": "29f",
			"active": "21f",
			"recovery": "64f",
			"damage": "1109 (if all hit)",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/38/Futo-hj2c.gif"
		},
		{
			"title": "low j2c",
			"startup": "43f",
			"active": "9f",
			"recovery": "19f",
			"damage": "1000",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/d0/Futo-lj2c.gif"
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"damage": "750",
			"stun": 20
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": "10f",
			"active": "15f",
			"recovery": "10f",
			"damage": "500",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/be/Futo-66a.gif"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": "19f",
			"active": "3f",
			"recovery": "28f",
			"damage": "825",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/76/Futo-66b.gif"
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult",
			"startup": "10f",
			"active": "3f > 12f not active > 12f",
			"recovery": "15f",
			"damage": "min: 1119 (2 hits), max: 1746 (2 hits)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1c/Futo-ab.gif"
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
			"damage": "2433",
			"stun": 100,
			"cost": 700,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/b5/Futo_0.png"
		},
		{
			"title": "spellcard 2",
			"damage": "3179 (9 hits)",
			"stun": 100,
			"cost": 1200,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/7c/Futo_1.png"
		},
		{
			"title": "spellcard 3",
			"cost": 500,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/5c/Futo_2.png"
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": "4160-5980",
			"stun": 100
		}
	]}'));

