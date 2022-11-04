const User = require('../models/User')
//const { describe } = require('../models/user.model')
const db = require('./db/db')

describe('User', () => {

beforeAll(async () => {

    await db.sequelize.sync()
})
 
test ('A User has a name and email', async () => {

    const user = await User.create({ name: "test"}, {email: "test@test.com"})

    expect(user.name).toBe("test")
    expect(User.id).toBeTruthy()
})


})