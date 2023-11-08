const { GoogleSpreadsheet } = require('google-spreadsheet')
const { JWT } = require('google-auth-library')
const creds = require('../../key.json')

const serviceAccountAuth = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets'
  ]
})

const loadSheet = async (doc) => {
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]
  await sheet.loadCells()
}

const accessSheet = async () => {
  console.log('starting to access the google sheet...')
  const doc = new GoogleSpreadsheet(process.env.SPREADSHEETID, serviceAccountAuth)
  await loadSheet(doc)

  console.log('accessed the google sheet')
  return doc
}

module.exports = {
  loadSheet,
  accessSheet
}
