module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    'product',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      cant: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      classMethods: {},
    },
  );
  product.associate = function (models) {
    // Model association
  };

  return product;
};