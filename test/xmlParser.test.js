const assert = require('assert');
const fs = require('fs');
const mocha = require('mocha');

const XmlParserService = require('../src/features/xmlParser/services/xmlParser.service');

mocha.describe('XML to JSON', () => {
  const xmlParserService = new XmlParserService();
  mocha.it('Should return correct json-string from another file', async () => {
    const file = await fs.createReadStream(
      '/Users/andrewstampede/Desktop/xml-to-json-converter/storage/test-example2.xml'
    );
    assert.equal(
      await xmlParserService.getXmlString(file),
      '[{"From":["JANE.DOE@gmail.com"],"Message":[{"_":"Great to hear. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ","script":["console.error(String.fromCharCode(72, 65, 67, 75, 69, 68))"]}]}]'
    );
  });
  mocha.it('Should return correct json-string from another file', async () => {
    const file = await fs.createReadStream(
      '/Users/andrewstampede/Desktop/xml-to-json-converter/storage/test-example.xml'
    );
    assert.equal(
      await xmlParserService.getXmlString(file),
      '[{"From":["Joe.doe@gmail.com"],"Message":["Hi Jane"]}]'
    );
  });
  mocha.it('Should return error', async () => {
    const file = await fs.createReadStream(
      '/Users/andrewstampede/Desktop/xml-to-json-converter/storage/test-example3.xml'
    );
    assert.deepEqual(
      await xmlParserService.getXmlString(file),
      new TypeError("Cannot read property 'FileDump' of undefined")
    );
  });
});
