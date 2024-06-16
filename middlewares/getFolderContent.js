const fs = require('node:fs');
const path = require('path');

// READS THE CONTENT OF A FOLDER
function GetFolderContent(folderPath) {
    const folderContent = [];
    try {
        fileObjs = fs.readdirSync(folderPath, { withFileTypes: true, recursive: false });
        numOfItems = fileObjs.length;
        fileObjs.forEach((item) => {
          try {
              const itemPath = (item.parentPath + "/" + item.name).replace('//', '/')
              const itemStats = fs.statSync(itemPath);
              const isFolder = itemStats.isDirectory();
              const isFile = itemStats.isFile();
              const isSymbolicLink = itemStats.isSymbolicLink()

              const extension = path.extname(itemPath);

              folderContent.push({ 
                  isFolder: extension === '' || isFolder,
                  isSymbolicLink: isSymbolicLink,
                  isFile: isFile,
                  name: item.name,
                  parentPath: item.parentPath.replace('//', '/'),
                  path: (item.parentPath + "/" + item.name).replace('//', '/'),
                  size: getItemStats(item.parentPath + item.name),
                  itemCounts: fs.readdirSync((item.parentPath + "/" + item.name).replace('//', '/'), { withFileTypes: true, recursive: false }).length,
                  permission: true,
              });
          } catch (err) {
            folderContent.push({
              isFile: true,
              name: item.name,
              path: (item.parentPath + "/" + item.name).replace('//', '/'),
              permission: false
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
