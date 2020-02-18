module.exports = function(sequelize, DataTypes) {
   const Brewin = sequelize.define("Brewin", {
      brewin_name: DataTypes.STRING,
      brewin_DC: DataTypes.STRING,
      brewin_description: DataTypes.STRING,
      brewin_cost: DataTypes.INTEGER,
      brewin_days: DataTypes.INTEGER,
   });
   return Brewin;
}