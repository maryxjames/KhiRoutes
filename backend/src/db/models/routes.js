const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const routes = sequelize.define(
    'routes',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      start_point: {
        type: DataTypes.TEXT,
      },

      end_point: {
        type: DataTypes.TEXT,
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

  routes.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.routes.hasMany(db.analytics, {
      as: 'analytics_route',
      foreignKey: {
        name: 'routeId',
      },
      constraints: false,
    });

    db.routes.hasMany(db.feedbacks, {
      as: 'feedbacks_route',
      foreignKey: {
        name: 'routeId',
      },
      constraints: false,
    });

    db.routes.hasMany(db.notifications, {
      as: 'notifications_route',
      foreignKey: {
        name: 'routeId',
      },
      constraints: false,
    });

    //end loop

    db.routes.belongsTo(db.organizations, {
      as: 'organization',
      foreignKey: {
        name: 'organizationId',
      },
      constraints: false,
    });

    db.routes.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.routes.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return routes;
};
