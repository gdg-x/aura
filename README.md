# Aura - GDG[x]

<!-- [![Build Status](https://travis-ci.org/Vrijraj/aura.svg?branch=master)](https://travis-ci.org/Vrijraj/aura) -->

<img width="100%" src="https://raw.githubusercontent.com/GDG-Jalandhar/WebsiteData/master/promotion%20images/Aura%20v1.0.3.png">

Standard Web App for GDG's Communties. <br>
[Demo](https://aura-client-master.firebaseapp.com/) <br>
Version: 1.0.3

## Overview

Aura is the website template that helps you to set GDG's Communities website with events, team and  management in a few minutes.

The template is created by [GDG Jalandhar](https://meetup.com/GDG-Jalandhar/) team experience of running meetups.

## Features
| Feature | Description |
|---|---|
| **Fast and optimized** | PWA on Lighthouse |
| **Works offline** | Can works offline |
| **Mobile first** | Mobo Friendly Web app can be installed as a native app on your phone |
| **SEO optimized** | index all content and get to the top in search results |
| **Easy in management** | keep and update all information in the JSON File |


## Getting Started
1. [Fork repository](https://github.com/Vrijraj/aura/fork) and clone it locally
1. Install project dependencies: `npm install` 
1. Find the [Meetup API Key](https://secure.meetup.com/meetup_api/key/) and paste it [here](/src/config/key.js), also replace the chapter URL from `Meetup.com/[gdg-chapter-url]`
1. Compiles and hot-reloads for development: `npm run serve`
1. Update `Meta Tag`, `Title Tag` and [Google Analytics Code](https://analytics.google.com/analytics/web/#/) from [Basic Info](/public/index.html), [manifest.json](/public/manifest.json) and [Resources](/src/assets/data)
1. For the production: `npm run build` and then one dir will be created `dist`
1. For testing: `npm run test`

## Deploy your Web App on Firebase

1. Setup Environment for the Firebase deployment
   * Install Firebase CLI: `npm i -g firebase-tools`
1. Create [Firebase account](https://console.firebase.google.com) and login into [Firebase CLI](https://firebase.google.com/docs/cli/): `firebase login`
1. Open Terminal/CMD/Powershell in your dir.
1. Now type `firebase login` command in your Terminal/CMD/Powershell. 
1. Type `firebase init`.
1. Select the project by using the arrow keys.
1. Then Select the `Firebase Hosting` by using Spacebar and arrow key.
1. Click `No` for Single page web app.
1. Type `dist`.
1. Some by default file will be created successfully.
1. Run locally
   * `firebase serve` or `npm run serve` 
1. Update Firebase.json file
    ```js
        {
            "hosting": {
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
   * `firebase deploy` or `npm run deploy` 



### Run your tests
1. For Test: `npm run test`


### Lints and fixes files
1. For Lints and Fixes files: `npm run lint`

### Documentation
1. The [Getting Started guide](#getting-started) is probably a good first point of call! <br>
1. [Full documentation](/docs).

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Technology Stack

* [VueJS](https://vuejs.org/)
* [Vuetify](https://vuetifyjs.com/en/)
* [Firebase](https://firebase.google.com/)
* [Service Worker & PWA](https://www.npmjs.com/package/vue-pwa)

### View Website Built with Project 

| Community Name | Web App Link | 
| --- | --- | 
| GDG Jalandhar | [View Now](https://gdgjalandhar.com) |
| GDG Kuala Lumpur | [View Now](https://www.gdgkl.dev/) |
| GDG Fortaleza | [View Now](http://gdgfortaleza.com.br/) |
| GDG Kozhikode | [View Now](https://gdgkozhikode.org/) |
| GDG Delta | [View Now](https://gdgdelta.com/) |
| GDG Tokyo | [View Now](https://tokyo.gdgjapan.org/) |
| GDG Yangon | [View Now](https://gdgyangon.org/) |




Project is published under the [MIT license](/LICENSE.md).  
Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)
