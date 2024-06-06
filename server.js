const GetDisksInfo = require('./middlewares/getDiskInfo');
const GetFolderContent = require('./middlewares/getFolderContent');
const CopyFile = require('./middlewares/copyFile');
const CopyFolder = require('./middlewares/copyFolder');
const MakeDir = require('./middlewares/createFolder');
const DeleteFolder = require('./middlewares/deleteFolder');
const RemoveFile = require('./middlewares/removeFile');
const MoveFolder = require('./middlewares/moveFolder');
const Rename = require('./middlewares/rename');
const OpenFile = require('./middlewares/openFile');

const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');

const app = express();
const jsonParser = bodyParser.json();
const port = 8080;

app.post('/getUserHomeFolder', jsonParser, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({ homeFolder: os.homedir() });
})

app.post('/copyFile', jsonParser, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  CopyFile(oldPath, newPath);
  res.send({});
})

app.post('/copyFolder', jsonParser, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  CopyFolder(oldPath, newPath);
  res.send({})
})

app.post('/createFolder', jsonParser, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const folderPath = req.body.folderPath;
  MakeDir(folderPath);
  res.send({})
})

app.post('/deleteFolder', jsonParser, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const folderPath = req.body.path;
  DeleteFolder(folderPath);
  res.send({});
})

app.post('/moveFile', jsonParser, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  MoveFile(oldPath, newPath);
  res.send({});
})

app.post('/moveFolder', jsonParser, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  MoveFolder(oldPath, newPath);
  res.send({});
})

app.post('/removeFile', jsonParser, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const path = req.body.path;
  RemoveFile(path);
  res.send({});
})

app.post('/rename', jsonParser, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  Rename(oldPath, newPath);
  res.send({})
})

app.post('/getFolder', jsonParser, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const folderPath = req.body.folderPath;
  const folderContent = GetFolderContent(folderPath);
  res.send(folderContent)
})

app.post('/openFile', jsonParser, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const path = req.body.path;
  OpenFile(path);
  res.send({})
})

app.post('/getHardDrives', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const hardDrives = GetDisksInfo()
  res.send({ hardDrives });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})