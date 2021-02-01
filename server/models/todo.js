'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Title tidak boleh kosong!'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Description tidak boleh kosong!'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Status tidak boleh kosong!'
        }
      }
    },
    due_date: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
        isAfter: {
          args: new Date().toDateString(),
          msg: 'Tidak boleh hari sebelum hari ini'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });

  return Todo;
};