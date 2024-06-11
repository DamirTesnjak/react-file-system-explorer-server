const fs = require('node:fs');

// HANDLES COPYING OF FILE
function CopyFile(oldPath, newPath) {
    try {
        if (!fs.existsSync(newPath)) {
            fs.copyFileSync(oldPath, newPath, fs.constants.COPYFILE_EXCL);
        }
    } catch (err) {
        return err;
    }
}

module.exports = CopyFile;