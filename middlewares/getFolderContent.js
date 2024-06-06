const fs = require('node:fs');

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
                  parentPath: item.parentPath.replace('//', '/'),
                  path: (item.parentPath + "/" + item.name).replace('//', '/'),
                  size: getItemStats(item.parentPath + item.name),
                  itemCounts: fs.readdirSync((item.parentPath + "/" + item.name).replace('//', '/'), { withFileTypes: true, recursive: false }).length,
                  permission: true,
              });
          } catch (err) {
            folderContent.push({
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
