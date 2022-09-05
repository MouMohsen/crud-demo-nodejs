require('dotenv').config()

const express = require("express")
const app = express()
const port = process.env.PORT
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./config/db.config');
require('./routes/user.routes.js')(app);

app.get('/', (req, res) => {
    res.send('hello world')
})


//swagger setup
const {swaggerUi, swaggerSpecs} = require('./config/swagger.config');

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, { explorer: true })
);

module.exports = app.listen(port, () => {
    console.log(`[Server Established]: Your genie is ready, and ready to serve at http://localhost:${port}`);
})