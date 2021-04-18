module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return User
}