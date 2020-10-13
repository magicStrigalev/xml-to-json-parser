module.exports = class DatabaseService {
  constructor(model) {
    this.model = model;
  }

  save(payload) {
    console.log(payload);
    return payload;
    // return this.model.save(payload);
  }

  delete(payload) {
    return this.model.delete(payload);
  }
};
