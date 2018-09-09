const ConfigJSONWriter = require('../../build/ConfigJSONWriter')

const test = () =>{
    let configWriter = new ConfigJSONWriter();
    let json = {name: 'play'};
    let filePath = "./test_output/testFile.json";
    configWriter.addKeyValueTo("name", "play", filePath);
}

test()