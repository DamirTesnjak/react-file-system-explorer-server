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

const app = express();
const jsonParser = bodyParser.json();
const port = 3000;

app.post('/copyFile', jsonParser, (req, res) => {
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  CopyFile(oldPath, newPath);
  res.send({});
})

app.post('/copyFolder', jsonParser, (req, res) => {
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  CopyFolder(oldPath, newPath);
  res.send({})
})

app.post('/createFolder', jsonParser, (req, res) => {
  const folderPath = req.body.folderPath;
  MakeDir(folderPath);
  res.send({})
})

app.post('/deleteFolder', jsonParser, (req, res) => {
  console.log('req', req.body);
  const folderPath = req.body.path;
  DeleteFolder(folderPath);
  res.send({});
})

app.post('/moveFile', jsonParser, (req, res) => {
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  MoveFile(oldPath, newPath);
  res.send({});
})

app.post('/moveFolder', jsonParser, (req, res) => {
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  MoveFolder(oldPath, newPath);
  res.send({});
})

app.post('/removeFile', jsonParser, (req, res) => {
  console.log('req', req.body);
  const path = req.body.path;
  RemoveFile(path);
  res.send({});
})

app.post('/rename', jsonParser, (req, res) => {
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  Rename(oldPath, newPath);
  res.send({})
})

app.post('/getFolder', jsonParser, (req, res) => {
  console.log('req', req.body);
  const folderPath = req.body.folderPath;
  const folderContent = GetFolderContent(folderPath);
  res.send(folderContent)
})

app.post('/openFile', jsonParser, (req, res) => {
  console.log('req', req.body);
  const path = req.body.path;
  OpenFile(path);
  res.send({})
})

app.post('/getHardDrives', (req, res) => {
  const hardDrives = GetDisksInfo()
  res.send({ hardDrives });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})