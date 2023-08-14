const router = require('express').Router();
const { Post, User, View } = require('../models'); 
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'content',
            'date_created'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: View,
                attributes: ['id', 'post_id', 'content', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(dbPostData => {
                
                const posts = dbPostData.map(post => post.get({ plain: true }));
                res.render('dashboard', { posts, logged_in: true });
            }
        )
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        }
        );
}
);

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'content',
            'date_created'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: View,
                attributes: ['id', 'post_id', 'user_id', 'content'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(dbPostData => {
                
                if (dbPostData) {
                    res.status(404).json({ message: 'No post found with this id' });
                    return;
                }
                const post = dbPostData.get({ plain: true });
                res.render('edit-post', { post, loggedIn: true });
            }
        )
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        }
        );
}
);

router.get('/new', (req, res) => {
    res.render('newPost', {
        logged_in: req.session.logged_in
    });

}
);

module.exports = router;




  

    