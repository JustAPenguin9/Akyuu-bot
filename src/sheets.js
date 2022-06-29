// TODO: change this all

const { GoogleSpreadsheet } = require('google-spreadsheet')
const creds = require('../key.json')
const doc = new GoogleSpreadsheet(process.env.SPREADSHEETID)

const loadSheet = async (doc) => {
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]
  await sheet.loadCells()
}

const accessSheet = async () => {
  console.log('start of access sheet')
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key
  })
  await loadSheet(doc)

  console.log('end of access sheet')
  return doc
}

module.exports = {
  loadSheet,
  accessSheet
}
