require('dotenv').config()
let CONFIG = {}

CONFIG.TYPEORM_CONNECTION =     process.env.TYPEORM_CONNECTION  // this isnt read by index.ts
CONFIG.TYPEORM_HOST =           process.env.TYPEORM_HOST
CONFIG.TYPEORM_USERNAME =       process.env.TYPEORM_USERNAME
CONFIG.TYPEORM_PASSWORD =       process.env.TYPEORM_PASSWORD
CONFIG.TYPEORM_DATABASE =       process.env.TYPEORM_DATABASE
CONFIG.TYPEORM_PORT =           process.env.TYPEORM_PORT        // this isnt read by index.ts
CONFIG.TYPEORM_SYNCHRONIZE =    process.env.TYPEORM_SYNCHRONIZE // this isnt read by index.ts
CONFIG.TYPEORM_LOGGING =        process.env.TYPEORM_LOGGING     // this isnt read by index.ts

export default CONFIG