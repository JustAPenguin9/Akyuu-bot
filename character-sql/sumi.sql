SET @game = 'AoCF';
SET @character = 'Sumireko Usami';

INSERT INTO `moves` (
	`game`, `character`, `labels`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": 8,
			"active": "2f > 3f not active > 2f",
			"recovery": 12,
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/54/Sumic5a.gif"
		},
		{
			"title": "far 5a",
			"startup": 11,
			"active": 7,
			"recovery": 18,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/e/ee/Usamif5a.png"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": 18,
			"active": 3,
			"recovery": 28,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/2/23/Usami6a.png"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": 14,
			"active": 6,
			"recovery": 24,
			"damage": "1039 (if all hit)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/c/ca/Usami8a.png"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": 18,
			"active": 5,
			"recovery": 24,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6e/Usami2a.png"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": 10,
			"active": 13,
			"recovery": 27,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/2/21/Usamij5a.png"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": 18,
			"active": 3,
			"recovery": 24,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/9/92/Usamij6a.png"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a",
			"startup": 17,
			"active": 5,
			"recovery": 26,
			"damage": "1039 (if all hit)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/55/Usamij8a.png"
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": 21,
			"active": 5,
			"recovery": 24,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/0/00/Usamij2a.png"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"damage": "561 (if all hit)",
			"stun": 30
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"damage": "561 (if all hit)",
			"stun": 30
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"damage": "561 (if all hit)",
			"stun": 30
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"damage": "1019 (if all hit)",
			"stun": 25
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"damage": 1215,
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
			"damage": "1868 (if all hit)",
			"stun": 45
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"damage": "N/A",
			"stun": "N/A"
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"damage": "1163 (if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "low 2c",
			"damage": "1196 (if all hit)",
			"stun": 25
		},
		{
			"title": "high 2c",
			"damage": "1221 (if all hit)",
			"stun": 60
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"startup": 19,
			"damage": 1295,
			"stun": 80
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": 18,
			"active": 35,
			"recovery": 22,
			"damage": 675,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/42/Usami66a.png"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": 26,
			"active": 2,
			"recovery": 35,
			"damage": 825,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/a/a3/Usami66b.png"
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult high",
			"damage": 750,
			"stun": 40
		},
		{
			"title": "occult mid"
		},
		{
			"title": "occult low"
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
			"damage": 3750,
			"stun": 100,
			"cost": 1400
		},
		{
			"title": "spellcard 2",
			"damage": 3060,
			"stun": 100,
			"cost": 1000
		},
		{
			"title": "spellcard 3",
			"damage": 4820,
			"stun": 100,
			"cost": 1200
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": 4889-6161,
			"stun": 100
		}
	]}'));

