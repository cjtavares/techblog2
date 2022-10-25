const { Comments } = require('../models');

const commentsdata = [
  {
   body: 'I agree',
   user_id: 2,
   post_id: 1
  },
  {
    body: 'I think JavaScript has its uses',
   user_id: 3,
   post_id: 2 
  },
  {
    body: 'Yeah, you should learn REACT',
   user_id: 1,
   post_id: 3
  },
];

const seedComments = () => Comments.bulkCreate(commentsdata);

module.exports = seedComments;
