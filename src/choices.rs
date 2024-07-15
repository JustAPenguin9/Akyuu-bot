#[allow(unused)]
#[rustfmt::skip]
mod choices {
	/// `full_name` and `name` need to have the proper casing for use in the db and
	/// to stop rustc from complaining, the aliases can be lowercase as command
	/// aliases are matched lowercase.
	/// `full_name` and `aliases` can be empty.
	pub struct Choice {
		/// eg. "Reimu"
		pub name: &'static str,
		/// eg. "Reimu Hakurei"
		pub full_name: &'static str,
		/// eg. `&["Reimoo"]`
		pub aliases: &'static [&'static str],
	}

	pub const CHARACTER_CHOICES : &[Choice] = &[
		REIMU, MARISA, ICHIRIN, BYAKUREN, FUTO, MIKO, NITORI, KOISHI, MAMI,
		KOKORO, KASEN, MOKOU, SUKUNA, SUMI, REISEN, DOREMY, TENSHI,
		YUKARI, JOON
	];

	pub const WIKI_CHOICES : &[Choice] = &[
		REIMU, MARISA, ICHIRIN, BYAKUREN, FUTO, MIKO, NITORI, KOISHI, MAMI,
		KOKORO, KASEN, MOKOU, SUKUNA, SUMI, REISEN, DOREMY, TENSHI, YUKARI,
		JOON, CONTROLS, MECHANICS, GLOSSARY, MODDING
	];

	const REIMU: Choice = Choice {
		name: "Reimu",
		full_name: "Reimu Hakurei",
		aliases: &["Reimoo"],
	};

	const MARISA: Choice = Choice {
		name: "Marisa",
		full_name: "Marisa Kirisame",
		aliases: &[],
	};

	const ICHIRIN: Choice = Choice {
		name: "Ichirin",
		full_name: "Ichirin Kumoi",
		aliases: &[],
	};

	const BYAKUREN: Choice = Choice {
		name: "Byakuren",
		full_name: "Byakuren Hijiri",
		aliases: &["byak", "hijiri"],
	};
	const FUTO: Choice = Choice {
		name: "Futo",
		full_name: "Mononobe no Futo",
		aliases: &[],
	};
	const MIKO: Choice = Choice {
		name: "Miko",
		full_name: "Toyosatomimi no Miko",
		aliases: &["miku"],
	};
	const NITORI: Choice = Choice {
		name: "Nitori",
		full_name: "Nitori Kawashiro",
		aliases: &[],
	};
	const KOISHI: Choice = Choice {
		name: "Koishi",
		full_name: "Koishi Komeiji",
		aliases: &["koi"],
	};
	const MAMI: Choice = Choice {
		name: "Mamizou",
		full_name: "Mamizou Futatsuiwa",
		aliases: &["mami"],
	};
	const KOKORO: Choice = Choice {
		name: "Kokoro",
		full_name: "Hata no Kokoro",
		aliases: &["koko"],
	};
	const KASEN: Choice = Choice {
		name: "Kasen",
		full_name: "Kasen Ibaraki",
		aliases: &[],
	};
	const MOKOU: Choice = Choice {
		name: "Mokou",
		full_name: "Fujiwara no Mokou",
		aliases: &["moko"],
	};
	const SUKUNA: Choice = Choice {
		name: "Sukuna",
		full_name: "Shinmyoumaru Sukuna",
		aliases: &["shinmyoumaru", "shimmy", "shimy", "sinmyoumaru"],
	};
	const SUMI: Choice = Choice {
		name: "Sumireko",
		full_name: "Sumireko Usami",
		aliases: &["sumi", "usami", "susami"],
	};
	const REISEN: Choice = Choice {
		name: "Reisen",
		full_name: "Reisen Udongein Inaba",
		aliases: &["udonge"],
	};
	const DOREMY: Choice = Choice {
		name: "Doremy",
		full_name: "Doremy Sweet",
		aliases: &["santa", "smug"],
	};
	const TENSHI: Choice = Choice {
		name: "Tenshi",
		full_name: "Tenshi Hinanawi",
		aliases: &["tenko"],
	};
	const YUKARI: Choice = Choice {
		name: "Yukari",
		full_name: "Yukari Yakumo",
		aliases: &["bestthcharacterdont@me"],
	};
	const JOON: Choice = Choice {
		name: "Joon",
		full_name: "Joon Yorigami",
		aliases: &["jo'on", "jyoon", "june", "john"],
	};
	const CONTROLS: Choice = Choice {
		name: "Controls",
		full_name: "",
		aliases: &[],
	};
	const MECHANICS: Choice = Choice {
		name: "Mechanics",
		full_name: "",
		aliases: &[],
	};
	const GLOSSARY: Choice = Choice {
		name: "Glossary",
		full_name: "",
		aliases: &[],
	};
	const MODDING: Choice = Choice {
		name: "Modding",
		full_name: "",
		aliases: &["mods, mod"],
	};
}
