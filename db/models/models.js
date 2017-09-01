'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


var User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    allowNull: false
  }
})

var Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    isUrl: true
  }
})

Campus.hasMany(User, { onDelete: 'cascade', hooks: true });
User.belongsTo(Campus);




module.exports = {
User, Campus}
