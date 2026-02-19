import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 테스트 API
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running!' });
});

// 예시 API
app.get('/api/messages', (req, res) => {
  res.json({
    messages: [
      { id: 1, text: '첫 번째 메시지' },
      { id: 2, text: '두 번째 메시지' },
      { id: 3, text: '세 번째 메시지' },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
