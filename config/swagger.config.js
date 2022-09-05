const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Simple NodeJS CRUD",
            version: "1.0.0",
            description: "Simple NodeJS CRUD Web Application With Views",
            license: "",
            contact: {
                name: "MouMohsen",
                url: "https://www.linkedin.com/in/muhammedmohsen/"
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./specs/user.specs.js"],
};

const swaggerSpecs = swaggerJsdoc(options)

exports.swaggerSpecs = swaggerSpecs
exports.swaggerUi = swaggerUi