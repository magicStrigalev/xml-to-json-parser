const DatabaseService = require('../../common/services/database.service');

module.exports = class XmlParserRepository extends DatabaseService {
  constructor() {
    super('converter');
    this.saveJsonToDatabase = this.saveJsonToDatabase.bind(this);
  }

  saveJsonToDatabase(json) {
    return this.save(json);
  }
};
