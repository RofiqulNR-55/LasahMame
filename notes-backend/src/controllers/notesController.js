const Notes = require('../models/notesModel');

const getAllNotes = (req, res) => {
  Notes.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json(results);
  });
};

const getNoteById = (req, res) => {
  const id = req.params.id;
  Notes.getById(id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(results[0]);
  });
};

const createNote = (req, res) => {
  const note = {
    title: req.body.title,
    datetime: req.body.datetime,
    note: req.body.note,
  };
  Notes.create(note, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(201).json({ id: results.insertId, ...note });
  });
};

const updateNote = (req, res) => {
  const id = req.params.id;
  const note = {
    title: req.body.title,
    datetime: req.body.datetime,
    note: req.body.note,
  };
  Notes.update(id, note, (err) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Note updated successfully' });
  });
};

const deleteNote = (req, res) => {
  const id = req.params.id;
  Notes.delete(id, (err) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Note deleted successfully' });
  });
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
