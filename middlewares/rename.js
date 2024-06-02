const fs = require('node:fs');

// RENAMES A FOLDER OR A FILE
function Rename(pathOld, pathNew) {
  if (!fs.existsSync(pathNew)) {
    fs.rename(pathOld, pathNew, err => {
      if (err) {
        console.error(err);
      }
      // done
    });
  }
}

module.exports = Rename;