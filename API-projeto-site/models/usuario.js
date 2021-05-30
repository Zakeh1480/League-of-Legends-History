	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idUser: {
			field: 'idUser',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Email: {
			field: 'Email',
			type: DataTypes.STRING,
			allowNull: false
		},
		Senha: {
			field: 'Senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		Re_Senha: {
			field: 'Re_Senha',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'conta', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
