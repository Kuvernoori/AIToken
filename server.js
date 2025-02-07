const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Модели (можно заменить на базу данных)
let models = [];

// API для получения моделей
app.get('/api/getModels', (req, res) => {
  res.json(models);
});

// API для создания новой модели
app.post('/api/createModel', (req, res) => {
  const { name, description, price, url, seller } = req.body;  // Получаем данные из тела запроса

  // Проверка наличия всех обязательных полей
  if (!name || !description || !price || !url || !seller) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newModel = {
    name,
    description,
    price,
    seller,
    url, // Сохраняем URL модели
  };

  models.push(newModel);
  res.status(201).json(newModel);  // Отправляем модель в ответ
});

// Централизованный обработчик ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});