const getRawBody = require('raw-body');
const xml2js = require('xml2js');

const XmlParserRepository = require('../repositories/xmlParser.repository');

module.exports = class XmlParserService {
  constructor() {
    this.parser = new xml2js.Parser();
    this.getXmlString = this.getXmlString.bind(this);
    this.xmlParserRepository = new XmlParserRepository();
  }

  async getXmlString(file) {
    const buffer = await getRawBody(file);
    const bufferString = buffer.toString('utf8');
    return this.parseXmlToJson(bufferString).catch((err) => {
      console.log(err);
      return err;
    });
  }

  async parseXmlToJson(xmlString) {
    const result = await this.parser
      .parseStringPromise(xmlString)
      .then((res) => res)
      .catch((err) => console.log(err));
    return this.xmlParserRepository.saveJsonToDatabase(
      JSON.stringify(result.FileDump.Message)
    );
  }
};
