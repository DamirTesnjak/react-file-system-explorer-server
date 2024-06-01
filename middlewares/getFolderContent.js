import fs from 'node:fs';

// READS THE CONTENT OF A FOLDER
function GetFolderContent(folderPath) {
    try {
        fileObjs = fs.readdirSync(folderPath, { withFileTypes: true }); 
        return fileObjs;
      } catch (err) {
        console.error(err);
      }
}

export default GetFolderContent
