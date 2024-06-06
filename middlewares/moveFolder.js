const CopyFolder = require('./copyFolder');
const DeleteFolder = require('./deleteFolder');

// HANDLES MOVING FOLDER
function MoveFolder(oldPath, newPath) {
    try {
        if (!fs.existsSync(newPath)) {
          CopyFolder(oldPath, newPath);
          DeleteFolder(oldPath);
        }
      } catch (err) {
        console.error(err);
      }
}

module.exports = MoveFolder;