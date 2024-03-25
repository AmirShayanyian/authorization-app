const mongoose = require('mongoose');

const dbConnection = async (db_url) => {
    console.log('Connected to database');
  await mongoose.connect(db_url);
};

module.exports = dbConnection;
