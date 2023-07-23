# fe

Stands for frontend subdirectory

# be

Stands for backend subdirectory

## NOTES

NOTE: extensive tests are omitted for faster development

## Assumptions

* since there is nothing said about operator of this application, application will be available to public -
  should be changed for actual application(in the code there are preparations for such migration)
* There is no pagination for tables(for bigger data chunks should be added)
* No editing(HTTP PUT) is implemented
* Docker is not setted up for a development, just for easy local run

## Run entire project locally

#### Requirements:

* docker

#### Run command

* navigate to project root
* execute: `docker compose up`
    * fe link: http://localhost:3000
    * be API doc link: http://localhost:8000/doc/

## Example of possible prod deployment:
NOTE: in current project prod environment is omitted

### AWS 
* BE with [zappa](https://github.com/zappa/Zappa) project - to utilize lambdas as a starter, later project could be moved to fargate, or anything which can read docker configuration 
* FE with [AWS Amplify](https://docs.aws.amazon.com/amplify/index.html) you can give access to <repo root>/fe and aws will automatically deploy new version of FE upon git push

| Pros                     | Cons                         |
|--------------------------|------------------------------|  
| flexible setup           | complicated setup            |
| control                  | poor for quick demo projects |
| good for mature projects |                              |

### Heroku
just give access to your git BE/FE (for BE would need to add a run command, typically with 'gunicorn myproject.wsgi') repos and on push Heroku will autodeploy everything

| Pros                           | Cons                                     |
|--------------------------------|------------------------------------------|  
| easy to setup and deploy app's | almost no control                        |
| good for quick demo projects   | prices goes wild for bigger applications |
