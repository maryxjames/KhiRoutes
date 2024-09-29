const { v4: uuid } = require('uuid');

module.exports = {
  /**
   * @param{import("sequelize").QueryInterface} queryInterface
   * @return {Promise<void>}
   */
  async up(queryInterface) {
    const createdAt = new Date();
    const updatedAt = new Date();

    /** @type {Map<string, string>} */
    const idMap = new Map();

    /**
     * @param {string} key
     * @return {string}
     */
    function getId(key) {
      if (idMap.has(key)) {
        return idMap.get(key);
      }
      const id = uuid();
      idMap.set(key, id);
      return id;
    }

    await queryInterface.bulkInsert('roles', [
      {
        id: getId('SuperAdmin'),
        name: 'Super Administrator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('Administrator'),
        name: 'Administrator',
        createdAt,
        updatedAt,
      },

      { id: getId('city_planner'), name: 'city_planner', createdAt, updatedAt },

      {
        id: getId('public_transport_authority'),
        name: 'public_transport_authority',
        createdAt,
        updatedAt,
      },

      {
        id: getId('transit_operator'),
        name: 'transit_operator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('regular_commuter'),
        name: 'regular_commuter',
        createdAt,
        updatedAt,
      },

      { id: getId('tourist'), name: 'tourist', createdAt, updatedAt },
    ]);

    /**
     * @param {string} name
     */
    function createPermissions(name) {
      return [
        {
          id: getId(`CREATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `CREATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`READ_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `READ_${name.toUpperCase()}`,
        },
        {
          id: getId(`UPDATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `UPDATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`DELETE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `DELETE_${name.toUpperCase()}`,
        },
      ];
    }

    const entities = [
      'users',
      'analytics',
      'feedbacks',
      'notifications',
      'routes',
      'roles',
      'permissions',
      'organizations',
      ,
    ];
    await queryInterface.bulkInsert(
      'permissions',
      entities.flatMap(createPermissions),
    );
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`READ_API_DOCS`),
        createdAt,
        updatedAt,
        name: `READ_API_DOCS`,
      },
    ]);
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`CREATE_SEARCH`),
        createdAt,
        updatedAt,
        name: `CREATE_SEARCH`,
      },
    ]);

    await queryInterface.bulkUpdate(
      'roles',
      { globalAccess: true },
      { id: getId('SuperAdmin') },
    );

    await queryInterface.sequelize
      .query(`create table "rolesPermissionsPermissions"
(
"createdAt"           timestamp with time zone not null,
"updatedAt"           timestamp with time zone not null,
"roles_permissionsId" uuid                     not null,
"permissionId"        uuid                     not null,
primary key ("roles_permissionsId", "permissionId")
);`);

    await queryInterface.bulkInsert('rolesPermissionsPermissions', [
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('CREATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('regular_commuter'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('regular_commuter'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('tourist'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('tourist'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('CREATE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('READ_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('UPDATE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('DELETE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('CREATE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('READ_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('UPDATE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('DELETE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('READ_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('UPDATE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('DELETE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('regular_commuter'),
        permissionId: getId('READ_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('regular_commuter'),
        permissionId: getId('UPDATE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('tourist'),
        permissionId: getId('READ_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('tourist'),
        permissionId: getId('UPDATE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('CREATE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('READ_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('UPDATE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('DELETE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('CREATE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('READ_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('UPDATE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('DELETE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('CREATE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('READ_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('UPDATE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('DELETE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('regular_commuter'),
        permissionId: getId('CREATE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('regular_commuter'),
        permissionId: getId('READ_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('regular_commuter'),
        permissionId: getId('UPDATE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('tourist'),
        permissionId: getId('CREATE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('tourist'),
        permissionId: getId('READ_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('tourist'),
        permissionId: getId('UPDATE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('CREATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('DELETE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('CREATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('DELETE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('CREATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('DELETE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('regular_commuter'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('regular_commuter'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('tourist'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('tourist'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('CREATE_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('READ_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('UPDATE_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('DELETE_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('CREATE_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('READ_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('UPDATE_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('DELETE_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('CREATE_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('READ_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('UPDATE_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('DELETE_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('regular_commuter'),
        permissionId: getId('READ_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('regular_commuter'),
        permissionId: getId('UPDATE_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('tourist'),
        permissionId: getId('READ_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('tourist'),
        permissionId: getId('UPDATE_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('city_planner'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('public_transport_authority'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('transit_operator'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('regular_commuter'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('tourist'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_ANALYTICS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_ANALYTICS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_ANALYTICS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_FEEDBACKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_FEEDBACKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_FEEDBACKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_NOTIFICATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_ROUTES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_ROUTES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_ROUTES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_ANALYTICS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_ANALYTICS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_ANALYTICS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_FEEDBACKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_FEEDBACKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_FEEDBACKS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_FEEDBACKS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_NOTIFICATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_NOTIFICATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_NOTIFICATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_NOTIFICATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_ROUTES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_ROUTES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_ROUTES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_ROUTES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_ROLES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_PERMISSIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_ORGANIZATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_ORGANIZATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_ORGANIZATIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_ORGANIZATIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_API_DOCS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_API_DOCS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_SEARCH'),
      },
    ]);

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'SuperAdmin',
      )}' WHERE "email"='super_admin@flatlogic.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'Administrator',
      )}' WHERE "email"='admin@flatlogic.com'`,
    );

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'city_planner',
      )}' WHERE "email"='client@hello.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'public_transport_authority',
      )}' WHERE "email"='john@doe.com'`,
    );
  },
};
