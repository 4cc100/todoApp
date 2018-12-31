const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/', (req, res) => {
  db.Todo.find()
    .then((todos) => {
      res.json(todos)
    })
    .catch((err) => {
      res.send(`The following error occured: ${err}`);
    });
});

router.post('/', (req, res) => {
  db.Todo.create(req.body)
  .then((newTodo) => {
    res.status(201).json(newTodo);
  })
  .catch((err) => {
    res.send(`The following error occured: ${err}`);
  });
});

router.get('/:todoId', (req, res) => {
  db.Todo.findById(req.params.todoId)
  .then((foundTodo) => {
    res.json(foundTodo);
  })
  .catch((err) => {
    res.send(`The following error occured: ${err}`);
  });
});

router.put('/:todoId', (req, res) => {
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then((todo) => {
    res.json(todo);
  })
  .catch((err) => {
    res.send(`The following error occured: ${err}`);
  });
});

module.exports = router;