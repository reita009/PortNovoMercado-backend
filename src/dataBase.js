const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "lira0509",
    database: "portfolio",
  },
});

module.exports = knex;
