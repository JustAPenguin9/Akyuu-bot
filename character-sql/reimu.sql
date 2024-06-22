SET @game = 'AoCF';
SET @character = 'Reimu Hakurei';

INSERT INTO `moves` (
	`game`, `character`, `lables`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": "8f",
			"active": "2f",
			"recovery": "13f",
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/2/22/Reimuc5a.gif"
		},
		{
			"title": "far 5a",
			"startup": "10f",
			"active": "4f",
			"recovery": "20f",
			"damage": 500,
			"stun": 0,
			"thumbnail": "https://wiki.koumakan.jp/images/aocf/e/e5/Reimuf5a.gif"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": "18f",
			"active": "3f",
			"recovery": "22f",
			"damage": 750,
			"stun": 40
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": "12f",
			"active": "9f",
			"recovery": "19f",
			"damage": 750,
			"stun": 40
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": "14f",
			"active": "4f",
			"recovery": "36f",
			"damage": 750,
			"stun": 40
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": "12f",
			"active": "8f",
			"recovery": "28f",
			"damage": 500,
			"stun": 0
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": "12f",
			"active": "6f",
			"recovery": "29f",
			"damage": 750,
			"stun": 40
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "top lane j8a",
			"startup": "12f",
			"active": "9f",
			"recovery": "18f",
			"damage": 750,
			"stun": 40
		},
		{
			"title": "bottom lane j8a",
			"startup": "14f",
			"active": "23f",
			"recovery": "21f",
			"damage": 750,
			"stun": 40
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "top lane j2a",
			"startup": "16f",
			"active": "64f",
			"recovery": "16f",
			"damage": "750",
			"stun": 40
		},
		{
			"title": "bottom lane j2a",
			"startup": "16f",
			"active": "4f",
			"recovery": "23f",
			"damage": "750",
			"stun": 40
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"damage": "652 (if all hit)",
			"stun": 35
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"damage": "668 (if all hit)",
			"stun": 39
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"damage": "668 (if all hit)",
			"stun": 39
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"damage": "618 (if all hit)",
			"stun": "8 per hit (max 32)"
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"damage": "1000",
			"stun": 40
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
			"startup": "17f",
			"active": "10f > 15f not active > 32f",
			"recovery": "23f",
			"damage": "1179 (if all hit)",
			"stun": "20 per hit (max 40)"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"damage": "1027 (if all hit)",
			"stun": "10 per talisman (max 40)"
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"damage": "634",
			"stun": 45
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c",
			"startup": "47f",
			"recovery": "15f",
			"damage": "1727 (if all hit)",
			"stun": "10 per hit (max 40)"
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"startup": "12f",
			"active": "3f",
			"recovery": "45f",
			"damage": "875",
			"stun": 40
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": "12f",
			"active": "6f",
			"recovery": "16f",
			"damage": "550",
			"stun": 0
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": "13f",
			"active": "10f",
			"recovery": "36f",
			"damage": "825",
			"stun": 40
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult (normal)",
			"damage": "717 > 717",
			"stun": "25 > 25"
		},
		{
			"title": "forward occult (6ab)",
			"damage": "625 (on expand) 816 (250 per hit on shrink)",
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
			"damage": "2487 (if all hit)",
			"stun": 100,
			"cost": 800
		},
		{
			"title": "spellcard 2",
			"damage": "3275",
			"stun": 100,
			"cost": 1200
		},
		{
			"title": "spellcard 3",
			"damage": "3108 (if all hit)",
			"stun": 100,
			"cost": 1000
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": 4906,
			"stun": 100
		}
	]}'));

