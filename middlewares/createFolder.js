const fs = require('node:fs');

// HANDLES CREATION OF A MEW FOLDER
function MakeDir(folderPath) {
    try {
        if (!fs.existsSync(folderPath)) { // if folder does not exist
          fs.mkdirSync(folderPath);
        }
      } catch (err) {
        return err;
      }
}

module.exports = MakeDir;