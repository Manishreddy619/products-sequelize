import sequelize from '../index.js';

import s from 'sequelize';
const { DataTypes } = s;
const Product = sequelize.define('product', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	category: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	price: {
		type: DataTypes.INTEGER,
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

export default Product;
