const ConfigWriter = require('../../build/ConfigWriter')

const test = () =>{
    let configWriter = new ConfigWriter();
    let json = {name: 'play'};
    let filePath = "./testFile";
    configWriter.writeJSONTo(json, filePath);
}

test()