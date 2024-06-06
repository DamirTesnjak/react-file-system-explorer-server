const fs = require('node:fs');

// DELETES A FOLDER WITH ITS CONTENT
function DeleteFolder(path) {
    fs.rm(path, { recursive: true, force: true }, err => {
        if (err) {
          throw err;
        }
        console.log(`${path} is deleted!`);
    });
};

module.exports = DeleteFolder;