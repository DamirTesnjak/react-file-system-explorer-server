import fs from 'node:fs';

// HANDLES CREATION OF A NEE FOLDER
function MakeDir(folderPath) {
    try {
        if (!fs.existsSync(folderPath)) { // if folder does not exist
          fs.mkdirSync(folderPath);
        }
      } catch (err) {
        console.error(err);
      }
}

export default MakeDir;