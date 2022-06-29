// TODO: revert results command
// TODO: command to change the timeout for results

(async () => {
  require('dotenv').config()
  const { Client, Intents, Collection } = require('discord.js')
  const path = require('path')
  const { readdirSync } = require('fs')

  // google sheet
  const { accessSheet } = require('./src/sheets')
  const doc = await accessSheet()

  // create discord.js client
  const intents = {
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Intents.FLAGS.GUILD_MEMBERS
    ]
  }
  const bot = new Client(intents)
  bot.commands = new Collection()
  bot.events = new Collection()
  bot.characters = new Collection()
  bot.CommandTimeout = new Set()
  bot.doc = doc // move the spreadsheet into the bot object
  // db
  const Datastore = require('@seald-io/nedb')
  bot.historyDb = new Datastore({ filename: 'db/history.db' })
  bot.historyDb.loadDatabase()

  // TODO: add error event
  const eventPath = path.join(__dirname, 'src/events')
  readdirSync(eventPath).forEach(file => {
    const event = require(`${eventPath}/${file}`)
    bot.events.set(event.name, event)
    bot.on(event.name, event.run.bind(null, bot))
  })

  const commandPath = path.join(__dirname, 'src/commands')
  readdirSync(commandPath).forEach(file => {
    const command = require(`${commandPath}/${file}`)
    bot.commands.set(command.name, command)

    command.aliases?.forEach(alias => {
      bot.commands.set(alias, command)
    })
  })

  const characterPath = path.join(__dirname, 'src/characters')
  readdirSync(characterPath).forEach(file => {
  // FIXME: the json is cloned for each name and alias i think?
    const characterJSON = require(`${characterPath}/${file}`)

    bot.characters.set(characterJSON.name, characterJSON)

    characterJSON.aliases?.forEach(alias => {
      bot.characters.set(alias, characterJSON)
    })
  })

  // TODO: update README with the new env format
  bot.login(process.env.TOKEN)
})()
