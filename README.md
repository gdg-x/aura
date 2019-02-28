# Aura - GDG[x]

[![Build Status](https://travis-ci.org/Vrijraj/aura.svg?branch=master)](https://travis-ci.org/Vrijraj/aura)

<img width="100%" src="https://doc-0g-20-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/1o2trjk5rdn7se60vjushc9q3k662n8h/1551355200000/03213074667067221613/*/1VOuBc_AnzShLOrdINh62I_jeVlnPWxRX">

Standard Web App for GDG[X] Event. <br>
[Demo](https://aura-client-master.firebaseapp.com/) <br>
Version: 1.0.2

## Overview

Aura is the website template that helps you to set GDG's Communities website with events, team and  management in a few minutes.

The template is created by [GDG Jalandhar](https://meetup.com/GDG-Jalandhar/) team experience of running meetups.

## Features
| Feature | Description |
|---|---|
| **Fast and optimized** | 100/100 PWA on Lighthouse |
| **Works offline** | Can works offline |
| **Mobile first** | Mobo Friendly Web app can be installed as a native app on your phone |
| **SEO optimized** | index all content and get to the top in search results |
| **Speakers and schedule management** | keep and update all information in the JSON File |
| **Registration** | Attendees can register for the event using Firebase Realtime Database |


## Getting Started
1. [Fork repository](https://github.com/Vrijraj/aura/fork) and clone it locally
1. Setup Environment
   * Install Firebase CLI: `npm i -g firebase-tools` or `yarn global add firebase-tools`
1. Install project dependencies: `npm install` 
1. Compiles and hot-reloads for development: `npm run serve`
1. Create [Firebase account](https://console.firebase.google.com) and login into [Firebase CLI](https://firebase.google.com/docs/cli/): `firebase login`
1. Create a new Directory in your Local Machine.
1. Open Terminal/CMD/Powershell in your dir.
1. Now type `firebase login` command in your Terminal/CMD/Powershell. 
1. Type `firebase init`.
1. Select the project by using the arrow keys.
1. Then Select the `Firebase Hosting` by using Spacebar and arrow key.
1. Click `No` for Single page web app.
1. Type `Public`.
1. Some by default file will be created successfully.
1. Move the cloned source file in `public` dir.
1. Update [Firebase Web Setup & Basic Info](/index.html), [manifest.json](/manifest.json) and [Resources](/src/assets/data)
1. Update Firebase.json file
    ```js 
    {
      "hosting": {
        "public": "public",
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
  
1. Update the Firebase Real-Time Database Rules
    ```js
      {
        "rules": {
          "data": {
            "$uid": {
              ".write":"$uid === auth.uid",
              ".read": "$uid === auth.uid"
            },

          }
        }
      }
    ```
1. Enable the `Google SignIn` provider in `Firebase Auth`.
1. Run locally
   * `firebase serve` or `npm run serve` or `yarn serve` 
1. Build and deploy
   * `firebase deploy` or `npm run deploy` or `yarn deploy`


## Getting Started
1. [Fork repository](https://github.com/Vrijraj/aura/fork) and clone it locally
1. Install project dependencies: `npm install` 

### Compiles and hot-reloads for development
1. For Developement in your local machine: `npm run serve`

### Compiles and minifies for production
1. For Production: `npm run Build`

### Run your tests
1. For Test: `npm run test`


### Lints and fixes files
1. For Lints and Fixes files: `npm run lint`


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Technology Stack

* [VueJS](https://vuejs.org/)
* [Vuetify](https://vuetifyjs.com/en/)
* [Firebase](https://firebase.google.com/)
* [Service Worker & PWA](https://www.npmjs.com/package/vue-pwa)
