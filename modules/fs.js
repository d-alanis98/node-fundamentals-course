const fs = require('fs');


const readFile = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (error, data) => {
            if(error)
                reject(error);
            resolve(data.toString());
        });
    })

}

const writeFile = async (path, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, error => {
            if(error)
                reject('There was an error');
            resolve();
        })
    })

}

const getContentToWrite = currentFileData => `${currentFileData} \nNode JS fundamentals Platzi course exercises and project` 


const writeToREADME = async () => {
    const filePath = '../README.md';
    const fileContent = await readFile(filePath);
    const contentToWrite = getContentToWrite(fileContent);
    await writeFile(filePath, contentToWrite);
    console.log('Content added successfully');
}


(function(){
    console.log('Writing to README.md file');
    writeToREADME();
}());




