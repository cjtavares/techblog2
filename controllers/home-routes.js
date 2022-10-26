const router = require('express').Router();
const { Comments, Posts, Users } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
      const allPosts = await Posts.findAll({
        include: [
          {
            model: Users,
            attributes: ["username"]
          },
        ],  
      });

      const posts = allPosts.map((post) => 
      post.get({plain: true})
    );
    res.render('homepage', {
        posts, 
        logged_in: req.session.logged_in
    });
    }catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/signup', (req, res) => {
  res.render('signup')
});



module.exports = router;