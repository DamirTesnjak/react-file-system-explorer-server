const fs = require('node:fs');

// RENAMES A FOLDER OR A FILE
function Rename(pathOld, pathNew) {
  if (!fs.existsSync(pathNew)) {
    fs.rename(pathOld, pathNew, err => {
      if (err) {
        return err;
      }
      // done
    });
  }
}

module.exports = Rename;