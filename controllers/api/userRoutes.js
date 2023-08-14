const router = require('express').Router();
const { User, Post, View } = require('../../models');




//router for posting for new user
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: { id: req.params.id },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'content', 'date_created']
            },
            {
                model: View,
                attributes: ['id', 'post_id', 'user_id', 'date_created'],
            }
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id' });
          return;
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });

    router.post('/', (req, res) => { 
        console.log(req.body);
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.logged_in = true;

                res.json(dbUserData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        }
        );
    });

    router.post('/login', async (req, res) => {
        console.log(req.body);
        try {
            const dbUserData = await User.findOne({
                where: { username: req.body.username }
            });
            if (!dbUserData) {
                res.status(400).json({ message: 'No user found with that username' });
                return;
            }
            //verify user
            const validPassword = await dbUserData.checkPassword(req.body.password);
            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect password' });
                return;
            }
            req.session.save(() => {
                //declare session variables
                req.session.user_id = dbUserData.id;
                req.session.logged_in = true; 
                res.json({ user: dbUserData, message: 'You are now logged in!' });
            }
            );
        } catch (err) {
            res.status(400).json(err); 
        }
    });


    // router.post('/login', (req, res) => {
    //     User.findOne({
    //         where: { username: req.body.username }
    //     })
    //     .then(dbUserData => {
    //         if (!dbUserData) {
    //             res.status(400).json({ message: 'No user found with that username' });
    //             return;
    //         }
    //         //verify user
    //         const validPassword = dbUserData.checkPassword(req.body.password);
    //         if (!validPassword) {
    //             res.status(400).json({ message: 'Incorrect password' });
    //             return;
    //         }
    //         req.session.save(() => {
    //             //declare session variables
    //             // req.session.user_id = dbUserData.id;
    //             req.session.username = dbUserData.username;
    //             req.session.logged_in = true;
    //             res.json({ user: dbUserData, message: 'You are now logged in!' });
    //         }
    //         );
    //     }
    //     );
    // });

    router.post('/logout', (req, res) => {
        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            }
            );
        } else {
            res.status(404).end();
        }
    });

    router.put('/:id', (req, res) => {
        User.update(req.body, {
            individualHooks: true,
            where: { id: req.params.id }
        })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No user found with that id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        }
        );
    });

    router.delete('/:id', (req, res) => {
        User.destroy({
            where: { id: req.params.id }
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with that id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        }
        );
    });



//module export
module.exports = router;