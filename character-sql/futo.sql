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
			"startup": "12f",
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
			"active": "12f > 5f not active > 2f",
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
			"recovery": "until you land or cancel move",
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
			"recovery": "until you land or cancel move",
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
			"recovery": "until you land or cancel move",
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
			"recovery": "until you land or cancel move",
			"damage": 706 (if all hit),
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1b/Futoj8a.png"
		}
		]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": "14f",
			"active": "3f",
			"recovery": "until you land or cancel move",
			"damage": "625",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/44/Futoj2a.png"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"startup": "16f",
			"active": "once plates are moving, they are active until intereacted with",
			"recovery": "until you cancel move",
			"damage": "531 (if all hit)",
			"stun": "40"
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"startup": "16f",
			"active": "once plates are moving, they are active until interacted with",
			"recovery": "until you cancel move",
			"damage": "531 (if all hit)",
			"stun": "40"
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"startup": "16f",
			"active": "once plates are moving, they are active until interacted with",
			"recovery": "until you cancel move",
			"damage": "531 (if all hit)",
			"stun": "40"
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"startup": "23f",
			"active": "38f",
			"recovery": "36f (after startup)",
			"damage": "618 (if all hit)",
			"stun": "20"
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"startup": "12f",
			"active": "178f",
			"recovery": "48f or until you cancel move",
			"damage": "816 (fi all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, 'bbb,tenkai', JSON_COMPACT('{ "variations": [
		{
			"title": "tenkai",
			"startup": "31f",
			"active": "once plates are moving, they are active until interacted with",
			"recovery": "until you cancel move or run out of `orbs`",
			"damage": "292 (if all hit)",
			"stun": 0
		}
	]}')),
	(@game, @character, '5c,c', JSON_COMPACT('{ "variations": [
		{
			"title": "5c",
			"startup": "18f",
			"active": "once fire is moving, it is active until interacted with",
			"recovery": "34f or until you cancel move",
			"damage": "833",
			"stun": "40 on explosion, 20 on pass-through"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"startup": "34f",
			"active": "11f - 37f",
			"recovery": "38f or until you cancel move",
			"damage": "1250",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/de/Futo-6c-max.gif"
		}
	]}')),
	(@game, @character, 'j6c', JSON_COMPACT('{ "variations": [
		{
			"title": "j6c",
			"startup": "17f",
			"active": "27f",
			"recovery": "43f or until you land or cancel move",
			"damage": "875",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/db/Futo-j6c.gif"
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"startup": "18f",
			"active": "4f (small box)|3f to active plates - until texture touches plate",
			"recovery": "38f or until you cancel move",
			"damage": "856 (1 pillar), 3022 (5 pillars)",
			"stun": "12 (1 pillar), 60 (5 pillars)"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c / high j2c",
			"startup": "28f",
			"active": "50f",
			"recovery": "49f or until you cancel move",
			"damage": "1109 (if all hit)",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/38/Futo-hj2c.gif"
		},
		{
			"title": "low j2c",
			"startup": "18 - 38f (until you touch bottom screen)",
			"active": "17f",
			"recovery": "12f or until you cancel move",
			"damage": "1000",
			"stun": "40",
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/d0/Futo-lj2c.gif"
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"startup": "20f",
			"active": "once arrow is moving, it is active until interacted with | 46f to reach highest plate, 62f to reach the lowest plate, active until out of bounds",
			"damage": "750",
			"stun": 20
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": "10f",
			"active": "15f",
			"recovery": "10f or until you cancel move",
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
			"recovery": "28f" or until you cancel move,
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
			"recovery": "26f",
			"damage": "min: 1119 (2 hits), max: 1746 (2 hits)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1c/Futo-ab.gif"
		}
	]}')),
	(@game, @character, 'tag,taga,tagja,tagb,ta,tja,tb', JSON_COMPACT('{ "variations": [
		{
			"title": "tag a"
			"startup": "20f",
			"active": "3f",
			"recovery": "22f",
			"damage": "618",
			"stun": "0"
		},
		{
			"title": "tag ja"
			"startup" "14f",
			"active": "22f",
			"recovery": "7f or until you land or cancel move",
			"damage": "400 (raw damage)",
			"stun": "0"
		},
		{
			"title": "tag b"
			"startup": "15f",
			"active": "",
			"recovery": "25f or until you cancel move",
		}
	]}')),
	(@game, @character, 'sc,spellcard', JSON_COMPACT('{ "variations": [
		{
			"title": "spellcard 1",
			"startup": "16f (invul 37f)",
			"active": "73f",
			"recovery": "34f",
			"damage": "2433",
			"stun": 100,
			"cost": 700,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/b5/Futo_0.png"
		},
		{
			"title": "spellcard 2",
			"startup": "14f",
			"active": ""150f",
			"recovery": "7f",
			"damage": "3550 (if all hit)",
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
			"startup": "20f (140f invul)",
			"active": "120f | box is active until intereacted with",
			"recovery": "38f",
			"damage": ranges from 4160 min (500 sc3 + 700 slave spell) - 5460 max (1200 sc2 + 1400 slave spell),
			"stun": 100
		}
	]}'));

