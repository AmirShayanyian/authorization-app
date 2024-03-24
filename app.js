const express = require('express');
const notFoundError = require('./middlewares/NotFoundError');
require('dotenv').config();
const app = express();

app.use(notFoundError);
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
