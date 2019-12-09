# Nodejs, Typescript, TypeORM, Express, and Serverless

Steps to run this project:

1. Make a `.env` file to setup database settings in the project directory (view config.js for required variables)
2. Edit serverless.yml and set the region to your desired
3. Run `npm i` command
4. Run `sls deploy` command
5. To get the name of the function, run `sls deploy list functions`
6. You can view logs with `sls logs -f <functionName> -r <aws-region-n>`
