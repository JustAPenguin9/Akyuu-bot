SET @game = 'AoCF';
SET @character = 'Marisa Kirisame';

INSERT INTO `moves` (
	`game`, `character`, `labels`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": "7f",
			"active": "2f",
			"recovery": "14f",
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/bf/Marisac5a.gif"
		},
		{
			"title": "far 5a",
			"startup": "14f",
			"active": "3f",
			"recovery": "21f",
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/bc/Marisa-f5a.gif"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": "11f",
			"active": "8f",
			"recovery": "23f",
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/5a/Marisa6a.png"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": "11f",
			"active": "4f",
			"recovery": "28f",
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1c/Marisa8a.gif"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": "15f",
			"active": "4f",
			"recovery": "29f",
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/30/Marisa-2a.gif"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": "10f",
			"active": "6f",
			"recovery": "23f",
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1b/Marisa-j5a.gif"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": "10f",
			"active": "12f",
			"recovery": "27f",
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/fb/Marisaj6a.png"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a",
			"startup": "11f",
			"active": "4f",
			"recovery": "27f",
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/c/cd/Marisaj8a.png"
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "top lane j2a",
			"startup": "14f",
			"active": "20f > 3f not active > 3f",
			"recovery": "28f",
			"damage": "1137 (if all hit)",
			"stun": 50,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/7e/Marisaj2a.png"
		},
		{
			"title": "bottom lane j2a",
			"startup": "15f",
			"active": "8f",
			"recovery": "31f",
			"damage": "750",
			"stun": 50,
			"attachment": "https://wiki.koumakan.jp/images/aocf/a/a7/Marisalj2a.gif"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"damage": "744 (if all hit)",
			"stun": 38,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/69/Marisa5b.png"
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"damage": "1476 (if all hit)",
			"stun": 100,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/f6/Marisa5c.png"
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"damage": "1476 (if all hit)",
			"stun": 100,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/f6/Marisa5c.png"
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"damage": "883 (if all hit)",
			"stun": 30,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/56/Marisa6b.png"
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"damage": "1020",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/45/Marisa-b-.png"
		}
	]}')),
	(@game, @character, 'bbb,tenkai', JSON_COMPACT('{ "variations": [
		{
			"title": "tenkai",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/ff/Marisabbb.png"
		}
	]}')),
	(@game, @character, '5c,c', JSON_COMPACT('{ "variations": [
		{
			"title": "5c",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/f6/Marisa5c.png"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"damage": "1127 (if all hit)",
			"stun": 25,
			"attachment": "https://wiki.koumakan.jp/images/aocf/0/04/Marisa6c.png"
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"damage": "1090 (if all hit)",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/a/a2/Marisa4c.png"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c",
			"damage": "1152 (if all hit)",
			"stun": "40 (on last hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/c/cc/Marisa2c.png"
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"damage": "717 (if all hit)",
			"stun": 25,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/4a/Marisa8c.png"
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": "14f",
			"active": "3f",
			"recovery": "21f",
			"damage": "950 (if all hit)",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/43/Marisa66a.gif"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": "12f",
			"active": "44f",
			"recovery": "28f",
			"damage": "974 (if all hit)",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6a/Marisa66b.png"
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult (piano)",
			"damage": "1051 (if all hit)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/d1/OccultPiano0000.png"
		},
		{
			"title": "occult (painting)",
			"damage": "758 (if all hit)",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/0/05/OccultPhotol0000.png"
		},
		{
			"title": "occult (soldier/statue)",
			"damage": "637 (if all hit)",
			"stun": 30,
			"attachment": "https://wiki.koumakan.jp/images/aocf/a/af/Occult_ninomiya0001.png"
		},
		{
			"title": "occult (basketball)",
			"damage": "1083 (if all hit)",
			"stun": 15,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1e/Occult_dr0005.png"
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
			"damage": "4843 (if all hit)",
			"stun": 100,
			"cost": 1400,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/5e/Marisa_0.png"
		},
		{
			"title": "spellcard 2",
			"damage": "3744 (if all hit)",
			"stun": 100,
			"cost": 1200,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/70/Marisa_1.png"
		},
		{
			"title": "spellcard 3",
			"stun": 0,
			"cost": 800,
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/4c/Marisa_2.png"
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": 4884-6627,
			"stun": 100
		}
	]}'));

