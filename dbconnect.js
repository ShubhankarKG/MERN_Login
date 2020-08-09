const mongoose = require("mongoose");
const keys = require("./config/keys");

const dbConnect = () => {
  // DB Config
  const db = keys.mongoURI;
  // Connect to MongoDB
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => console.log(err));
};

module.exports = {
  dbConnect,
};
