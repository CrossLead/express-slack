# express-slack
Slack Command Middleware for Express

# Prerequisites

**NodeJS**, I use `v7.6.0` you can check your version by running this command:
```
node -v
```
If you do not have it installed, you can download and install it here https://nodejs.org/en/

You will also need the mocha-cli installed globally in order to run the unit tests. You will not be able to run the npm test command without it.
```
npm install mocha-cli -g
```

# Getting Started

Install the required dependencies:
```
npm install
```

To start the server run the following:
```
npm start
```
The server will listen on the port specified in your .env configuration file, or listen on 3000 if you do not include that file.

To run the unit tests:
```
npm test
```

# Have some fun!

I have the server running on the EC2 instance at this address: 34.202.231.189

In slack simply use the /clp slash command to get a response!

Enjoy!