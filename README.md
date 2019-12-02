# Nodejs, Typescript, TypeORM, Express, and Serverless

Steps to run this project:

1. Make a `.env` file to setup database settings in the project directory (view config.js for required variables)
2. Run `npm i` command
3. Run `sls deploy` command
4. To get the name of the function, run `sls deploy list functions`
5. You can view logs with `sls logs -f <functionName> -r <aws-region-n>`