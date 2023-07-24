const router = require('express').Router();
const { View } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const viewData = await View.findAll();

        res.status(200).json(viewData);
    } catch (err) {
        res.status(500).json(err);
    }
}
);

router.post('/', withAuth, async (req, res) => {
    try {
        const viewData = await View.create({
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        });

        res.status(200).json(viewData);
    } catch (err) {
        res.status(400).json(err);
    }
}
);

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const viewData = await View.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json(viewData);
    } catch (err) {
        res.status(400).json(err);
    }
}
);


module.exports = router;