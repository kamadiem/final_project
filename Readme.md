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
- 

## API's usage via POSTMAN
https://user-images.githubusercontent.com/89502069/145890477-cc634b3b-0976-42f6-8f5d-e973c2491475.mp4



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
![image](https://user-images.githubusercontent.com/89502069/145885068-b6b7d91a-8309-4a83-80ea-2fe3d9b8eab6.png)



http
GET /text2speech
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | **Required**. your email |

## Responses

    Audio stream output
```
![image](https://user-images.githubusercontent.com/89502069/145885201-59d514c5-3fae-4c70-a381-abb1bc03de3b.png)

http
GET /logout
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
![image](https://user-images.githubusercontent.com/89502069/145885504-5b226332-5110-4f7e-abf0-15086bdbefec.png)



## Status Codes
This returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |


More info on Azure cognitive services can be found here


## License
MIT
