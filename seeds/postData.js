const { Posts } = require('../models');

const postsdata = [
  {
   post_title: 'Why js is the best language',
   body: 'JavaScript is the best to wright front end sites',
   user_id: 1
  },
  {
    post_title: 'Why js is the worst language',
    body: 'JavaScript is slow',
    user_id: 2
   },
   {
    post_title: 'Should you learn handlebars',
    body: 'Handlebars is old and REACT is the standard',
    user_id: 3
   },
];

const seedPosts = () => Posts.bulkCreate(postsdata);

module.exports = seedPosts;