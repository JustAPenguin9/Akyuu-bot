SET @game = 'AoCF';
SET @character = 'Tenshi Hinanawi';

INSERT INTO `moves` (
	`game`, `character`, `labels`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": 6,
			"active": 2,
			"recovery": 12,
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/a/a7/Tenshic5a.gif"
		},
		{
			"title": "far 5a",
			"startup": 12,
			"active": 3,
			"recovery": 22,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/7b/Tenshif5a.png"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": 16,
			"active": 6,
			"recovery": 23,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/5f/Tenshi6a.png"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": 10,
			"active": 3,
			"recovery": 21,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/1/1b/Tenshi8a.png"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": 13,
			"active": 4,
			"recovery": 21,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/a/a8/Tenshi2a.png"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": 9,
			"active": 6,
			"recovery": 35,
			"damage": 500,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/6/6b/Tenshij5a.png"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": 16,
			"active": 6,
			"recovery": 34,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/e/eb/Tenshij6a.png"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a",
			"startup": 12,
			"active": 3,
			"recovery": 33,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/b7/Tenshij8a.png"
		}
	]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": 14,
			"active": 10,
			"recovery": 38,
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/2/23/Tenshij2a.png"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"startup": 26,
			"recovery": 22,
			"damage": "823 (if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"startup": 13,
			"damage": "823 (if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"startup": 13,
			"damage": "823 (if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b",
			"startup": 11,
			"recovery": "35f, catch: 25f",
			"damage": "479 (if all hit)",
			"stun": "10 x 3 = [30]",
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/b5/Tenshi-6b.gif"
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b",
			"startup": 16,
			"recovery": "50f, cancellable after 35f",
			"damage": 998,
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
			"damage": 787,
			"stun": 40
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c",
			"damage": "823 (if all hit)",
			"stun": 40
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"startup": 20,
			"active": 15,
			"recovery": 35,
			"damage": 1429,
			"stun": "40 (on second hit)",
			"attachment": "https://wiki.koumakan.jp/images/aocf/4/48/Tenshi-4c.gif"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c",
			"startup": "23f (no charging)",
			"active": 6,
			"recovery": 36,
			"damage": 1000,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/d4/Tenshi2c.gif"
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c",
			"damage": 750,
			"stun": 40
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a",
			"startup": 9,
			"active": 14,
			"recovery": 15,
			"damage": 585,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/2/2d/Tenshi66a.png"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b",
			"startup": 14,
			"active": 18,
			"recovery": 17,
			"damage": 1170,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/b6/Tenshi66b.png"
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult",
			"startup": 103,
			"damage": "1000 per",
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
			"damage": 2942,
			"stun": 100,
			"cost": 1000
		},
		{
			"title": "spellcard 2",
			"damage": "3245-4331",
			"stun": 100,
			"cost": 1300
		},
		{
			"title": "spellcard 3",
			"damage": "N/A",
			"stun": "N/A",
			"cost": 1000
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"startup": "10f > 60 freeze frames > 1f",
			"active": 41,
			"recovery": 39,
			"damage": 4925,
			"stun": 100,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/74/Tenshi-LW.png"
		}
	]}'));
