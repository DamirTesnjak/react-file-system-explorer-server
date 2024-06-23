const fs = require('node:fs');
const path = require('path');

// READS THE CONTENT OF A FOLDER
function GetFolderContent(folderPath) {
    const folderContent = [];
    try {
        fileObjs = fs.readdirSync(folderPath, { withFileTypes: false, recursive: false });
        numOfItems = fileObjs.length;
        fileObjs.forEach((item) => {
          try {
              const itemPath = (folderPath + "/" + item).replace('//', '/');
              const itemStats = fs.statSync(itemPath);
              const isFolder = itemStats.isDirectory();
              const isFile = itemStats.isFile();
              const isSymbolicLink = itemStats.isSymbolicLink()

              const extension = path.extname(itemPath);

              folderContent.push({ 
                  isFolder: extension === '' || isFolder,
                  isSymbolicLink: isSymbolicLink,
                  isFile: isFile,
                  name: item,
                  parentPath: folderPath,
                  path: itemPath,
                  size: getItemStats(itemPath),
                  permission: true,
              });
          } catch (err) {
            folderContent.push({
              isFolder: false,
              isSymbolicLink: false,
              isFile: false,
              name: item,
              parentPath: folderPath,
              path: err.path.replace('\\', '/'),
              permission: false,
            });
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
