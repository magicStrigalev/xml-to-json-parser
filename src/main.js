const express = require('express');

const router = require('./features/xmlParser/routes/xmlParser.routes');

const app = express();
const port = 5000;

app.use(router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
