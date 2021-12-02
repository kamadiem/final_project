# Azure Text to speech middleware 

This project write base on Node js express to create API's with authentication to communicate with Microsoft Azure text to speech service

## Features

- Users can Sign up for Api's
- Users can Sign In
- Users can pass the text to API and get stream speech audio of their text

The Database is used for the project is Sqlite3 that generate automatically on server 

## Tech
My project uses a number of open-source projects to work properly:

- [NodeJs] - The compiler of javascript
- [Express js] - Running web server and Api's
- [Cookies] - To save session logged in users
- [Jwt] - To encrypt saved user data for security 
- [Micorosoft Azure] - To convert users text to speech
- [npm] - Nodejs package manager

## Installation

My project requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
cd project
npm i
node index.js
#Important variable can be set in .env file
```
For production environments...
```sh
npm install --production
NODE_ENV=production node app
```

## API's usage

To use API you can use Postman or Curl .....

There are 4 routes written for my project that users can use them 

http
GET /register
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `username` | `string` | **Required**. your email |
| `password` | `string` | **Required** |

## Responses
```javascript
{
  "message" : string,
}
```



http
GET /login
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `username` | `string` | **Required**. your email |
| `password` | `string` | **Required** |

## Responses
```javascript
{
  "message" : string,
}
```



http
GET /text2speech
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | **Required**. your email |

## Responses

    Audio stream output
```

## Status Codes

returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |


Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8080
```
## License
MIT
