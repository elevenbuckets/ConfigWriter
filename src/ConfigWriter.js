//Main Class
const fs = require('fs')

class ConfigWriter{
    constructor(){

    }

    writeJSONTo = (json, filePath) =>{
        fs.writeFileSync(filePath, JSON.stringify(json), 'utf8')
    }

}

module.exports = ConfigWriter