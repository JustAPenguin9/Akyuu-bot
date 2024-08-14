SET @game = 'AoCF';
SET @character = 'Toyosatomimi no Miko';

INSERT INTO `moves` (
	`game`, `character`, `labels`, `data`
) VALUES
	(@game, @character, '5a,a,4a,c5a,f5a', JSON_COMPACT('{ "variations": [
		{
			"title": "close 5a",
			"startup": "8f",
			"active": "2f",
			"recovery": "13f",
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/39/Mikoc5a.gif"
		},
		{
			"title": "red cape close 5a",
			"startup": "8f",
			"active": "2f",
			"recovery": "13f",
			"damage": 200,
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/7/7c/Mikoc5a-red.gif"
		},
		{
			"title": "far 5a",
			"startup": "11f",
			"active": "18f",
			"recovery": "15f",
			"damage": "200",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/c/c7/Miko-f5a-no-cape.gif"
		},
		{
			"title": "red cape far 5a",
			"startup": "11f",
			"active": "18f",
			"recovery": "15f",
			"damage": "200",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/f1/Mikof5a-red.gif"
		}
	]}')),
	(@game, @character, '6a', JSON_COMPACT('{ "variations": [
		{
			"title": "6a",
			"startup": "15f",
			"active": "24f",
			"recovery": "19f",
			"damage": "1100 (500 + 93 per)",
			"stun": "10 (first hit) + 4 per"
		}
	]}')),
	(@game, @character, '8a', JSON_COMPACT('{ "variations": [
		{
			"title": "8a",
			"startup": "15f",
			"active": "6f",
			"recovery": "26f",
			"damage": "750",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/c/c7/Miko-8a-no-cape.gif"
		},
		{
			"title": "red cape 8a",
			"startup": "15f",
			"active": "6f",
			"recovery": "26f",
			"damage": "750",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/b/b6/Miko8a-red.gif"
		}
	]}')),
	(@game, @character, '2a', JSON_COMPACT('{ "variations": [
		{
			"title": "2a",
			"startup": "15f",
			"active": "3f",
			"recovery": "25f",
			"damage": 750,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/f/f1/Miko2a.png"
		}
	]}')),
	(@game, @character, 'ja,j5a', JSON_COMPACT('{ "variations": [
		{
			"title": "j5a",
			"startup": "9f",
			"active": "6f",
			"recovery": "24f",
			"damage": "500",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/3/36/Miko-j5a.gif"
		},
		{
			"title": "red cape j5a",
			"startup": "9f",
			"active": "6f",
			"recovery": "24f",
			"damage": "500",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/5/5e/Mikoj5a-red.gif"
		}
	]}')),
	(@game, @character, 'j6a', JSON_COMPACT('{ "variations": [
		{
			"title": "j6a",
			"startup": "15f",
			"active": "29f",
			"recovery": "9f",
			"damage": 1230,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/e/e5/Miko-j6a-nocape.gif"
		},
		{
			"title": "red cape j6a",
			"startup": "15f",
			"active": "29f",
			"recovery": "9f",
			"damage": 1230,
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/d/d1/Mikoj6a-red.gif"
		}
	]}')),
	(@game, @character, 'j8a', JSON_COMPACT('{ "variations": [
		{
			"title": "j8a",
			"startup": "12f",
			"active": "6f",
			"recovery": "42f",
			"damage": 750,
			"stun": 40
		}
		]}')),
	(@game, @character, 'j2a', JSON_COMPACT('{ "variations": [
		{
			"title": "j2a",
			"startup": "13f",
			"active": "3f",
			"recovery": "42f",
			"damage": "750",
			"stun": 40,
			"attachment": "https://wiki.koumakan.jp/images/aocf/e/e2/Miko-j2a-nocape.gif"
		}
	]}')),
	(@game, @character, '5b,b', JSON_COMPACT('{ "variations": [
		{
			"title": "5b",
			"startup": "14f",
			"damage": "717 (if all hit)",
			"stun": "20"
		}
	]}')),
	(@game, @character, '2b', JSON_COMPACT('{ "variations": [
		{
			"title": "2b",
			"startup": "14f",
			"damage": "717 (if all hit)",
			"stun": "20"
		}
	]}')),
	(@game, @character, '8b', JSON_COMPACT('{ "variations": [
		{
			"title": "8b",
			"startup": "14f",
			"damage": "717 (if all hit)",
			"stun": "20"
		}
	]}')),
	(@game, @character, '6b', JSON_COMPACT('{ "variations": [
		{
			"title": "6b (no/red cape)",
			"startup": "24f",
			"damage": "839",
			"stun": "30"
		},
		{
			"title": "6b (blue cape)",
			"startup": "24f",
			"damage": "1115",
			"stun": "30"
		}
	]}')),
	(@game, @character, 'cb,chargeb,[b]', JSON_COMPACT('{ "variations": [
		{
			"title": "charge b (no/red cape)",
			"damage": "661",
			"stun": 30
		},
		{
			"title": "charge b (blue cape)",
			"damage": "853",
			"stun": 30
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
			"damage": "N/A",
			"stun": "N/A"
		}
	]}')),
	(@game, @character, 'j5c', JSON_COMPACT('{ "variations": [
		{
			"title": "j5c",
			"startup": "16f",
			"damage": "705 (125x3 + 500)",
			"stun": "40 (5x3 + 25)"
		}
	]}')),
	(@game, @character, '6c', JSON_COMPACT('{ "variations": [
		{
			"title": "6c (no/red cape)",
			"startup": "35f",
			"damage": "1499",
			"stun": "68 (64x4 + 4)"
		},
		{
			"title": "6c (blue cape)",
			"startup": "35f",
			"damage": "1499",
			"stun": "68 (64x4 + 4)"
		}
	]}')),
	(@game, @character, '4c', JSON_COMPACT('{ "variations": [
		{
			"title": "4c",
			"damage": "1000",
			"stun": "40"
		}
	]}')),
	(@game, @character, '2c', JSON_COMPACT('{ "variations": [
		{
			"title": "2c (no/red cape)",
			"damage": "1173",
			"stun": "30 (5 per)"
		},
		{
			"title": "2c (blue cape)",
			"damage": "1404",
			"stun": "30 (5 per)"
		}
	]}')),
	(@game, @character, '8c', JSON_COMPACT('{ "variations": [
		{
			"title": "8c (no/red cape)",
			"damage": "1020",
			"stun": "25 (if all hit)"
		},
		{
			"title": "8c (blue cape)",
			"damage": "1533",
			"stun": "24"
		}
	]}')),
	(@game, @character, 'da,dasha,66a', JSON_COMPACT('{ "variations": [
		{
			"title": "dash a (no/blue cape)",
			"startup": "9f",
			"active": "3f",
			"recovery": "22f",
			"damage": "550",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/8/82/Miko_66a_no_cape.gif"
		},
		{
			"title": "dash a (red cape)",
			"startup": "6f",
			"active": "6f",
			"recovery": "22f",
			"damage": "550",
			"stun": 0,
			"attachment": "https://wiki.koumakan.jp/images/aocf/0/02/Miko66a-red.gif"
		}
	]}')),
	(@game, @character, 'db,dashb,66b', JSON_COMPACT('{ "variations": [
		{
			"title": "dash b (no/blue cape)",
			"startup": "12f",
			"active": "9f",
			"recovery": "45f",
			"damage": "1116 (if all hit)",
			"stun": 0
		},
		{
			"title": "dash b (red cape)",
			"startup": "12f",
			"active": "9f",
			"recovery": "45f",
			"damage": "1316 (if all hit)",
			"stun": 0
		}
	]}')),
	(@game, @character, 'ab,occult', JSON_COMPACT('{ "variations": [
		{
			"title": "occult",
			"damage": "1250",
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
			"damage": "4655",
			"stun": 100,
			"cost": 1000
		},
		{
			"title": "spellcard 2",
			"damage": "4362",
			"stun": 100,
			"cost": 1200
		},
		{
			"title": "spellcard 3",
			"damage": "3206 - 5136",
			"stun": 100,
			"cost": 1000
		}
	]}')),
	(@game, @character, 'lw,lastword', JSON_COMPACT('{ "variations": [
		{
			"title": "lastword",
			"damage": 4919,
			"stun": 100
		}
	]}'));

