const Board = require('../models/board.model')
const User = require('../models/user.model')
const oneToMany = require('../models')

describe('Testing the one-to-Many Relationship', () => {


test ('One user can have many boards', async() => {


const rachel = await User.create({name: "Rachel", email: "rachel@mail.com"})

const boards = await Board.bulkCreate([{type:"French Cheese", description: "Assorted French Cheeses", rating: 8},
 {type: "Soft Cheese", description: "Assorted Soft Cheeses", rating: 10}])


 await rachel.addBoards(boards)

 expect(rachel.countBoards(boards)).toBe(2)


})













})