const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const analytics = sequelize.define(
    'analytics',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      commuter_count: {
        type: DataTypes.INTEGER,
      },

      recorded_at: {
        type: DataTypes.DATE,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  analytics.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.analytics.belongsTo(db.routes, {
      as: 'route',
      foreignKey: {
        name: 'routeId',
      },
      constraints: false,
    });

    db.analytics.belongsTo(db.organizations, {
      as: 'organization',
      foreignKey: {
        name: 'organizationId',
      },
      constraints: false,
    });

    db.analytics.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.analytics.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return analytics;
};
