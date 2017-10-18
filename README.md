# Ombud-test

## Prerequistes
You must have the following installed/configured for this to work correctly<br />
1. [Docker](https://www.docker.com/community-edition)
2. [Docker-Compose](https://docs.docker.com/compose/)


## Development environment
To spin up the development environment simply do the follow from the root level of the repo
```bash
docker-compose up
```

### complaint-service
runs on http://localhost:3000 </br>
To run the test suite use the command
```bash
docker-compose run complaint-service npm test
```

### DB
runs on http://localhost:3001 </br>
NOTE: data ingestion will only occur on  first time this container spins up. To wipe your current db and rerun the data ingestion scripts enter the following commands
```bash
make wipe_and_seed_complaintdb
```
### Documentation
runs on http://localhost:3002 </br>
To refresh your documentation enter this command
```bash
docker-compose up doc-generator
```


