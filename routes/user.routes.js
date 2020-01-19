const { Router } = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');

const router = Router();

//=== get user
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId });
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

//===   /user/update
router.put('/', auth, async (req, res) => {
  try {
    const _id = req.user.userId;
    const {
      user: { name, surname, avatar }
    } = req.body;

    const updateAt = new Date();

    const user = await User.findOneAndUpdate(
      { _id },
      { name, surname, avatar, updateAt },
      { new: true, useFindAndModify: false }
    );

    res.status(201).json({ user });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = router;
