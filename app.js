const express = require('express');
const notFoundError = require('./middlewares/NotFoundError');
const errorHandler = require('./middlewares/ErrorHandler');
const { allRoutes } = require('./routers/index.routes');
const dbConnection = require('./utils/db');
require('dotenv').config();

const app = express();
dbConnection(process.env.DB_URL);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(allRoutes);
app.use(notFoundError);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
