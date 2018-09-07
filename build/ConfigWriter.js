'use strict';

//Main Class
const fs = require('fs');

class ConfigWriter {
    constructor() {
        this.writeJSONTo = (json, filePath) => {
            fs.writeFileSync(filePath, JSON.stringify(json), 'utf8');
        };
    }

}

module.exports = ConfigWriter;