import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Aquisitions Service!');
});

export default app;
