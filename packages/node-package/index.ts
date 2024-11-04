import express from 'express';

const app = express();

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Node!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});