const fs = require('node:fs');

// HANDLES CREATION OF A MEW FOLDER
function MakeDir(folderPath) {
    try {
        if (!fs.existsSync(folderPath)) { // if folder does not exist
          fs.mkdirSync(folderPath);
        }
      } catch (err) {
        console.error(err);
      }
}

module.exports = MakeDir;