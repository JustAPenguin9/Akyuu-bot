// TODO: command to take back already submitted results
// TODO: command to change the timeout for results

(async () => {
  require('dotenv').config()
  const { Client, GatewayIntentBits, Collection, Partials } = require('discord.js')
  const path = require('path')
  const { readdirSync } = require('fs')

  // google sheet
  const { accessSheet } = require('./src/functions/sheets')
  const doc = await accessSheet()

  // create discord.js client
  const bot = new Client({
    intents: [
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.DirectMessageReactions
    ],
    partials: [
      Partials.Channel,
      Partials.Message
    ]
  })
  bot.commands = new Collection()
  bot.events = new Collection()
  bot.characters = new Collection()
  bot.CommandTimeout = new Set()
  bot.doc = doc // move the spreadsheet into the bot object

  // set up mariadb
  const mariadb = require('mariadb')
  bot.pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    acquireTimeout: 5000 // 5s to make a connection
  })

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
    const characterJSON = require(`${characterPath}/${file}`)

    bot.characters.set(characterJSON.name, characterJSON)

    characterJSON.aliases?.forEach(alias => {
      bot.characters.set(alias, characterJSON)
    })
  })

  // login and start the bot
  bot.login(process.env.TOKEN)

  // safely close the bot
  const exitHandler = async (signal) => {
    if (bot) bot.destroy()

    process.exit()
  }
  process.on('exit', exitHandler)
  process.on('SIGINT', exitHandler)
  process.on('SIGTERM', exitHandler)
})()
