const express = require('express');
const notFoundError = require('./middlewares/NotFoundError');
const errorHandler = require('./middlewares/ErrorHandler');
require('dotenv').config();
const app = express();

app.use(notFoundError);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
