import CONFIG from  './config'

module.exports = {
  "type": "mysql",
  "host": CONFIG.DATASOURCE_URL,
  "port": 3306,
  "username":CONFIG.DATASOURCE_USERNAME,
  "password":CONFIG.DATASOURCE_PASSWORD,
  "database": "utopia",
  "synchronize": false, // whether or not the orm try to create tables/columns
  "logging": false,
  "entities": ["src/entity/**/*.ts"],
  "migrations": ["/src/migration/**/*.ts"],
  "subscribers": ["/src/subscriber/**/*.ts"],
  "cli": {
    "entitiesDir":"src/entity",
    "migrationsDir":"/src/migration",
    "subscribersDir":"/src/subscriber"
  }
}