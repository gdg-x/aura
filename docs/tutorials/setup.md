# Set up

Follow the instructions below to install, build, and run the
Aura App locally in less than 15 minutes.

## Install the Aura App and dependencies

1. [Fork repository](https://github.com/gdg-x/aura/fork) and clone it locally
1. Setup Environment
   - Install [Node.js (v8.9.4 or above)](https://nodejs.org/en/download/)
1. Install project dependencies: `npm install`
1. Replace the `urlname` Field (`CHAPTER_URL_NAME`) [here](/src/config/key.js)
1. Compiles and hot-reloads for development: `npm run serve`
1. Update `Meta Tag`, `Title Tag` and [Google Analytics Code](https://analytics.google.com/analytics/web/#/) from [Basic Info](/public/index.html), [manifest.json](/public/manifest.json) and [Resources](/src/assets/data)
1. For the production: `npm run build` and then one dir will be created `dist`
1. For testing: `npm run test`

## Deploy your Web App on Firebase

1. Setup Environment for the Firebase deployment
   - Install Firebase CLI: `npm i -g firebase-tools` or `yarn global add firebase-tools`
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
1. Build and deploy
   - `firebase deploy`

## Directory structure

The diagram below is a brief summary of the directories within the project.

    /
    |---.firebase/
    |---dist/
    |---docs/
    |---public/
    |---node_modules/
    |---src/
    |   |---assets/
    |   |---components/
    |   |---config/
    |   |---filters/
    |   |---plugins/
    |   |---views/
    |

- `.firebase/` Firebase deployment related temporary file
- `dist/` is the directory to deploy to production.
- `public/` folder with all `index.html`, `img`, `Favicon Icon`, `manifest.json` data for the template.
- `docs/` documentation.
- `node_modules/` is the place of Node dependencies.
- `src/` is where you store all of your source code and do all of your development.

## Build and serve

1. Run locally
   - `cd` into the base directory
   - `npm install`
   - `npm run serve`
1. Build for the Production
   - `npm run build`
1. Deploy for Firebase
   - `firebase deploy` or `yarn deploy`

## Next steps

Now that your Aura App is up and running, learn how to
[configure app](configure-app.md) for your needs, or how to [deploy the app to the web](deploy.md).
