//get route to join post and user tables
const router = require('express').Router();
const { Post, User, View } = require('../models');
// const withAuth = require('../utils/auth');

//get route to join post and user tables
router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'content', 'date_created'],
    include: [
      {
        model: View,
        attributes: ['id', 'content', 'post_id', 'user_id'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((postData) => {
      const posts = postData.map((post) => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        logged_in: req.session.logged_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get route to post by id
router.get('/post/:id', async (req, res) => {
Post.findOne({
  where: {
    id: req.params.id,
  },
  attributes: ['id', 'title', 'content', 'date_created'],
  include: [
  {
    model: View,
    attributes: ['id', 'content', 'post_id', 'user_id'],
    include: {
      model: User,
      attributes: ['username'],
    },
    
  },
  {
    model: User,
    attributes: ['username'],
  },

],

})
.then((postData) => {
 const posts = postData.map(post => post.get({ plain: true }));
 res.render('homepage', { posts, logged_in: req.session.logged_in });
 })
 .catch((err) => {
   console.log(err);
   res.status(500).json(err);
   });
   });



//with auth to prevent non logged in users from viewing the content
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Post }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//router get to login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

//module exports
module.exports = router;
