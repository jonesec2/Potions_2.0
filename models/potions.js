module.exports = function(sequelize, DataTypes) {
   const Potions = sequelize.define("Potions", {
      potion_name: DataTypes.STRING,
      potion_header: DataTypes.STRING,
      potion_subHeader: DataTypes.STRING,
      potion_description: DataTypes.STRING,
      potion_subDescription: DataTypes.STRING,
      potion_cost: DataTypes.INTEGER,
      potion_days: DataTypes.INTEGER,
      potion_DC: DataTypes.STRING
   });
   return Potions;
}