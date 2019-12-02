# Nodejs, TypeORM, Express, Serverless

Steps to run this project:

1. Make a `.env` file to setup database settings in the top level directory
2. Run `npm i` command
3. Run `sls deploy` command
4. To get the name of the function, run `sls deploy list functions`
5. You can view logs with `sls logs -f http -r <aws-region-n>`