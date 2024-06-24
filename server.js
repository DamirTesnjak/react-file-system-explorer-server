const GetDisksInfo = require('./middlewares/getDiskInfo');
const GetFolderContent = require('./middlewares/getFolderContent');
const CopyFile = require('./middlewares/copyFile');
const CopyFolder = require('./middlewares/copyFolder');
const MakeDir = require('./middlewares/createFolder');
const DeleteFolder = require('./middlewares/deleteFolder');
const RemoveFile = require('./middlewares/removeFile');
const MoveFolder = require('./middlewares/moveFolder');
const MoveFile = require('./middlewares/moveFile');
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

app.post('/copyFile', jsonParser, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  const err = CopyFile(oldPath, newPath);
  if (err) {
    next(err)
  } 
  res.send({});
})

app.post('/copyFolder', jsonParser, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  const err = CopyFolder(oldPath, newPath);
  if (err) {
    next(err)
  }
  res.send({})
})

app.post('/createFolder', jsonParser, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  const folderPath = req.body.folderPath;
  const err = MakeDir(folderPath);
  if (err) {
    next(err)
  } 
  res.send({})
})

app.post('/deleteFolder', jsonParser, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  const folderPath = req.body.path;
  const err = DeleteFolder(folderPath);
  if (err) {
    next(err)
  } 
  res.send({});
})

app.post('/moveFile', jsonParser, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  const err = MoveFile(oldPath, newPath);
  if (err) {
    next(err)
  } 
  res.send({});
})

app.post('/moveFolder', jsonParser, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  const err = MoveFolder(oldPath, newPath);
  if (err) {
    next(err)
  } 
  res.send({});
})

app.post('/removeFile', jsonParser, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  const path = req.body.path;
  const err = RemoveFile(path);
  if (err) {
    next(err)
  } 
  res.send({});
})

app.post('/rename', jsonParser, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  const oldPath = req.body.oldPath;
  const newPath = req.body.newPath;
  const err = Rename(oldPath, newPath);
  if (err) {
    next(err)
  } 
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
  const err = OpenFile(path);
  if (err) {
    next(err)
  } 
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