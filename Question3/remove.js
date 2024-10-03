const fs = require('fs');
const path = require('path');

const removeLogs = () => {
  const dirName = './Log'; 

  if (fs.existsSync(dirName)) {
    try {
      const files = fs.readdirSync(dirName); 

      files.forEach(file => {
        const filePath = path.join(dirName, file);
        console.log(`Deleting file: ${filePath}`);
        fs.unlinkSync(filePath); 
      });

      console.log(`Removing directory: ${dirName}`);
      fs.rmdirSync(dirName); 
    } catch (err) {
      console.error(`Error removing logs: ${err.message}`);
    }
  } else {
    console.log(`Directory "${dirName}" does not exist.`);
  }
};

removeLogs();
