const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

//router for posting for new user
router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });

        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
}
);

//router for updating post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
}
);

//router for deleting post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
}
);

//module export
module.exports = router;