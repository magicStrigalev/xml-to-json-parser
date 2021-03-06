const fs = require('fs');

const XmlParserService = require('../services/xmlParser.service');

module.exports = class XmlParserController {
  constructor() {
    this.xmlParserService = new XmlParserService();
    this.parseXmlToJson = this.parseXmlToJson.bind(this);
  }

  async parseXmlToJson() {
    const path = process.env.FILE_PATH;
    const file = await fs.createReadStream(path);
    return this.xmlParserService.getXmlString(file);
  }
};
