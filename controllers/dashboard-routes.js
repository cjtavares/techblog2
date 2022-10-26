const router = require('express').Router();
const { Comments, Posts, Users } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', withAuth, async (req, res) => {
    try{
      const allPosts = await Posts.findAll({
        where: {
          user_id: req.session.user_id
        },  
      });
  
      const posts = allPosts.map((post) => 
      post.get({plain: true})
    );
    res.render('dashboard', {
        layout: 'dashboard',
        posts,
        logged_in: req.session.logged_in
    });
    }catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
  });

  router.get('/newpost', withAuth, (req, res) => {
    res.render('newpost', {
      logged_in: req.session.logged_in
    });
    
  });

  module.exports = router;