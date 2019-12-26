# Deploy to Firebase

1. Setup Environment for the Firebase deployment
   * Install Firebase CLI: `npm i -g firebase-tools` or `yarn global add firebase-tools`
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
   * `firebase serve` or `npm run serve` or `yarn serve` 
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
   * `firebase deploy` or `npm run deploy` or `yarn deploy`
1. The URL to your live site is listed in the output.
1. Enjoy

# Admin Panel
Aura does provide a central panel to manage your Team Members, Speakers, Push Messaging as well as to view insights of event like name, venue, date, status, no of RSVPs) using meetup.com API.

1. Log in to the [Firebase account].(https://console.firebase.google.com) 
   * Select the project linked with Aura for hosting.
1. From left navigation drawer select Authentication option and click on 'Sign-in Method' tab.
   * Enable the sign-in provider by toggling the switch in the dialogue box (Make sure you don't enable passwordless sign in).

1. Click on Sign-in method and select Email/Password as your provider.

1. Hit Save and move to the 'Users' Tab.
1. Create a new user by clicking on 'Add User'.
1. Enter the desired email and password to create and save the new user.
1. The same user can be used to access the admin panel located at ```http://<base_link_of_project>/admin```.
1. Enjoy.
