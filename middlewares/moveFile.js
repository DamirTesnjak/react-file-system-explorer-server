import CopyFile from './copyFile';
import RemoveFile from './removeFile';

// HANDLES MOVING OF FILE
function MoveFile(oldPath, newPath) {
    try {
        if (!fs.existsSync(newPath)) {
          CopyFile(oldPath, newPath);
          RemoveFile(oldPath);
        }
      } catch (err) {
        console.error(err);
      }
}

export default MoveFile;