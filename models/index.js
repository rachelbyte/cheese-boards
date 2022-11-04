const User = require('./user.model')
const Board = require('./board.model')
const Cheese = require('./cheese.model')

function oneToMany () {

    User.hasMany(Board)

    Board.belongsTo(User)

}

function ManytoMany () {

    Cheese.belongsToMany(Board, {through: "Cheese_Board"})

    Board.belongsToMany(Cheese, {through: "Cheese_Board"})

}
module.exports = {
    User, 
    Board, 
    Cheese,
    oneToMany, ManytoMany
}