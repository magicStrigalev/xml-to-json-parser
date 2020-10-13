const express = require('express');

const XmlParserController = require('../controllers/xmlParser.controller');

const router = express.Router();

const xmlParserController = new XmlParserController();

router.get('/parse', xmlParserController.parseXmlToJson);

module.exports = router;
