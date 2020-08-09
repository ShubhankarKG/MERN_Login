const express = require("express");
const passport = require("passport");
const cors = require("cors");
const morgan = require("morgan");
const users = require("./routes/api/user.route");
const { dbConnect } = require("./dbconnect");

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))
// Initialize DB
dbConnect();

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
