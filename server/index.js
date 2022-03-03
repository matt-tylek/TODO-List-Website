// server/index.js
const path = require('path');

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
//app.use(express.static(path.join(__dirname, './../build')));

app.get('*', (req, res) => {
  const p = path.resolve(__dirname, '../client/build', req.url)
  console.log("Sending", p, "for request ", req.url)
  res.sendFile(p)
  //res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});