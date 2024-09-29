const db = require('../models');
const Users = db.users;

const Analytics = db.analytics;

const Feedbacks = db.feedbacks;

const Notifications = db.notifications;

const Routes = db.routes;

const Organizations = db.organizations;

const AnalyticsData = [
  {
    // type code here for "relation_one" field

    commuter_count: 150,

    recorded_at: new Date('2023-10-01T00:00:00Z'),

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    commuter_count: 200,

    recorded_at: new Date('2023-10-02T00:00:00Z'),

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    commuter_count: 100,

    recorded_at: new Date('2023-10-03T00:00:00Z'),

    // type code here for "relation_one" field
  },
];

const FeedbacksData = [
  {
    content: 'The bus was late by 15 minutes.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'pending',

    // type code here for "relation_one" field
  },

  {
    content: 'The train was clean and on time.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'pending',

    // type code here for "relation_one" field
  },

  {
    content: 'The ride-sharing service was excellent.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'pending',

    // type code here for "relation_one" field
  },
];

const NotificationsData = [
  {
    message: 'Route 1 is experiencing delays due to traffic.',

    // type code here for "relation_one" field

    sent_at: new Date('2023-10-01T08:00:00Z'),

    // type code here for "relation_one" field
  },

  {
    message: 'Route 2 has a schedule change.',

    // type code here for "relation_one" field

    sent_at: new Date('2023-10-02T09:00:00Z'),

    // type code here for "relation_one" field
  },

  {
    message: 'Route 3 is now available.',

    // type code here for "relation_one" field

    sent_at: new Date('2023-10-03T10:00:00Z'),

    // type code here for "relation_one" field
  },
];

const RoutesData = [
  {
    name: 'Route 1',

    start_point: 'Downtown',

    end_point: 'Airport',

    // type code here for "relation_one" field
  },

  {
    name: 'Route 2',

    start_point: 'City Center',

    end_point: 'University',

    // type code here for "relation_one" field
  },

  {
    name: 'Route 3',

    start_point: 'Old Town',

    end_point: 'New Town',

    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'Karachi Transport Authority',
  },

  {
    name: 'City Transit Services',
  },

  {
    name: 'RideShare Karachi',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }
}

async function associateAnalyticWithRoute() {
  const relatedRoute0 = await Routes.findOne({
    offset: Math.floor(Math.random() * (await Routes.count())),
  });
  const Analytic0 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Analytic0?.setRoute) {
    await Analytic0.setRoute(relatedRoute0);
  }

  const relatedRoute1 = await Routes.findOne({
    offset: Math.floor(Math.random() * (await Routes.count())),
  });
  const Analytic1 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Analytic1?.setRoute) {
    await Analytic1.setRoute(relatedRoute1);
  }

  const relatedRoute2 = await Routes.findOne({
    offset: Math.floor(Math.random() * (await Routes.count())),
  });
  const Analytic2 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Analytic2?.setRoute) {
    await Analytic2.setRoute(relatedRoute2);
  }
}

async function associateAnalyticWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic0 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Analytic0?.setOrganization) {
    await Analytic0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic1 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Analytic1?.setOrganization) {
    await Analytic1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic2 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Analytic2?.setOrganization) {
    await Analytic2.setOrganization(relatedOrganization2);
  }
}

async function associateFeedbackWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Feedback0 = await Feedbacks.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Feedback0?.setUser) {
    await Feedback0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Feedback1 = await Feedbacks.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Feedback1?.setUser) {
    await Feedback1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Feedback2 = await Feedbacks.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Feedback2?.setUser) {
    await Feedback2.setUser(relatedUser2);
  }
}

async function associateFeedbackWithRoute() {
  const relatedRoute0 = await Routes.findOne({
    offset: Math.floor(Math.random() * (await Routes.count())),
  });
  const Feedback0 = await Feedbacks.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Feedback0?.setRoute) {
    await Feedback0.setRoute(relatedRoute0);
  }

  const relatedRoute1 = await Routes.findOne({
    offset: Math.floor(Math.random() * (await Routes.count())),
  });
  const Feedback1 = await Feedbacks.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Feedback1?.setRoute) {
    await Feedback1.setRoute(relatedRoute1);
  }

  const relatedRoute2 = await Routes.findOne({
    offset: Math.floor(Math.random() * (await Routes.count())),
  });
  const Feedback2 = await Feedbacks.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Feedback2?.setRoute) {
    await Feedback2.setRoute(relatedRoute2);
  }
}

async function associateFeedbackWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Feedback0 = await Feedbacks.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Feedback0?.setOrganization) {
    await Feedback0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Feedback1 = await Feedbacks.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Feedback1?.setOrganization) {
    await Feedback1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Feedback2 = await Feedbacks.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Feedback2?.setOrganization) {
    await Feedback2.setOrganization(relatedOrganization2);
  }
}

async function associateNotificationWithRoute() {
  const relatedRoute0 = await Routes.findOne({
    offset: Math.floor(Math.random() * (await Routes.count())),
  });
  const Notification0 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Notification0?.setRoute) {
    await Notification0.setRoute(relatedRoute0);
  }

  const relatedRoute1 = await Routes.findOne({
    offset: Math.floor(Math.random() * (await Routes.count())),
  });
  const Notification1 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Notification1?.setRoute) {
    await Notification1.setRoute(relatedRoute1);
  }

  const relatedRoute2 = await Routes.findOne({
    offset: Math.floor(Math.random() * (await Routes.count())),
  });
  const Notification2 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Notification2?.setRoute) {
    await Notification2.setRoute(relatedRoute2);
  }
}

async function associateNotificationWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Notification0 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Notification0?.setOrganization) {
    await Notification0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Notification1 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Notification1?.setOrganization) {
    await Notification1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Notification2 = await Notifications.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Notification2?.setOrganization) {
    await Notification2.setOrganization(relatedOrganization2);
  }
}

async function associateRouteWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Route0 = await Routes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Route0?.setOrganization) {
    await Route0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Route1 = await Routes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Route1?.setOrganization) {
    await Route1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Route2 = await Routes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Route2?.setOrganization) {
    await Route2.setOrganization(relatedOrganization2);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Analytics.bulkCreate(AnalyticsData);

    await Feedbacks.bulkCreate(FeedbacksData);

    await Notifications.bulkCreate(NotificationsData);

    await Routes.bulkCreate(RoutesData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateAnalyticWithRoute(),

      await associateAnalyticWithOrganization(),

      await associateFeedbackWithUser(),

      await associateFeedbackWithRoute(),

      await associateFeedbackWithOrganization(),

      await associateNotificationWithRoute(),

      await associateNotificationWithOrganization(),

      await associateRouteWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('analytics', null, {});

    await queryInterface.bulkDelete('feedbacks', null, {});

    await queryInterface.bulkDelete('notifications', null, {});

    await queryInterface.bulkDelete('routes', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
