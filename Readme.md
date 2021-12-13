# Azure Text-to-speech(TTS) middleware 
Text-to-speech service enables your applications, tools. or devices to convert text into human-like synthesized speech. You are also able to use human-like prebuilt neural voices or create a custom voice unique to your brand. The Text-to-Speech feature of Speech service on Azure has been fully upgraded to the neural TTS engine, which uses deep neural networks to make the voices of computers nearly indistinguishable from the recordings of people. With the human-like natural prosody and clear articulation of words, neural Text-to-Speech has significantly reduced listening fatigue when you interact with AI systems.

## How to get started
To start out you need to create or log into an Azure account. The service can be possibly free if you already have an account

Link: https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/#overview

- In the Azure Portal search for “Speech Services” resource to create a cognitive service, speech service which includes API endpoints like the Text-to-speeck service.
- Select a name, subscription, location pricing tier and resource group as needed.
- We will need the "Keys and Endpoint" information for the application (which is configured in the speech_controller.js file).

## Tools
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
To use API you can use Postman or Curl .....(I decided to use Postman)

There are 4 routes written for my project that users can utilize 

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
![image](https://user-images.githubusercontent.com/89502069/145884416-3defe412-97b1-4a69-9558-f08b2425719d.png)


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
GET /text2speech
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | **Required**. your email |

## Responses

    Audio stream output
```

## Status Codes
This returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |


This verifyies the deployment by navigating to your server address in
your preferred browser.

```sh
64.227.10.104:8080
```
## License
MIT
