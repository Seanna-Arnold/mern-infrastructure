const Note = require('../../models/note');

module.exports = {
  index,
  show,
  create
};

async function index(req, res) {
  console.log("getting all notes")
    try {
      const notes = await Note.find({});
      console.log(notes)
      // notes.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
      res.json(notes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

async function show(req, res) {
  const note = await Note.findById(req.params.id);
  res.json(note);
}

async function create(req, res) {
    try {
      req.body.user = req.user;
      const note = await Note.create(req.body);
      res.json(note);
    } catch (err) {
      res.status(400).json(err);
    }
  }