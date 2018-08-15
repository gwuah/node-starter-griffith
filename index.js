const app = require('./app');
const utils = require('./utils/utils');
require('dotenv').config();

if (process.env.MODE == 'development') {
  utils.connectToDatabase(process.env.DEV_DB_URL)
} else {
  utils.connectToDatabase(process.env.PRODUCTION_DB_URL)
}

const server = app.listen(process.env.PORT, () => {
  console.log(`Watcher serving on port ${process.env.PORT}`)
});


module.exports = server;