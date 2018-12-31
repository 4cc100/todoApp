const db = require('../models/index');

exports.getTodos = (req, res) => {
  db.Todo.find()
    .then((todos) => {
      res.json(todos)
    })
    .catch((err) => {
      res.send(`The following error occured: ${err}`);
    });
};

exports.createTodo = (req, res) => {
  db.Todo.create(req.body)
  .then((newTodo) => {
    res.status(201).json(newTodo);
  })
  .catch((err) => {
    res.send(`The following error occured: ${err}`);
  });
}

exports.getTodo = (req, res) => {
  db.Todo.findById(req.params.todoId)
  .then((foundTodo) => {
    res.json(foundTodo);
  })
  .catch((err) => {
    res.send(`The following error occured: ${err}`);
  });
}

exports.updateTodo = (req, res) => {
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then((todo) => {
    res.json(todo);
  })
  .catch((err) => {
    res.send(`The following error occured: ${err}`);
  });
}

exports.removeTodo = (req, res) => {
  db.Todo.remove({_id: req.params.todoId})
  .then(()=> {
    res.json({message: 'We deleted it'});
  })
  .catch((err) => {
    res.send(`The following error occured: ${err}`);
  });
}

module.exports = exports;
