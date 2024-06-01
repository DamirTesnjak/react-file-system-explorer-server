import execFile from 'node:child_process';

// HANDLES CREATION OF A NEw FOLDER
function RunExecFile(path) {
  execFile(path, (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });
}

export default RunExecFile;