const Cheese = require('../models/cheese.model')
const db = require('../db/db')


describe('Cheese', () => {

    beforeAll (async () => {

        await Cheese.sync({force: true})
    })
    
test ('A cheese with a title and description', async () => {


    const cheddar = await Cheese.create({title: "Cheddar", description: "The texture is slightly buttery, moist, and a little melty. \
    It's truly a versatile crowd-pleaser. Aged cheddars become more nutty, crumbly, and sharp.\
    During the aging process the cheese develops a slightly tangier finish, some earthy notes, \
    and some hard salt-like crystals that add a slight crunch to each bite"})


    expect(cheddar.title).toBe("Cheddar")
    expect(cheddar.id).toBeTruthy()
})

test ('Another cheese with a title and description', async () => {

const parmesan = await Cheese.create({title: "Parmesan", description: "The flavor power of parmesan can take a savory dish from\
 acceptable to amazing with a dusting of this delicious cheese. \
Lots of words are used to describe parmesan: \
rich, tangy, nutty, sharp, complex, fruity, and bold to name a few. \
It has a somewhat gritty texture and a strong umami taste."})

expect(parmesan.title).toBe("Parmesan")

expect(parmesan.id).toBeTruthy()

})


})