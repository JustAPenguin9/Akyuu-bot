SET @game = 'AoCF';
SET @character = 'Joon Yorigami';

INSERT INTO `moves` (
	`game`, `character`, `lables`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": 6,
			"active": 2,
			"recovery": 11,
			"damage": 200,
			"stun": 0
		},
		{
			"title": "far 5a",
			"startup": 9,
			"active": 3,
			"recovery": 16,
			"damage": 500,
			"stun": 0
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": 20,
			"active": 6,
			"recovery": 21,
			"damage": 750,
			"stun": 40
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": 9,
			"active": 9,
			"recovery": 26,
			"damage": "250 > 918",
			"stun": "40 (on final hit)"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": 11,
			"active": 5,
			"recovery": 21,
			"damage": 750,
			"stun": 40
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": 8,
			"active": 9,
			"recovery": 32,
			"damage": 500,
			"stun": 0
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": 9,
			"active": 6,
			"recovery": 25,
			"damage": 750,
			"stun": 40
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a",
			"startup": 9,
			"active": 9,
			"recovery": 29,
			"damage": 750,
			"stun": 40
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "top lane j2a",
			"startup": 14,
			"active": 17,
			"recovery": 66,
			"damage": 750,
			"stun": 40
		},
		{
			"title": "bottom lane j2a",
			"startup": 9,
			"active": 17,
			"recovery": 66,
			"damage": 750,
			"stun": 40
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"damage": "640 (if all hit)",
			"stun": 35
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"damage": "640 (if all hit)",
			"stun": 35
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"damage": "640 (if all hit)",
			"stun": 35
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"damage": "479 (if all hit)",
			"stun": 15
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
			"stun": 0
		}
	]}')),
	(@game, @character, '5c,c', JSON_COMPACT('{ "variations": [
		{
			"title": "5c",
			"startup": 20,
			"damage": "375 per, 1357 (if all hit)",
			"stun": "10 x 4 = [40]"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"startup": "14f, cancellable after 24f",
			"recovery": 114,
			"damage": 250,
			"stun": 40
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"damage": 1000,
			"stun": 40
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c",
			"damage": "1016 (if all hit)",
			"stun": "40 (10 per)"
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"startup": 12,
			"damage": 779,
			"stun": 40
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": 10,
			"active": 4,
			"recovery": 27,
			"damage": 500,
			"stun": 0
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": 21,
			"active": 6,
			"recovery": 31,
			"damage": 825,
			"stun": 40
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult",
			"damage": "958 (125 x 10)",
			"stun": "5 per"
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
			"damage": 2500,
			"stun": 100,
			"cost": 1000
		},
		{
			"title": "spellcard 2",
			"damage": "3962-4119",
			"stun": 100,
			"cost": 1400
		},
		{
			"title": "spellcard 3",
			"damage": 5248,
			"stun": 100,
			"cost": 1200
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": 4800,
			"stun": 100
		}
	]}'));

