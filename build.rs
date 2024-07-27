// generated by `sqlx migrate build-script`
fn main() {
	write_choices();
	write_character_cmds();
	println!("cargo:rerun-if-changed=choices.rs");

	// trigger recompilation when a new migration is added
	println!("cargo:rerun-if-changed=migrations");
}

include!("./src/choices.rs");
use choices::*;

/// Writes out the src/choice_parameters.rs file that includes the
/// poise::ChoiceParameter options for both the characters and wiki.
///
/// You can argue that this is worse than it was before.
fn write_choices() {
	let dest = std::path::Path::new("./src").join("choice_parameters.rs");

	let mut result = String::new();
	result += "// generated by `build.rs`\n\n";

	// CHARACTER OPTIONS
	result += "#[rustfmt::skip]\n#[derive(poise::ChoiceParameter)]\npub enum CharacterChoices {\n";
	for c in CHARACTER_CHOICES {
		if !c.full_name.is_empty() {
			result += &format!("\t#[name = \"{}\"]\n", c.full_name);
		}
		for a in c.aliases {
			result += &format!("\t#[name = \"{}\"]\n", a);
		}
		result += &format!("\t#[name = \"{}\"]\n", c.name);
		result += &format!("\t{},\n", c.name);
	}
	result += "}\n\n";

	// WIKI OPTIONS
	result += "#[rustfmt::skip]\n#[derive(poise::ChoiceParameter)]\npub enum WikiChoices {\n";
	for c in WIKI_CHOICES {
		if !c.full_name.is_empty() {
			result += &format!("\t#[name = \"{}\"]\n", c.full_name);
		}
		for a in c.aliases {
			result += &format!("\t#[name = \"{}\"]\n", a);
		}
		result += &format!("\t#[name = \"{}\"]\n", c.name);
		result += &format!("\t{},\n", c.name);
	}
	result += "}\n\n";

	std::fs::write(dest, result).unwrap();
}

/// Writes out the src/commands/characters.rs file that includes character
/// commands (prefix only). `!query reimu a` -> `!reimu a`
fn write_character_cmds() {
	let dest = std::path::Path::new("./src/commands").join("characters.rs");

	let mut result = String::new();
	result += "// generated by `build.rs`\n\n";
	result += "use crate::choice_parameters::CharacterChoices::*;\n\n";

	for c in CHARACTER_CHOICES {
		result += "#[rustfmt::skip]\n#[poise::command(prefix_command";
		if !c.aliases.is_empty() {
			result += &format!(", aliases(\"{}\")", c.aliases.join("\", \""));
		}
		result += ")]\n";
		result += "pub async fn ";
		result += &c.name.to_lowercase();
		result += "(\n";
		result += "\tctx: crate::Context<'_>,\n";
		result += "\t#[description = \"Move you want to query\"] input: String,\n";
		result += ") -> Result<(), crate::Error> {\n";
		result += &format!("\tcrate::commands::query::query_inner(ctx, {}, input).await\n", c.name);
		result += "}\n\n";
	}

	std::fs::write(dest, result).unwrap();
}
