const { execSync } = require('child_process'); 

// HANDLES CREATION OF A NEw FOLDER
function OpenFile(path) {
  try {
    execSync(`"${path}"`, {timeout: 5000 })
} catch (error) {
    return { 
        data:   null, 
        err:    error.stderr.toString(), 
        stderr: error.stderr.toString() 
    }
  }
}

module.exports = OpenFile;