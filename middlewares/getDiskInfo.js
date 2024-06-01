import nodeDiskInfo from './dist/index';

// GETS INFO ON MOUNTED HARD DRIVES
function GetDisksInfo() {
    try {
        const disks = nodeDiskInfo.getDiskInfoSync();
        const diskList = [];
        disks.forEach((disk) => {
            disk.push({
                filesystem: disk.filesystem,
                blocks: disk.blocks,
                used: disk.used,
                available: disk.available,
                capacity: disk.capacity,
                mounted: disk.mounted,
            });
        });
        return diskList
    } catch (e) {
        console.error(e);
    }
}

export default GetDisksInfo;