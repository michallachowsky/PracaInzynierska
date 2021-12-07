module.exports = (sequelize, DataTypes) => {

    const Score = sequelize.define("Score",{

        score:{
            type: DataTypes.INTEGER
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })

    return Score
}