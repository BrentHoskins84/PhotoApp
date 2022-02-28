# UNSPLASH API APP

A Simple, app to search the UnSplash APi.

## Installation and Setup Instructions

Clone down this repo. you will need to have react native setup and configured.

```
git clone
```

Change Directories to the project

```
cd photoApp
```

Npm Install

```
npm i
```

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
