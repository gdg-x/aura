# Aura - GDG[x]
[![MadeWithVueJs.com shield](https://madewithvuejs.com/storage/repo-shields/1444-shield.svg)](https://madewithvuejs.com/p/aura/shield-link)
[![Build Status](https://travis-ci.org/gdg-x/aura.svg?branch=master)](https://travis-ci.org/gdg-x/aura)

<img width="100%" src="https://raw.githubusercontent.com/GDG-Jalandhar/WebsiteData/master/promotion%20images/Aura%20v1.0.3.png">

Standard Web App for GDG's Communties. <br>
[Demo](https://aura-client-master.firebaseapp.com/) <br>
Version: 1.0.6

### Show some :heart: and star the repo to support the project

## Overview

Aura is the website template that helps you to set GDG's Communities website with events, team and  management in a few minutes.

The template is created by [GDG Jalandhar](https://meetup.com/GDG-Jalandhar/) team experience of running meetups/events.

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
1. Replace the `urlname` Field (`CHAPTER_URL_NAME`)  [here](/src/config/key.js)
1. Compiles and hot-reloads for development: `npm run serve`
1. Update `Meta Tag`, `Title Tag` and [Google Analytics Code](https://analytics.google.com/analytics/web/#/) from [Basic Info](/public/index.html), [manifest.json](/public/manifest.json) and [Resources](/src/assets/data)
1. For the production: `npm run build` and then one dir will be created `dist`
1. For testing: `npm run test`

## Deploy on Firebase

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

## Deploy on Netlify
1. On Netlify, setup up a new project from GitHub with the following settings:

    - **Build Command:** `npm run build` or `yarn build`
    - **Publish directory:** `dist`

2. Hit the deploy button!

Also checkout [vue-cli-plugin-netlify-lambda](https://github.com/netlify/vue-cli-plugin-netlify-lambda).

In order to receive direct hits using `history mode` on Vue Router, you need to create a file called `_redirects` under `/public` with the following content:

```
# Netlify settings for single-page application
/*    /index.html   200
```

More information on [Netlify redirects documentation](https://www.netlify.com/docs/redirects/#history-pushstate-and-single-page-apps).

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

## Contributors
<b>Maintainer:</b> [Vrijraj Singh](https://github.com/vrijraj)

### View Website Built with Projects

| Community Name | Web App Link |
| --- | --- |
| GDG Jalandhar | [View Now](https://gdgjalandhar.com) |
| GDG Kuala Lumpur | [View Now](https://www.gdgkl.dev/) |
| GDG Fortaleza | [View Now](http://gdgfortaleza.com.br/) |
| GDG Kozhikode | [View Now](https://gdgkozhikode.org/) |
| GDG Delta | [View Now](https://gdgdelta.com/) |
| GDG Tokyo | [View Now](https://tokyo.gdgjapan.org/) |
| GDG Yangon | [View Now](https://gdgyangon.org/) |
| GDG Gran Canaria | [View Now](https://gdggrancanaria.org/) |
| GDG Santander | [View Now](https://gdgsantander.com/) |
| GDG Ciudad del Este | [View Now](http://gdgcde.org/) |
| GDG Ilorin | [View Now](https://gdg-ilorin-d9f0d.firebaseapp.com/) |
| GDG Chetumal | [View Now](https://gdg-chetumal.firebaseapp.com/) |
| GDG Porto | [View Now](https://gdgporto-aura.firebaseapp.com/) |
| GDG Istanbul | [View Now](https://gdgist.firebaseapp.com/) |
| GDG Port-of-Spain | [View Now](https://gdgpos.com/) |
| GDG Jeddah | [View Now](https://www.gdgjed.com/home) |
| GDG Sevilla | [View Now](https://www.gdgsevilla.com/) |
| GDG Madeira | [View Now](https://gdgmadeira.xyz/) |
| GDG Chandigarh | [View Now](https://gdg-chd.web.app/) |
| GDG Rochester | [View Now](https://gdgrochester.com/) |
| GDG Sri Lanka | [View Now](https://gdgsrilanka.org) |
| GDG Lafia | [View Now](https://lafia.gdg.ng/) |
| GDG Kinshasa | [View Now](https://gdg-kin.firebaseapp.com/) |
| Dev Cluster Goa | [View Now](https://beta.devcluster.community/) |
| GDG Cloud Calgary | [View Now](https://gdgyyc.com/) |
| GDG Cloud SF | [View Now](https://cloudsf.withgdg.com/) |
| GDG Nagpur | [View Now](https://gdgnagpur.com/) |
| GDG Kolkata | [View Now](https://gdgkolkata.org/) |
| GDG Ahmedabad | [View Now](http://gdgahmedabad.com/) |
| GDG Fremont | [View Now](https://gdg-fremont.firebaseapp.com/) |
| GDG Savannah | [View Now](https://gdgsavannah.com/) |
| GDG San Salvador | [View Now](https://gdgsansalvador.dev/) |
| GDG Indore | [View Now](https://gdgindore.in/) |
| GDG Pescara | [View Now](https://gdgpescara.it/en/) |
| GDG CDE | [View Now](http://gdgcde.org/) |
| GDG Galicia | [View Now](https://gdggalicia.com/) |
| GDG Campobasso| [View Now](https://gdgcampobasso.it/) |
| GDG Galway | [View Now](https://gdg-galway.com/) |
| GDG Nizhny Novgorod | [View Now](https://gdgnnsite-62ac7.firebaseapp.com/) |
| GDG Madurai | [View Now](https://www.gdgmadurai.in/) |
| GDG Bristol | [View Now](https://gdgbristol.org/) | 
| GDG Ranchi | [View Now](https://www.gdgranchi.in/) |
| GDG Chennai | [View Now](https://gdgchennai.in)|
| GDG Kano | [View Now](http://kano.gdg.ng/)|
| GDG Gandhinagar |[View Now](https://gdggandhinagar.org/) |
| GDG Craiova | [View Now](https://gdgcraiova.dev/) |
| GDG Houston | [View Now](https://gdghoustontx.org/) |
| GDG Cloud Ahmedabad | [View Now](https://gdgahmedabad.cloud/) |
| GDG Cloud Hanoi | [View Now](https://gdgcloudhanoi.com/) |
| GDG Ulaanbaatar | [View Now](https://gdgub.org/) |


Project is published under the [MIT license](/LICENSE.md).  
Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)
