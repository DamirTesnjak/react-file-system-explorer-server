const CopyFolder = require('./copyFolder');
const DeleteFolder = require('./deleteFolder');

// HANDLES MOVING FOLDER
function MoveFolder(oldPath, newPath) {
    try {
          CopyFolder(oldPath, newPath);
          DeleteFolder(oldPath);
      } catch (err) {
        return err;
      }
}

module.exports = MoveFolder;