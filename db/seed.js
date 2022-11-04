const {User, Board, Cheese} = require('../models')
const db = require('./db')

async function seed () {
// Drop and create tables
await db.sync({force: true})

}
seed()