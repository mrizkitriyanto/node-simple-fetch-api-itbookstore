# Simple Fetch API

## How to reproduce
### Install dependencies
``` shell
npm install
```
### Run command
``` shell
# Production
npm run start-prod

# Development
npm run start-dev
```

## Process Manager on Server
### Install pm2
```shell
npm install -g pm2
```

### Start
```shell
pm2 start npm --name "itbookstore-api" -- run "start-prod" 
```

### Other Command
```shell
# Restart
pm2 restart itbookstore-api

# Stop
pm2 stop itbookstore-api

# Start
pm2 start itbookstore-api
```
