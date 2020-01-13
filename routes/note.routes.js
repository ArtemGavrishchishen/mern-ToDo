const { Router } = require("express");
const Note = require("../models/Note");
const auth = require("../middleware/auth.middleware");

const router = Router();

//===   /note/add
router.post("/add", auth, async (req, res) => {
  try {
    const {
      note: { title, content }
    } = req.body;

    const note = new Note({
      title,
      content,
      owner: req.user.userId
    });

    await note.save();
    res.status(201).json({ note });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

//===   /note/get
//===   /note/update
//===   /note/delete

module.exports = router;
