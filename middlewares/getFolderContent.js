const fs = require('node:fs');
const { permission } = require('node:process');

// READS THE CONTENT OF A FOLDER
function GetFolderContent(folderPath) {
    const folderContent = [];
    try {
        fileObjs = fs.readdirSync(folderPath, { withFileTypes: true, recursive: false });
        fileObjs.forEach((item) => {
          try {
              folderContent.push({ 
                [!item.name.includes(".") ? 'folder' : 'file']: item, 
                permission: true,
              });
          } catch (err) {
            folderContent.push({[!item.name.includes(".") ? 'folder' : 'file']: [], permission: false });
          }
        })
        return folderContent;
      } catch (err) {
        return folderContent;
      }
}

module.exports = GetFolderContent;
