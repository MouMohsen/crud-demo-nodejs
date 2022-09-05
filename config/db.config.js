const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
  } = process.env;

const uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`

// Declare a variable named option and assign optional settings
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose
    .connect(uri, options)
    .then(() => {
        console.log("[Database Established] : I'm keeping all of your dark secrets now");
    },
        err => console.log("Error connecting Database instance due to:", err)
    )

module.exports = mongoose;