<template>
  <v-container fluid class="py-0 my-0 mt-0">
    <v-row class="py-0 my-0">
      <v-col md="9" sm="6" cols="12" class="py-0 my-0">
        <!-- <p
          class="google-font mb-0"
          style="font-size:110%"
        >Our events are open to newbies, developers, managers, and organizations who are interested in Google's technologies or use them as part of their projects.</p> -->
        <br />
        <p class="google-font">Questions? Please contact
          <a
            style="color:#1565C0;text-decoration: none;"
            :href="`mailto:${communitydata.CommunityEmail}`"
          >{{communitydata.CommunityEmail}}</a>
        </p>
        <!-- <p class="google-font mt-4 mb-3" style="font-size:130%">
          Follow Us:
          <span v-for="(item,i) in communitydata.SocialLinks" :key="i">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn text icon :href="item.link" target="_blank" slot="activator">
                  <v-icon>{{item.icon}}</v-icon>
                </v-btn>
              </template>
              <span>{{item.name}}</span>
            </v-tooltip>
          </span>
        </p> -->
      </v-col>
      <!-- <v-col md="3" sm="6" cols="12" class="py-0 my-0">
        <img :src="require('@/assets/img/svg/contact.svg')" style="float:right" width="80%" alt />
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import communitydata from "@/assets/data/communitydata.json";
export default {
  data() {
    return {
      communitydata: communitydata
    };
  }
};
</script>