SET @game = 'AoCF';
SET @character = 'Reisen Udongein Inaba';

INSERT INTO `moves` (
	`game`, `character`, `lables`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": 6,
			"active": 2,
			"recovery": 12,
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1c/Reisenc5a.gif"			
		},
		{
			"title": "far 5a",
			"startup": 7,
			"active": 3,
			"recovery": 17,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/fa/Reisen-f5a.gif"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": 11,
			"active": 2,
			"recovery": 27,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/43/Reisen6a.png"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": 8,
			"active": 6,
			"recovery": 43,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/0/0e/Reisen-8a.gif"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": 12,
			"active": 10,
			"recovery": 18,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/16/Reisen2a.png"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": 8,
			"active": 8,
			"recovery": 40,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/a/aa/Reisenj5a.png"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": 8,
			"active": "2f > 4f not active > 2f > 4f not active > 2f",
			"recovery": 24,
			"damage": "919 (if all hit)",
			"stun": "20 + 10 x 2 = [40]",
			"attachment": "https://wiki.koumakan.jp/images/aocf/e/e6/Reisen-j6a.gif"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "top lane j8a",
			"startup": 8,
			"active": 6,
			"recovery": 24,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/c/cd/Reisen8a.png"
		},
		{
			"title": "bottom lane j8a",
			"startup": 12,
			"active": 86,
			"recovery": 41,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/c/cd/Reisen8a.png"
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": 11,
			"active": 6,
			"recovery": 43,
			"damage": "919 (if all hit)",
			"stun": "20 + 10 x 2 = [40]",
			"attachment": "https://wiki.koumakan.jp/images/aocf/a/a8/Reisenj2a.png"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"startup": 13,
			"recovery": "41f (jump cancellable after 23f)",
			"damage":"625 (if all hit)",
			"stun": 35
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"damage":"625 (if all hit)",
			"stun": 35
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"damage":"625 (if all hit)",
			"stun": 35
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"damage": "925 (if all hit)",
			"stun": 30
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"damage": "1500 (if all hit)",
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
			"startup": 6,
			"damage": "0 - 1000 (full insanity)",
			"stun": "0 - 40 (full insanity)"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"damage": "1350 (if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"startup": 8,
			"damage": "80 per bullet",
			"stun": "5 per"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c",
			"startup": 21,
			"active": 25,
			"recovery": 20,
			"damage": "1240 (if all hit)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/83/Reisen-2c.gif"
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"damage": "500 (crate), 675 (explosion)",
			"stun": "20 each"
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": 14,
			"active": 6,
			"recovery": 16,
			"damage": 675,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/49/Reisen-66a.gif"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": 13,
			"active": "2f > 4f not active > 2f > 4f not active > 2f",
			"recovery": 29,
			"damage": "1020 (if all hit)",
			"stun": "10 x 3 = [30]",
			"attachment": "https://wiki.koumakan.jp/images/aocf/c/cd/Reisen-66b.gif"
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult",
			"damage": "1186 (750+500)",
			"stun": "(40 on last hit)"
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
			"damage": "85 per",
			"stun": "2 per",
			"cost": 800
		},
		{
			"title": "spellcard 2",
			"damage": "3612 (if all hit)",
			"stun": 100,
			"cost": 1300
		},
		{
			"title": "spellcard 3",
			"damage": 3123,
			"stun": 100,
			"cost": 1100
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": 4700,
			"stun": 100
		}
	]}'));

