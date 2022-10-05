(async () => {
  require('dotenv').config()
  const mariadb = require('mariadb')
  const fs = require('fs')

  // read nedb file
  const file = fs.readFileSync('./db/history.db', 'utf8')
  const lines = file.split(/\r\n|\n/)
  const matches = []
  
  lines.forEach(line => {
    matches.push(JSON.parse(line, null, 2))
  })
  
  // set up mariadb
  const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  })
  console.log('starting connection...')
  const conn = await pool.getConnection()

  // create database
  console.log('making db')
  await conn.query(
    `CREATE TABLE history (
      id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
      winner VARCHAR(18) NOT NULL,
      loser VARCHAR(18) NOT NULL,
      time VARCHAR(13) NOT NULL
    );`
  ).catch(() => { console.log('THE HISTORY TABLE ALREADY EXISTS') })
  // errors if table already exists and thats fine

  // move nedb data to mariadb
  try {
    console.log('starting transaction...')
    await conn.beginTransaction()

    console.log('starting query...')
    matches.forEach(async match => {
      await conn.query('INSERT INTO history (winner, loser, time) VALUES (?, ?, ?);', [match.winner, match.looser, match.time])
    })
    console.log('ending query')

    console.log('commiting the transaction')
    conn.commit()
  } catch (error) {
    conn.rollback()
    console.error('error commiting the data to mariadb exiting the program')
  }

  console.log('ending the connection')
  if (conn) await conn.end()

  process.exit()
})()
