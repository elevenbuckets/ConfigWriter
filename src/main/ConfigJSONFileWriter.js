//Main Class
const fs = require('fs')
const mkdirp = require('mkdirp')

class ConfigJSONWriter {
    constructor(filePath, allowedFields) {
        this.filePath = filePath;
        this.allowedFields = allowedFields;
        this.json = {};
    }

    // Write a Json object as String to a file. If the file does not exist, it will be created. 
    // If the file exists, it will be overwritten.
    writeJSON = (json) => {
        let allowdJson = {
        }
        let dir = this.filePath.substring(0, this.filePath.lastIndexOf("/"));
        if(!fs.existsSync(dir)){
            mkdirp.sync(dir);
        }
        Object.keys(json).map(key => {
            if ((!this.allowedFields) || this.allowedFields.includes(key)) {
                allowdJson[key] = json[key];
            }
        })

        fs.writeFileSync(this.filePath, JSON.stringify(allowdJson), 'utf8')
    }

    // Add a key vaule pair to a config json file. If the file does not exist, it will be created. 
    // If the key exists, it will be overwritten.
    addKeyValue = (key, value) => {
        if ((this.allowedFields) || (!this.allowedFields.includes(key))) {
            return false;
        }
        if (!fs.existsSync(this.filePath)) {
            this.initFile();
        }
        let jsonString = fs.readFileSync(this.filePath);
        let json = JSON.parse(jsonString);
        json[key] = value;
        this.writeJSON(json, this.filePath);

    }

    // Add a key vaule pair to a config json.
    // If the key exists, it will be overwritten.
    addKeyValueToJson = (key, value) => {
        if ((this.allowedFields) && (!this.allowedFields.includes(key))) {
            return false;
        }
        this.json[key] = value;
    }

    write = () =>{
        this.writeJSON(this.json);
    }

    // Create a file with empty json
    initFile = () => {
        let json = {};
        this.writeJSON(json)
    }

}

module.exports = ConfigJSONWriter
