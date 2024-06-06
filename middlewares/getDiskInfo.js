const nodeDiskInfo = require('node-disk-info');

// GETS INFO ON MOUNTED HARD DRIVES
function GetDisksInfo() {
    try {
        const disks = nodeDiskInfo.getDiskInfoSync();
        const diskList = [];
        disks.forEach((disk) => {
            diskList.push({
                filesystem: disk.filesystem,
                blocks: disk.blocks,
                used: disk.used,
                available: disk.available,
                capacity: disk.capacity,
                mounted: disk.mounted,
                type: 'disk',
            });
        });
        return diskList
    } catch (e) {
        console.error(e);
    }
}

module.exports = GetDisksInfo;