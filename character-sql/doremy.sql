SET @game = 'AoCF';
SET @character = 'Doremy Sweet';

INSERT INTO `moves` (
	`game`, `character`, `labels`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": 6,
			"active": 3,
			"recovery": 12,
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/91/Doremyc5a.gif"
		},
		{
			"title": "far 5a",
			"startup": 9,
			"active": 2,
			"recovery": 22,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6a/Doremyf5a.png"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": 16,
			"active": 3,
			"recovery": 25,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/92/Doremy6a.png"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": 15,
			"active": 8,
			"recovery": 27,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/15/Doremy8a.png"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": 12,
			"active": 30,
			"recovery": 32,
			"damage": "250 > 750",
			"stun": "40 (on last hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/82/Doremy2a.png"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": 10,
			"active": 15,
			"recovery": 26,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/33/Doremyj5a.gif"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": 16,
			"active": 3,
			"recovery": 43,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/f7/Doremyj6a.png"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a",
			"startup": 11,
			"active": 15,
			"recovery": 24,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/91/Doremyj8a.png"
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "top lane j2a",
			"startup": 15,
			"active": "30f > 9f not active > 6f",
			"recovery": 26,
			"damage": "375-806 (125/hit and 500 on last hit)",
			"stun": "40 (on last hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/9b/Doremyj2a.png"
		},
		{
			"title": "bottom lane j2a",
			"startup": 15,
			"active": "30f > 12 not active > 30",
			"recovery": 61,
			"damage": "375-806 (125/hit and 500 on last hit)",
			"stun": "40 (on last hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/9b/Doremyj2a.png"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"startup": 15,
			"damage": 636,
			"stun": 30
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"damage": 636,
			"stun": 30
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"damage": 636,
			"stun": 30
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"damage": "636 (if all hit)",
			"stun": 30
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"damage": 1000,
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
			"damage": "125 (small orb), 500 (big orb)",
			"stun": "2 (small orb), 10 (big orb)"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"damage": "1141 (if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"damage": "1014 (625 + 500)",
			"stun": "60 (on last hit)"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c",
			"damage": "867 (2 hits)",
			"stun": "25 per"
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"damage": "500 (if all hit)",
			"stun": "40 (if all hit)"
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": 10,
			"active": 15,
			"recovery": 20,
			"damage": "553 (if all hit)",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/a/af/Doremy66a.png"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": 15,
			"active": 27,
			"recovery": 28,
			"damage": "1016 (if all hit)",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1e/Doremy66b.png"
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult"
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
			"damage": 1845,
			"stun": 100,
			"cost": 800,
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/8d/Doremy_0.png"
		},
		{
			"title": "spellcard 2",
			"damage": "3637 (if all hit)",
			"stun": 100,
			"cost": 1000,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/5f/Doremy_1.png"
		},
		{
			"title": "spellcard 3",
			"damage": "2888-3999",
			"stun": 100,
			"cost": 1400,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6d/Doremy_2.png"
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": 4800,
			"stun": 100
		}
	]}'));

