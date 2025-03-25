const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

// 몽고 연결
mongoose.connect('mongodb://mongo:27017/todos')
  .then(() => console.log('✅ MongoDB 연결 성공!'))
  .catch(err => console.error('❌ MongoDB 연결 실패:', err));

// 모델 정의
const Todo = mongoose.model('Todo', { text: String });

// GET /todos
app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST /todos
app.post('/todos', async (req, res) => {
  const todo = new Todo({ text: req.body.text });
  await todo.save();
  res.status(201).json(todo);
});

// 서버 시작
app.listen(port, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${port}`);
});

// 수정 기능
app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const updated = await Todo.findByIdAndUpdate(id, { text: req.body.text }, { new: true });
      if (updated) {
        res.json(updated);
      } else {
        res.status(404).json({ error: '수정할 항목을 찾을 수 없어요!' });
      }
    } catch (err) {
      res.status(500).json({ error: '서버 에러', details: err.message });
    }
  });
  
  // 삭제 기능
  app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await Todo.findByIdAndDelete(id);
      if (deleted) {
        res.json({ message: '삭제 완료!' });
      } else {
        res.status(404).json({ error: '삭제할 항목을 찾을 수 없어요!' });
      }
    } catch (err) {
      res.status(500).json({ error: '서버 에러', details: err.message });
    }
  });
  