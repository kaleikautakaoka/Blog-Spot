const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

//router for posting for new user
router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  try {
    const postData = await Post.create({
      ...body,
      user_id: req.session.user_id,
      // title: req.body.title,
      // content: req.body.content
    });

    res.json(postData);
  } catch (err) {
    res.status(500);
  }
});

//router for updating post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [updateRows] = await Post.update(
      req.body,
      // {
      //     title: req.body.title,
      //     content: req.body.content,
      // },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    if (updateRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//router for deleting post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [updateRows] = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (updateRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
  } catch (err) {
    res.status(500).json(err);
  }
});

//module export
module.exports = router;
