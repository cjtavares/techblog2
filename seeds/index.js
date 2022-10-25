const sequelize = require('../config/connections');
const seedComments = require('./commentData');
const seedPosts = require('./postData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedComments();

  await seedPosts();

  process.exit(0);
};

seedAll();