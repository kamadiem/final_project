# Azure Text-to-Speech(TTS) 
Text-to-speech service enables your applications, tools. or devices to convert text into human-like synthesized speech. You are also able to use human-like prebuilt neural voices or create a custom voice unique to your brand. The Text-to-Speech feature of Speech service on Azure has been fully upgraded to the neural TTS engine, which uses deep neural networks to make the voices of computers nearly indistinguishable from the recordings of people. With the human-like natural prosody and clear articulation of words, neural Text-to-Speech has significantly reduced listening fatigue when you interact with AI systems.

## How to get started
To start out you need to create or log into an Azure account. 

Link: https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/#overview

- In the Azure Portal search for “Speech Services” resource to create a cognitive service, speech service which includes API endpoints like the Text-to-speeck service.
- Select a name, subscription, location pricing tier and resource group as needed.
- You will need the "Keys and Endpoint" information for the application (which is configured in the speech_controller.js file).

<img width="564" alt="Screen Shot 2021-12-14 at 9 19 53 PM" src="https://user-images.githubusercontent.com/89502069/146111101-c9d34f5f-3943-4a1a-addd-beea826f7a1e.png">



## Tools
My project uses a number of open-source projects to work properly:

- [NodeJs] - The compiler of javascript
- [Express js] - Running web server and Api's
- [Cookies] - To save session logged in users
- [Jwt] - To encrypt saved user data for security 
- [Micorosoft Azure] - To convert users text to speech
- [npm] - Nodejs package manager
- [dotenv] - to seperate secrets from source code and share source code while allowing other people to create their own.

## Status Codes
This returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |

## API's usage via POSTMAN

## Host:

http://64.227.10.104:8080/



## ENDPOINT: /login
 * Send a POST request to the url - 64.227.10.104:8080/login by using the request body entailing username and password accordingly.
 
 * You will get a JSON as an output that indicates you have logged in successfully. 

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


## ENDPOINT:/register
 * Send a POST request to the url - 64.227.10.104:8080/register by using the request body entailing username and password accordingly.
 
 * You will get a JSON as an output that indicates the username and password has registered successfully. If you see a "username already exists" message this still indicated it has registered.

  
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



## ENDPOINT:/text2speech?text=<insert text>
 * Send a GET request to the url - 64.227.10.104:8080/text2speech?text=hello how are you? 
 
 * You will get an audio/MPEG as an output that is identified in the text. you can change the text to any text you want to get the audio output.


```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | **Required**. your email |

## Responses

    Audio stream output
```
![image](https://user-images.githubusercontent.com/89502069/145885201-59d514c5-3fae-4c70-a381-abb1bc03de3b.png)


## ENDPOINT: /logout
 * Send a POST request to the url - 64.227.10.104:8080/logout.
 
 * You will get a JSON as an output that indicates you have logged out successfully. 
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



More info on Azure cognitive services can be found here - https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/

