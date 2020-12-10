const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// config
app.use(cors());
app.use(express.json());

// Routes

// create todo

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1)',
      [description]
    );

    res.json(newTodo);
  } catch (err) {
    console.log(err.message);
  }
});

// get all todo

// get a todo

// update todo

// delete a todo

app.listen(5000, () => {
  console.log('server has started on port 5000');
});