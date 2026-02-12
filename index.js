const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'hello from app K8s' });
});

app.listen(PORT, () => {
  console.log(`App 4 listening on port ${PORT}`);
});
