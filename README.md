# AI Image Gallery

## Description

AI Image Gallery is a web app that lets you create and view amazing images generated by artificial intelligence. You are able to use a suggested prompt provided by the chatgpt API or create your very own unique prompt. Once you have the desired prompt, the DALL-E API is used to generate a corresponding image.

Once the image has been generated, it is saved via Azure Blob Storage and displayed in the gallery. You can also view the images generated by other users, and hovering over an image will display the specific prompt used to generate it. I had a lot of fun creating this project and I hope you enjoy messing around with it!

### Technologies Used: 
- React
- Node.js
- Typescript
- Azure Blob Storage
- Azure Functions
- Next.js 
- Tailwind CSS
- DALL-E and chatgpt APIs (OPENAI)

## Installation
N/A - This project is deployed on Vercel and can be accessed at https://ai-image-library.vercel.app/

## Usage 
To use the app, follow these steps:

1. On the home page, enter any text prompt in the textarea box and click on the “Generate” button. For example, you can enter “a cat wearing a hat” or “a surreal landscape”. You can also click on the “Use Suggestion” button to use a prompt suggested by the chatgpt API, or create a completely new prompt by pressing the "New Suggestion" button. 
2. Wait for a few seconds while the app uses the DALL-E API to generate an image based on your prompt. A hot toast notification will pop up in the bottom right corner of the screen when the image is being generated/has completed generating. 
3. You will see the generated image with the rest of the art works in the virtual gallery. You can also see the original prompt when you hover over the image.
4. You can also save the image by hovering over a specific one and clicking on the copy icon. Once you have copied the url, you can copy and paste it in a new tab and the image will automatically begin downloading.
5. Not only will your personal collection show, images created by other users will also be displayed in the gallery. 


## Contributing 

This project is open source and welcomes contributions from anyone who is interested. Please follow these steps to contribute:

1. Fork this repository and create a new branch
2. Make your changes and commit them with a descriptive message
3. Push your branch to your forked repository
4. Create a pull request to the main repository
5. Wait for your pull request to be reviewed and merged