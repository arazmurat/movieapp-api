const mongoose = require("mongoose");
module.exports = () =>
{
    mongoose.connect(
        "mongodb+srv://dbUser:dbUserPass@mernmongodbcluster.hzy4d.mongodb.net/movieappdbEurope",
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
      
      
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.on('open', function() {  console.log("we're connected!");});
}