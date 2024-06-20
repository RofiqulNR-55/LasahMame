const db = require('../config/db');

const Notes = {
  getAll: (callback) => {
    const query = 'SELECT * FROM notes';
    db.query(query, callback);
  },

  getById: (id, callback) => {
    const query = 'SELECT * FROM notes WHERE id = ?';
    db.query(query, [id], callback);
  },

  create: (note, callback) => {
    const query = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
    db.query(query, [note.title, note.datetime, note.note], callback);
  },

  update: (id, note, callback) => {
    const query = 'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?';
    db.query(query, [note.title, note.datetime, note.note, id], callback);
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM notes WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Notes;
