module.exports = (sequelize, DataTypes) => {

    const Moves = sequelize.define("Moves",{

        score:{
            type: DataTypes.INTEGER
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })

    return Moves
}