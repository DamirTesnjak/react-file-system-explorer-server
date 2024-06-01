import fs from 'node:fs';

// DELETES A FOLDER WITH ITS CONTENT
function DeleteFolder(folderPath) {
    fs.rm(folderPath, { recursive: true, force: true }, err => {
        if (err) {
          throw err;
        }
        console.log(`${folderPath} is deleted!`);
    });
};

export default DeleteFolder;