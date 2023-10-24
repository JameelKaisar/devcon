var express = require('express');
const { exec } = require('child_process');

var app = express();

app.get('/', (req, res) => {
  const command = 'tmux --version';
  exec(command, (error, stdout, stderr) => {
    res.status(200).send(`Command Output:\n${ stdout ? stdout : stderr }`);
  });
});

app.listen(3000, () => {
  console.log('Sample express app listening on port 3000!');
});
