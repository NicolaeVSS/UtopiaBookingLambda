const process = require('process');
const host = process.env.SPRING_DATASOURCE_URL;
const username = process.env.SPRING_DATASOURCE_USERNAME;
const password = process.env.SPRING_DATASOURCE_PASSWORD;

module.exports = {
  "type": "mysql",
  "host": host,
  "port": 3306,
  username,
  password,
  "database": "utopiaORM",
  "synchronize": false,
  "logging": false,
  "dateStrings": true,
  "entities": ["src/entity/**/*.ts"],
  "migrations": ["/src/migration/**/*.ts"],
  "subscribers": ["/src/subscriber/**/*.ts"],
  "cli": {
    "entitiesDir":"src/entity",
    "migrationsDir":"/src/migration",
    "subscribersDir":"/src/subscriber"
  }
}