const fs = require('node:fs');

// HANDLES COPYING OF FOLDER
function CopyFolder(oldPath, newPath) {
  try {
    if (!fs.existsSync(newPath)) { // if path does not exist
      fs.cp(oldPath, newPath, { recursive: true }, (err) => {
        if (err) {
          console.error(err);
        }
      });
  }
  } catch (err) {
    return err;
  }
}

module.exports = CopyFolder;