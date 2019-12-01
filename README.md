# MITRE SAF

[![MadeWithVueJs.com shield](https://madewithvuejs.com/storage/repo-shields/1444-shield.svg)](https://madewithvuejs.com/p/aura/shield-link)

 <!-- [![Build Status](https://travis-ci.org/gdg-x/aura.svg?branch=master)](https://travis-ci.org/gdg-x/aura-->

MITRE Security Automation Framework Website. <br>
[Demo](https://mitre-saf.firebaseapp.com/) <br>
Version: 1.0.0

### Show some :heart: and star the repo to support the project

## Overview

The MITRE Security Automation Framework (SAF) brings together open-source, accessible applications, techniques, libraries, and tools developed by MITRE and the community to streamline security automation for Systems and in DevOps pipelines.

The template is created by [GDG Jalandhar](https://meetup.com/GDG-Jalandhar/).

## Features

| Feature                  | Description                                                          |
| ------------------------ | -------------------------------------------------------------------- |
| **Fast and optimized**   | PWA on Lighthouse                                                    |
| **Works offline**        | Can works offline                                                    |
| **Mobile first**         | Mobo Friendly Web app can be installed as a native app on your phone |
| **SEO optimized**        | index all content and get to the top in search results               |
| **Easy in management**   | keep and update all information in the Admin Pannel                  |
| **Push Notification**    | Sending Push Notifictaion using Admin Dashboard                      |
| **Custom Event Rroting** | Now no need to create the website for XYZ events/Meetups             |
| **Dark Theme Mode**      | Added Dark theme mode                                                |
| **Blogs Integration**    | Blogs page with Medium API Integration                               |

## Getting Started

1. [Fork repository](https://github.com/mitre/aura/fork) and clone it locally
2. Install project dependencies: `npm install`
3. Replace the `urlname` Field (`CHAPTER_URL_NAME`) [here](/src/config/key.js)
4. Compiles and hot-reloads for development: `npm run serve`
5. Update `Meta Tag`, `Title Tag` and [Google Analytics Code](https://analytics.google.com/analytics/web/#/) from [Basic Info](/public/index.html), [manifest.json](/public/manifest.json) and [Resources](/src/assets/data)
6. For the production: `npm run build` and then one dir will be created `dist`
7. For testing: `npm run test`

## Deploy your Web App on Firebase

1. Setup Environment for the Firebase deployment
   - Install Firebase CLI: `npm i -g firebase-tools`
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
   - `firebase serve` or `npm run serve`
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
   - `firebase deploy` or `npm run deploy`

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

- [VueJS](https://vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)
- [Firebase](https://firebase.google.com/)
- [Service Worker & PWA](https://www.npmjs.com/package/vue-pwa)
- [Workbox](https://developers.google.com/web/tools/workbox)

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

## Maintainers

**Maintainer:** [Aaron Lippold](https://github.com/aaronlippold)

## Template Authors

**Maintainer:** [Vrijraj Singh](https://github.com/vrijraj)
**Developer:** [Bharat Agarwal](https://github.com/bharatagsrwal)
