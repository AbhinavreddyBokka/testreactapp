require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  if (!process.env.MESSAGE) {
    // If MESSAGE is missing, respond with an error or empty string
    return res.status(500).send('Missing MESSAGE env variable');
  }
  res.send(process.env.MESSAGE);
});

const port = process.env.PORT || 3000;

let server;
if (require.main === module) {
  server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = { app, server };
