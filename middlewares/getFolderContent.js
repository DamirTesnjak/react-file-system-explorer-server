const fs = require('node:fs');
const { permission } = require('node:process');

// READS THE CONTENT OF A FOLDER
function GetFolderContent(folderPath) {
    const folderContent = [];
    try {
        fileObjs = fs.readdirSync(folderPath, { withFileTypes: true, recursive: false });
        numOfItems = fileObjs.length;
        fileObjs.forEach((item) => {
          try {
              folderContent.push({ 
                  type: item.name.includes('.') ? 'file' : 'folder',
                  name: item.name,
                  parentPath: item.parentPath,
                  path: item.parentPath + item.name,
                  size: getItemStats(item.parentPath + item.name),
                  permission: true,
              });
          } catch (err) {
            folderContent.push({permission: false });
          }
        })
        return {
          folderContent,
          numOfItems,
        };
      } catch (err) {
        return {
          folderContent,
          numOfItems: 0,
        };
      }
}

function getItemStats(path) {
  try {
    const stats = fs.statSync(path);
    return stats.size;
  } catch {
    return 0
  }
}

module.exports = GetFolderContent;
