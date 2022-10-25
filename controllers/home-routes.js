const router = require('express').Router();
const { Comments, Posts, Users } = require('../models');

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
    console.log(posts);
    res.render('homepage', {
        posts
    });
    }catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

module.exports = router;