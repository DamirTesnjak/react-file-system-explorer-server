import CopyFolder from './copyFolder';
import DeleteFolder from './deleteFolder';

// HANDLES MOVING FOLDER
function MoveFolder(oldPath, newPath) {
    try {
        if (!fs.existsSync(newPath)) {
          CopyFolder(oldPath, newPath);
          DeleteFolder(oldPath);
        }
      } catch (err) {
        console.error(err);
      }
}

export default MoveFolder;