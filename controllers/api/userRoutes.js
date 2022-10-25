const router = require('express').Router();
const { User } = require('../../models');

// /api/login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email}});
    if (!userData){
        res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again'});
        return;
    }  

    const validatePassword = await userData.checkPassword(req.body.password);

    if (!validatePassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
  }catch (err) {
    res.status(500).json(err)
  }
  });

  // /api/signup
  router.post('/signup', async (req, res) => {
    try{
    const newUser = await User.create({
      username: req.body.email,
      password: req.body.password
    })
    
  
        req.session.save(() => {
          req.session.user_id = newUser.id;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
    
      } catch (err) {
        res.status(500).json(err)
      }
    });

    // /api/logout
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;