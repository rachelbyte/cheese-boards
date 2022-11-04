const Board = require('../models/board.model')
const db = require('../db/db')

describe('Board', () => {

beforeAll (async () => {

    await Board.sync({force: true})
})

test ('A board has a type description and rating', async () => {

    const board = await Board.create({type:"French Cheese", description: "Assorted French Cheeses", rating: 8})

    expect(board.type).toBe("French Cheese")
    expect(board.rating).toBe(8)
    expect(board.id).toBeTruthy()

}),

test('Another board has a type description and rating', async () => {

    const board = await Board.create({type: "Soft Cheese", description: "Assorted Soft Cheeses", rating: 10})

    expect(board.type).toBe("Soft Cheese")
    expect(board.description).toBe("Assorted Soft Cheeses")
    expect(board.id).toBeTruthy()

})


})