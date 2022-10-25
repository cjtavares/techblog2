const { Users } = require('../models');

const usersdata = [
  {
   username: 'ctavares',
   password: 'Herewego'
  },
  {
   username: 'jungisthebest',
   password: 'Iagree' 
  },
  {
    username: 'pikachu',
   password: 'Pokemon'
  },
];

const seedUsers = () => Users.bulkCreate(usersdata);

module.exports = seedUsers;