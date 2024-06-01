const GetDisksInfo = require('./middlewares/getDiskInfo');
const GetFolderContent = require('./middlewares/getFolderContent');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const jsonParser = bodyParser.json();
const port = 3000;

app.post('/getFolder', jsonParser, (req, res) => {
  console.log('req', req.body);
  const folderPath = req.body.folderPath;
  const folderContent = GetFolderContent(folderPath);
  res.send({ folderContent })
})

app.post('/getHardDrives', (req, res) => {
  const hardDrives = GetDisksInfo()
  res.send({ hardDrives });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})