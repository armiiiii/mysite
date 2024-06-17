import Sequelize from 'sequelize';

export function Post(sequelize) {
    return sequelize.define("Post", {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        },
        label: {type: Sequelize.STRING, allowNull: false},
        text: {type: Sequelize.TEXT, allowNull: false},
    })
}
