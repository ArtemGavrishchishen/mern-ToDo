const { Router } = require("express");
const Note = require("../models/Note");
const auth = require("../middleware/auth.middleware");

const router = Router();

//=== get all notes
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ owner: req.user.userId });
    res.json(notes);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

//=== add new note
router.post("/", auth, async (req, res) => {
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

//=== delete note by id
router.delete("/", auth, async (req, res) => {
  try {
    const { id } = req.body;
    const note = await Note.findById(id);
    await note.remove();
    res.status(200).json(id);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

//===   /note/update
router.put("/", auth, async (req, res) => {
  try {
    const {
      note: { id, title, content }
    } = req.body;
    const updateAt = new Date();

    const note = await Note.findOneAndUpdate(
      { id },
      { title, content, updateAt },
      { new: true }
    );

    res.status(201).json({ note });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = router;
