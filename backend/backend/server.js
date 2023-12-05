import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();


const app = express();
const PORT = 3000;

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Definir un modelo simple
const Todo = mongoose.model('Todo', { text: String });

// Middleware para procesar el cuerpo de la solicitud
app.use(express.json());

// Rutas CRUD
app.post('/api/todos', async (req, res) => {
  const { text } = req.body;
  const todo = new Todo({ text });
  await todo.save();
  res.json(todo);
});

app.get('/api/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.put('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const todo = await Todo.findByIdAndUpdate(id, { text }, { new: true });
  res.json(todo);
});

app.delete('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: 'Todo deleted successfully' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
