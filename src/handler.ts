const serverless = require('serverless-http');
import bootstrap from './index';

// a little janky, but it works
let isCreated: boolean = false;
let handler: any;

export async function http(event: any, context: any) {

    if(!isCreated){
        handler = await serverless(await bootstrap());
        isCreated = true;
    }

    return await handler(event, context);
    
    // await boostrap
    // .then( async (app) => {
    //     const handler = serverless(app);
    //     return handler(event, context);
    // })
    // .catch((reject) => {
    //     console.log("BOOTSTRAP REJECTED")
    // });
}
