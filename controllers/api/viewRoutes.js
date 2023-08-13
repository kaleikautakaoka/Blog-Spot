const router = require('express').Router();
const { View } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    View.findAll()
        .then(dbViewData => res.json(dbViewData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, async (req, res) => {
    if (req.session) {
        View.create({
            content: req.body.content,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
            .then(dbViewData => res.json(dbViewData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    } 
});


router.delete('/:id', withAuth, async (req, res) => {
    View.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbViewData => {
            if (!dbViewData) {
                res.status(404).json({ message: 'No View found with this id' });
                return;
            }
            res.json(dbViewData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;