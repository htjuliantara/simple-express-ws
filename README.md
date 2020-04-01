# Simple Express WS

## Build Setup

``` bash
# install dependencies
$ npm install

# start server, available at http://localhost:3000/ and ws://localhost:8080/
$ npm run start

# test
$ npm run test

```

## Available Request
```
# Send Message
curl --location --request POST 'http://localhost:3000/send' \
--header 'Content-Type: application/json' \
--data-raw '{
	"message": "your message"
}

# View All Messages
curl --location --request GET 'http://localhost:3000/messages'

```

## Display Message Real-time
You can use [Smart Websocket Client](http://crysislinux.github.io/smart_websocket_client/) for testing Websocket server.
Then input Websocket address with `ws://localhost:8080/`