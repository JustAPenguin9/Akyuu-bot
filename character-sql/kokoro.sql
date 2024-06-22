SET @game = 'AoCF';
SET @character = 'Hata no Kokoro';

INSERT INTO `moves` (
	`game`, `character`, `lables`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": 9,
			"active": 9,
			"recovery": 15,
			"damage": 339,
			"stun": 0
		},
		{
			"title": "far 5a",
			"startup": 10,
			"active": 3,
			"recovery": 21,
			"damage": 500,
			"stun": 0
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": 15,
			"active": 3,
			"recovery": 30,
			"damage": 812,
			"stun": 40
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": 13,
			"active": "3f > 12f not active, 6f",
			"recovery": 20,
			"damage": "375 > 984",
			"stun": "20 per (max 40)"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": 18,
			"active": 18,
			"recovery": 32,
			"damage": "807 (if all hit)",
			"stun": "8 per (max 48)"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": 11,
			"active": 6,
			"recovery": 25,
			"damage": 500,
			"stun": 0
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": 15,
			"active": 7,
			"recovery": 37,
			"damage": 812,
			"stun": 40
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a",
			"startup": 13,
			"active": "3f > 12f not active > 6f",
			"recovery": 20,
			"damage": "375 > 984",
			"stun": "20 > 40"
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": 14,
			"active": 18,
			"recovery": 27,
			"damage": "686 (if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b (no emotion)",
			"damage": "613 (if all hit)",
			"stun": 15
		},
		{
			"title": "5b (anger)",
			"damage": "790 (if all hit)",
			"stun": 45
		},
		{
			"title": "5b (joy)",
			"damage": "911 (if all hit)",
			"stun": 30
		},
		{
			"title": "5b (melancholy)",
			"damage": "561 (if all hit)",
			"stun": 24
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b (no emotion)",
			"damage": "613 (if all hit)",
			"stun": 15
		},
		{
			"title": "5b (anger)",
			"damage": "790 (if all hit)",
			"stun": 45
		},
		{
			"title": "5b (joy)",
			"damage": "911 (if all hit)",
			"stun": 30
		},
		{
			"title": "5b (melancholy)",
			"damage": "561 (if all hit)",
			"stun": 24
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b (no emotion)",
			"damage": "613 (if all hit)",
			"stun": 15
		},
		{
			"title": "5b (anger)",
			"damage": "790 (if all hit)",
			"stun": 45
		},
		{
			"title": "5b (joy)",
			"damage": "911 (if all hit)",
			"stun": 30
		},
		{
			"title": "5b (melancholy)",
			"damage": "561 (if all hit)",
			"stun": 24
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b (no emotion)",
			"damage": "994 (if all hit)",
			"stun": 25
		},
		{
			"title": "6b (anger)",
			"damage": "1212 (if all hit)",
			"stun": 40
		},
		{
			"title": "6b (joy)",
			"damage": "1162 (if all hit)",
			"stun": 30
		},
		{
			"title": "6b (melancholy)",
			"damage": "1131 (if all hit)",
			"stun": 32
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"damage": "1007 (if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, 'bbb,tenkai', JSON_COMPACT('{ "variations": [
		{
			"title": "tenkai (no emotion)",
			"damage": "160",
			"stun": 0
		},
		{
			"title": "tenkai (anger)",
			"stun": 0
		},
		{
			"title": "tenkai (joy)",
			"stun": 0
		},
		{
			"title": "tenkai (melancholy)",
			"stun": 0
		}
	]}')),
	(@game, @character, '5c,c', JSON_COMPACT('{ "variations": [
		{
			"title": "5c",
			"damage": "979 (1223 depending on position)",
			"stun": "30 (40 depending on position)"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"startup": 16,
			"active": "minimum 41f",
			"recovery": 29,
			"damage": "1341",
			"stun": "40 (on last hit)"
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"startup": 24,
			"active": 8,
			"recovery": 22,
			"damage": "250 > 843 or 750 (on last hit)",
			"stun": "0 > 40"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c",
			"damage": "1195 (if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"damage": "1222 (if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": 15,
			"active": "3f > 12f not active > 3f",
			"recovery": 16,
			"damage": "312 > 645",
			"stun": 0
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": 14,
			"active": 12,
			"recovery": 30,
			"damage": "375 > 725 > 1052",
			"stun": 45
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult (after a successful counter)",
			"startup": 6,
			"damage": "997 (if all hit)",
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
			"damage": "3071",
			"stun": 100,
			"cost": 1200
		},
		{
			"title": "spellcard 2",
			"damage": "2008",
			"stun": 100,
			"cost": 700
		},
		{
			"title": "spellcard 3",
			"damage": 3337,
			"stun": 100,
			"cost": 1000
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": 5060,
			"stun": 100
		}
	]}'));

