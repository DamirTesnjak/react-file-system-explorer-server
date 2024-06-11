const fs = require('node:fs');

// HANDLES DELETION OF FILE
function RemoveFile(path) {
    fs.unlink(path, (err) => {
        if (err) {
            return err;
        }
    });
}

module.exports = RemoveFile;