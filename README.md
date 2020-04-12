# Aura v3

<img src="https://github.com/GDG-Jalandhar/WebsiteData/blob/master/Aura%20Main%20v3%20Dark%20.png?raw=true" width="400em">
<img src="https://github.com/GDG-Jalandhar/WebsiteData/blob/master/Aura%20Main%20v3%20Light.png?raw=true" width="400em">

[![MadeWithVueJs.com shield](https://madewithvuejs.com/storage/repo-shields/1444-shield.svg)](https://madewithvuejs.com/p/aura/shield-link)


Standard Web App for Tech Communties. <br>
[Demo](https://myaurapp.web.app/) <br>
Version: 3.1.1

### Show some :heart: and star the repo to support the project

## Overview

Aura is the Web App that helps you to mange the Tech Communities like GDGs, DSCs or any other tech communities with Aura Admin.

## Features
| Feature | Description |
|---|---|
| **Fast and optimized** | PWA on Lighthouse |
| **Works offline** | Can work offline |
| **Dark/Light Theme Mode** | Light/Dark Theme Mode |
| **Mobile first** | Mobo Friendly Web app can be installed as a native app on your phone |
| **SEO optimized** | index all content and get to the top in search results |
| **Easy in management** | Easy in Management by using Aura Admin |
| **Trigger Push Notification** | Trigger Push Notification to Aura Main |
| **Usability** | Any Tech Communities can use |
| **Custom Event Page** | Now No need to create the website for XYZ event |
| **Public shareable URL for Team & Speakers** | Team member public URL for Self Branding and Public Speaker Directory & Public URL for Promotion |


The template is created by [GDG Jalandhar](https://meetup.com/GDG-Jalandhar/) team experience of running meetups/events.

## Getting Started

1. [Fork repository](https://github.com/Vrijraj/aura/fork) and clone it locally
1. Setup Environment
    - Install [Node.js (v8.9.4 or above)](https://nodejs.org/en/download/)
    - Install vue cli: `npm install -g @vue/cli`
1. Install project dependencies: `npm install` 
1. Create [Firebase account](https://console.firebase.google.com) and Create a new Project if you have not  
1. Go to Firebase Project Dashboard
1. Go to Cloud Firestore Database and Enable the database in test mode
1. Update the Rule
    ```js
        rules_version = '2';
        service cloud.firestore {
            match /databases/{database}/documents {

                // This rule allows anyone on the internet to view, edit, and delete
                // all data in your Firestore database. It is useful for getting
                // started, but it is configured to expire after 30 days because it
                // leaves your app open to attackers. At that time, all client
                // requests to your Firestore database will be denied.
                //
                // Make sure to write security rules for your app before that time, or else
                // your app will lose access to your Firestore database
                match /{document=**} {
                allow read : if true;
                allow write : if request.auth.uid != null;
                }
            }
        }
    ```
1. In the Firebase project console dashboard. Click on create a new app
1. Go to Firebase project Settings and then General Settings Tab
1. Scroll down and go to your app section under Firebase SDK snippet
1. Now click on the node
1. Copy the code 
    ```js
    apiKey: "Axxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxx.firebaseio.com",
    projectId: "xxxxxxxxx",
    storageBucket: "xxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxx",
    appId: "1:xxxxxxxxx:web:xxxxxxx"
    ```
1. Now goto project code and inside `src/config/` update the `firebase.js` file with these codes
1. Update the field name in `vue.config`
1. Run locally
    - `npm run serve`
    - For the First Time you will see a text Either `Your Internet is not Working or Site is not Configured`
1. For the production: `npm run build` and then one dir will be created dist
1. For testing: `npm run test`
1. Setup `Aura Admin` for Management of Aura v3

## Deployment on Firebase
1. Setup Environment for the Firebase deployment
   * Install Firebase CLI: `npm i -g firebase-tools`
1. Create [Firebase account](https://console.firebase.google.com) and login into [Firebase CLI](https://firebase.google.com/docs/cli/): `firebase login`
1. Open Terminal/CMD/Powershell in your dir.
1. Now type `firebase login` command in your Terminal/CMD/Powershell.
1. Update `.firebaserc` file with your firebase project id
1. Update `firebase.json` with the field name `site` with your Firebase Multiple hosting
1. Run locally
   * `firebase serve`
1. Update Firebase.json file
    ```js
        {
            "hosting": {
                "site":"Your_Firebase_Hosting_id",
                "public": "dist",
                "rewrites": [ {
                    "source": "**",
                    "destination": "/index.html"
                } ],
                "ignore": [
                    "firebase.json",
                    "**/.*",
                    "**/node_modules/**"
                ]
            }
        }
    ```
1. Build and deploy
   * `firebase deploy`




### Documentation
1. [Full documentation](https://docs.google.com/document/d/18jKhG10OZx1T87ey8rtLYjyPpjPTCqPfX3JiOs3PUcs/edit?usp=sharing).


## Technology Stack

* [VueJS](https://vuejs.org/)
* [Vuetify](https://vuetifyjs.com/en/)
* [Firebase](https://firebase.google.com/)
* [Service Worker & PWA](https://www.npmjs.com/package/vue-pwa)
* [Workbox](https://developers.google.com/web/tools/workbox)



## Contributing

Awesome! Contributions of all kinds are greatly appreciated. To help smoothen the process we have a few non-exhaustive guidelines to follow which should get you going in no time.

### Using GitHub Issues

- Feel free to use GitHub issues for questions, bug reports, and feature requests
- Use the search feature to check for an existing issue
- Include as much information as possible and provide any relevant resources (Eg. screenshots)
- For bug reports ensure you have a reproducible test case
 - A pull request with a breaking test would be super preferable here but isn't required

### Submitting a Pull Request

- Squash commits
- Lint your code with eslint (config provided)
- Include relevant test updates/additions
- Pull requests _must_ be made against `develop` branch. Any other branch (unless specified by the maintainers) will get rejected.

## Contributors
<b>Maintainer:</b> [Vrijraj Singh](https://github.com/vrijraj) <br>
<b>Developers:</b> [Vrijraj Singh](https://github.com/vrijraj) &  [Bharat Agarwal](https://github.com/bharatagsrwal) 

## Facing Any Problem or need any Help?
Write us in [issues](https://github.com/issues) section. Our team will try solve your issue within 10-12 hours.<br>
