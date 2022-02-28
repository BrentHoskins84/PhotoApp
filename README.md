# UNSPLASH API APP

A Simple, app to search the UnSplash APi.

## Installation and Setup Instructions

Before downloading the App you will need to get an UnSplash API key, for security reasons the API was has not been add to the repo. To get an API key for UnSplash, you can create an account [here]("https://unsplash.com/login")

```
git clone git@github.com:BrentHoskins84/PhotoApp.git
```

Change Directories to the project

```
cd photoApp
```

Npm Install

```
npm i
```

Make copy of the .env-sample file and name it .env then add the API key from above to the newly created .env file.

run the app in an emulator

```
npm run ios
```

## Requirements

- [x] Create a simple responsive app using React Native to display images from a search term using an image search API of your choice
- [x] Should include one text entry field
- [x] Should include a button to request results
- [x] Should include a results area to display the images in a gallery style of your choice
- [x] When tapping on an image, it should display in a responsive overlay
- [x] Implement your own spelling checker that automatically corrects some user input mistakes
  - [x] You can also use a Unix words dictionary file to assist in determining the validity of words
  - [x] Run your spell checker on the input word before submitting the image search requests
  - [x] Remove non-letter characters. 'nyl;on' should auto-correct to ‘nylon'
  - [x] Mistyped vowels. 'ceku' should auto-correct to ‘cake'
- [x] Make sure to take into account some error handling, and keep your code clean and organized
- [x] Create a README that documents the assumptions and decisions that you have made in designing the architecture of your site
