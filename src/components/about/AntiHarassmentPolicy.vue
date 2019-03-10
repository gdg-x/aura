<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-start justify-start row fill-height class="my-0" >
     
            <v-flex xs12 md8 lg8 class="pa-2 my-0">
                <p class="google-font" style="font-size:180%;color:#0277bd">Anti-Harassment Policy</p>

                <p class="google-font" style="font-size:110%">
                    <b style="font-size:120%;color: #2E2E2E;">Why do we have an official Anti-Harassment policy for {{chapterDetails.ChapterName}} events?</b>

                    <ul class="mt-2" style="font-size:110%">
                        <li class="google-font">It sets expectations for behavior at the event. Simply having an anti-harassment policy can prevent harassment.</li>
                        <li class="google-font">It encourages people to attend who have had bad experiences at other events</li>
                        <li class="google-font">It gives event staff/volunteers instructions on how to handle harassment quickly, with minimum amount of disruption for the event.</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:110%">
                    <b style="font-size:120%;color: #2E2E2E;">{{chapterDetails.ChapterName}} is dedicated to providing a harassment-free event experience for everyone, regardless of: </b>

                    <ul class="mt-2" style="font-size:110%">
                        <li class="google-font">Gender</li>
                        <li class="google-font">Sexual Orientation</li>
                        <li class="google-font">Disability</li>
                        <li class="google-font">Gender Identity</li>
                        <li class="google-font">Age</li>
                        <li class="google-font">Race</li>
                        <li class="google-font">Religion</li>
                        <li class="google-font">Nationality</li>
                    </ul>

                    <span class="google-font" style="font-size:110%">The above is not an exhaustive list -- we do not tolerate harassment of event spanarticipants in any form. </span>
                </p>

                <p class="google-font" style="font-size:120%">Sexual language and imagery is not appropriate for any event venue, including talks. Event participants violating these rules may be expelled from the event, and event banned from future events at the discretion of the event organizers/management. </p>

                <p class="google-font" style="font-size:110%">Harassment includes (but is not limited to):
                    <ul class="mt-2" style="font-size:110%">
                        <li class="google-font">Offensive verbal comments related to gender, sexual orientation, disability, gender identity, age, race, religion</li>
                        <li class="google-font">The use or display of sexual images in public spaces</li>
                        <li class="google-font">Deliberate intimidation</li>
                        <li class="google-font">Stalking</li>
                        <li class="google-font">Harassing photography or recording</li>
                        <li class="google-font">Sustained disruption of talks or other events</li>
                        <li class="google-font">Inappropriate physical contact</li>
                        <li class="google-font">Unwelcome sexual attention</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:120%">Participants asked to stop any harassing behavior are expected to comply immediately. 
                    <br><br>
                    Exhibiting partners and guests are also subject to the anti-harassment policy. In particular, exhibitors and speakers should not use sexualized images, activities, or other material, or otherwise create a sexualized environment in their slide decks, exhibit material, exhibit staffing, promotional items or demo material. 
                    <br><br>
                    If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact an organizer or event volunteer immediately. Organizers and event volunteers may be identified by t-shirts or special badges/lanyards. Organizers will investigate the issue and take appropriate action. This may include helping participants contact venue security or local law enforcement, provide escorts, or otherwise assist these experiencing harassment to fell safe for the duration of the event. 
                    <br><br>
                    Though we hope that we never have to invoke this policy, we believe that having this document helps everyone think a little more about how their actions and words affect the whole community, as well as individuals in the community.
                </p>


            </v-flex> 
           
            <v-flex xs12 md4 lg4 class="pa-2 hidden-sm-and-down">
                
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails,
        }
    },
}
</script>
