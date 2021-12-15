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

##POSTMAN  <img width="492" alt="Screen Shot 2021-12-15 at 3 31 04 PM" src="https://user-images.githubusercontent.com/89502069/146260649-3c0dfbea-0b96-4d24-9ba5-5ef2236a88a6.png">


##OR


##POSTMAN ![postman-platform-for-api-development-social-card](https://user-images.githubusercontent.com/89502069/146260718-9c58e684-4da7-47b4-83ff-ec478e312de7.jpeg)





## Host:

http://64.227.10.104:8080/



https://user-images.githubusercontent.com/89502069/146257519-a167744b-69e3-476e-bc4a-cdff0fcf095b.mp4




## ENDPOINT: /register
  
```
POST request to the url - 64.227.10.104:8080/register

Parameter: 
{
    "username" : "",
    "password" : ""
}

Responses:
{
  "message" : "user Registred"
  "token": ""
}

 * If a similar username is entered then you get a response "username already exists"

```


https://user-images.githubusercontent.com/89502069/146257589-491d3ca0-0895-40a1-a402-38a731adf34d.mp4



## ENDPOINT: /login

```
POST request to the url - 64.227.10.104:8080/login

Parameter:
{
    "username" : "",
    "password" : ""
}

Responses:
{
  "message" : "Logged in successfully"
  "token": ""
}

* the purpose of the token is to access the text2speech endpoint 

```



https://user-images.githubusercontent.com/89502069/146257628-a60f081b-0c36-4e4c-9255-6ae7a3d88849.mp4



## ENDPOINT: /text2speech?text=

```
GET request to the url - 64.227.10.104:8080/text2speech?text=hello how are you?

Parameter: 
{
    "username" : "",
    "password" : ""
}

Responses:

    Audio stream output
    
    ** if an error message shows, copy the token provided in the login response in to the text2speech header. 
    The KEY parameter is 'x-access-token' and the VALUE is the login token
```



https://user-images.githubusercontent.com/89502069/146257685-b3b1766b-b09c-4262-84fd-7b59620a0e22.mp4




## ENDPOINT: /logout 
 
```
POST request to the url - 64.227.10.104:8080/logout

Parameter: 
{
    n/a
}

## Responses:
{
  "message" : "Successfully logged out"
}
```



https://user-images.githubusercontent.com/89502069/146257723-c8b9e851-945b-4700-b9d1-aa24ffa5ad04.mp4




More info on Azure cognitive services can be found here - https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/

