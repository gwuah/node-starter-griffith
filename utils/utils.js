const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

exports.connectToDatabase = function(url) {
  // this function creates a connection to the database
  mongoose.connect(url, { useNewUrlParser: true })
  // listen for all possible errors
  mongoose.connection.on('error', (e) => {
    console.log("There was an error, make sure mongodb is running.");
    console.log(e);
    process.exit();
  })
}