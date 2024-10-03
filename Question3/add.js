const fs = require('fs');

const addLogs = () => {
    const dirName = './Log'
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
    }
    process.chdir(dirName);

    for (let i = 0; i < 10; i++) {
        const filename = `log${i + 1}.txt`;
        console.log(`Creating file: ${filename}`);
        fs.writeFileSync(filename, `This is log file ${i + 1}`);
    }
}

addLogs()