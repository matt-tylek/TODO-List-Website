// server/index.js
const path = require('path');

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('/static', (req, res) => {
  console.log("sending ", req.url)
  res.sendFile(req.url)
})
app.get('*', (req, res) => {
  console.log("sending index.html for request", req.url)
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});