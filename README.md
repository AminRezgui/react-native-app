# react-native-app
Create Expo project using `expo init react-native-app`
  
  ![image](https://user-images.githubusercontent.com/98807955/197385171-e4bc7453-afa5-4783-9f46-4763aa0a0bc2.png)

I will choose a managed workflow for building the app to let expo take care of all the complexity behind the scene, with managed workflow, we are not going to see two projects ios and android, we only have a pure javaScript project.
For this challenge I am going to choose blank template with TypeScript.

# Available Scripts
## `npm start`
![npmstart](https://user-images.githubusercontent.com/98807955/197784298-f4c9058a-cb73-4c08-9e57-a23e52327744.png)

Runs your app in development mode.

Open it in the Expo app on your phone to view it scanning the QR code displayed in your terminal.
It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

You can either use the menu displayed to run the app on an Android emulator or IOS simulator already installed on your machine or follow the commands below.

## `npm run ios`
Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

## `npm run android` 
Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools.

# Redux

I have used Redux to store every viewed movie in details to display recently seen movies in search results page if there is no results from the API yet.  

