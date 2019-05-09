<template>
  <v-content class="pa-0">
    <v-container fluid class="mt-2 mb-0">''
      <v-layout wrap align-start justify-center row fill-height class="my-0">
        <v-flex xs12 md8 class="mb-0">
          
          <p class="google-font mb-0 mt-3" style="font-size:200%;color:#616161">{{ChapterDetails.ChapterName}} Devkit</p>
          <!-- <v-divider></v-divider> -->
          <p class="google-font mt-3" style="font-size:110%">
              To be able to participate in our code labs, you would need to have your workstation prepped with the necessary packages. The following instructions
              will guide you on how to get up and ready for our activities in no time! 
            </p>

            <p class="google-font mt-3" style="font-size:110%">
                NB: This guide is for windows workstations, linux and mac users already has built package managers so this guide won't be necessary.
            </p>

            <p class="google-font" style="font-size:180%;color:#0277bd">Step 1: Install Chocolatey</p>
            <p class="body-1">
                <a href="https://chocolatey.org/">Chocolatey</a> is a really neat package manager for windows. It can not only help us install imporatnt developer software but help you manage and update any regular applications as well, including browesers, media players etc.
            </p>

            <p>
                To Install:
            </p>

            <ul>
                <li>Open command prompt as admin by presssing windows key ⊞ + x then clicking 'Command Prompt (Admin) from the menu</li>
                <li>A command prompt terminal window should open up, now copy and paste the following command (both lines) into the window and press enter</li>
            </ul>
            <br>
            <p>
                @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
            </p>

            <p>Close the window, now chocolatey is installed!</p>

            <p class="google-font" style="font-size:180%;color:#0277bd">Step 2: Install Developer Packages</p>
            <p>We can now use chcolatey's import feature to install all our required packages at once.</p>

            <ul>
                <li>Download <a href="https://firebasestorage.googleapis.com/v0/b/gdgpos-24892.appspot.com/o/devapps.config?alt=media&token=ef2896c9-c6d2-4b15-aeff-0aee5d2f016c" download>this chocolatey export file</a> to your machine and place it on your desktop.</li>
                <li>Open another command prompt (admin) window</li>
                <li>Enter the following command with your username: cd C:\Users\ReplaceWithYourUsername\Desktop</li>
                <li>Now enter the following command: choco install devapps.config</li>
            </ul>

            <br>

            <p>Chocolatey should now run installing the apps in the given config file. This would install:</p>

            <ul>
                <li><a href="https://nodejs.org/en/">Nodejs and npm</a> - Javascript runtime</li>
                <li><a href="https://code.visualstudio.com/">Visual Studio Code</a> - Our Code editor of choice</li>
                <li><a href="https://www.python.org/download/releases/3.0/">Python 3</a> - Python runtime</li>
                <li><a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">Java 8</a> - Java runtime</li>
                <li><a href="https://www.getpostman.com/">Postman</a> - Great api testing tool</li>
                <li><a href="https://git-scm.com/">Git - Version Control</a> - Essential for collaboration</li>
            </ul>
            
            <br>
            <p>And that's it! You're now ready for our code labs!</p>

          
        </v-flex>
        <v-flex xs12 md2 lg2 class="pa-2">
          <v-img
              :src="require('@/assets/img/svg/contact2.svg')"
              :lazy-src="require('@/assets/img/svg/contact2.svg')"
              width="70%"
              style="float:right"
              >
              <v-layout
                  slot="placeholder"
                  fill-height
                  align-center
                  justify-center
                  ma-0
              >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>

    



  </v-content>
  
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'

  export default {
    components: {
    },
    data() {
      return {
        ChapterDetails: ChapterDetails
      }
    },
  }
</script>
