//Main Class
const fs = require('fs')

class ConfigJSONWriter {
    constructor() {

    }


    // Write a Json object as String to a file. If the file does not exist, it will be created. 
    // If the file exists, it will be overwritten.
    writeJSONTo = (json, filePath) => {
        fs.writeFileSync(filePath, JSON.stringify(json), 'utf8')
    }

    // Add a key vaule pair to a config json file. If the file does not exist, it will be created. 
    // If the key exists, it will be overwritten.
    addKeyValueTo = (key, value, filePath) => {
        if (!fs.exists(filePath)) {
            this.initFile(filePath);
        }
        let jsonString = fs.readFileSync(filePath);
        let json = JSON.parse(jsonString);
        json[key] = value;
        this.writeJSONTo(json, filePath);

    }

    // Create a file with empty json
    initFile = (filePath) => {
        let json = {};
        this.writeJSONTo(json, filePath)
    }

}

module.exports = ConfigJSONWriter