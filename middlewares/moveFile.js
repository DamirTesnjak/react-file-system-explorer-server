const CopyFile = require('./copyFile');
const RemoveFile = require('./removeFile');

// HANDLES MOVING OF FILE
function MoveFile(oldPath, newPath) {
    try {
        CopyFile(oldPath, newPath);
        RemoveFile(oldPath);
      } catch (err) {
        return err;
      }
}

module.exports = MoveFile;