const ConfigJSONFileWriter = require('../../build/ConfigJSONFileWriter')

const test1 = () =>{
    let filePath = "./test_output/ConfigFileJSON_testFile1.json";
    let configWriter = new ConfigJSONFileWriter(filePath);
    configWriter.addKeyValueToJson("name", "play", filePath);
    configWriter.write();
}

const test2 = () =>{
    let filePath = "./test_output/ConfigFileJSON_testFile2.json";
    let configWriter = new ConfigJSONFileWriter(filePath,["name","home"]);
    configWriter.addKeyValueToJson("name", "play", filePath);
    configWriter.addKeyValueToJson("work", "value");
    configWriter.write();
}

test1();
test2();