const DatabaseService = require('../../common/services/database.service');

module.exports = class XmlParserRepository {
  constructor() {
    this.databaseService = new DatabaseService('converter');
    this.saveJsonToDatabase = this.saveJsonToDatabase.bind(this);
  }

  saveJsonToDatabase(json) {
    return this.databaseService.save(json);
  }
};
