import { unlink } from 'node:fs';

// HANDLES DELETION OF FILE
function RemoveFile(path) {
    unlink(path, (err) => {
        if (err) throw err;
            console.log(path + 'was deleted');
    });
}

export default RemoveFile;