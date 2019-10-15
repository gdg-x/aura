<template>
    <v-dialog
      v-model="dialog"
      width="1000"
    >
      <template v-slot:activator="{ on }">
          <div 
            v-on="on" 
            style="cursor: pointer;"
            :class="$vuetify.theme.dark == true?'darkModeCard':'lightModeCard'" 
            class="pa-3">
              <!-- <v-chip color="primary" label outlined class="mt-1 mb-0" small>{{data.data.status}}</v-chip> -->
              <p class="google-font mt-1 mb-0" style="font-size:90%">{{data.data.local_date | dateFilter}}</p>
              <p class="google-font ma-0 mt-0" style="font-size:120%;" >{{data.data.name }}</p>
              <p class="google-font mt-0 mb-0" style="font-size:90%;">{{data.data.local_time}}</p>
              <p class="google-font mt-0 mb-0" style="font-size:90%;">{{data.data.venue.name }}</p>

          </div>
      </template>
<!-- :style="{'background-image':'url('+require('@/assets/img/svg/footer.svg')+')'}" -->
      <v-card color="" v-if="dialog">
        <v-card-title
          class="px-5 py-5 grey lighten-4 google-font"
          
          style="background-position:right bottom;"
        >
          {{data.data.name}} 
        </v-card-title>

        <v-card-text class="pa-5">
            <!-- <v-chip :color="data.vdata.tag.color" label outlined class="mt-1 mb-0" small>{{data.vdata.tag.name}}</v-chip> -->

            <p class="google-font mt-3 mb-0" style="font-size:110%"><b>Venue:</b> {{data.data.venue.name}}</p>
            <p class="google-font mt-1 mb-0" style="font-size:90%"><b>Date:</b>{{data.data.local_date | dateFilter}}</p>
              <p class="google-font mt-0 mb-0" style="font-size:80%;color:#424242"><b>Time:</b>{{data.data.local_time}}</p>
            <p class="google-font mt-3 mb-0" style="font-size:110%"><b>Description:</b> <span v-html="data.data.description"></span> </p>
            <!-- <p class="google-font mt-0 mb-0" style="font-size:110%"><b>Time Durations:</b> {{data.vdata.timeDuration}} min</p> -->
            <!-- <p class="google-font mt-0 mb-0" style="font-size:110%"><b>Type:</b> {{data.vdata.subtype}} </p>    -->
            <!-- <p class="google-font mt-0 mb-0" style="font-size:110%" v-if="data.vdata.complexity"><b>Content level:</b> {{data.vdata.complexity}} </p>                   -->

            <!-- <p class="google-font mt-3" style="font-size:105%">{{data.vdata.description}} <br> </p> -->

          
       
         
      
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props:{
      data:{
        data:{}
      }
    },
    data () {
      return {
        dialog: false,
      }
    },
    methods:{
      getCharString(data) {
      var splitArr = data.split(" ");
        if (splitArr.length > 1) {
          return (
            splitArr[0].substring(0, 1) +
            "" +
            splitArr[1].substring(0, 1)
          ).toUpperCase();
        } else {
          return splitArr[0].substring(0, 1).toUpperCase();
        }
      }
    },
    filters:{
        summary: (val,num)=>{
          if(val.length > num){
            return val.substring(0,num)+".."
          }else{
            return val
          }
        },
        dateFilter: value => {
            const date = new Date(value);
            return date.toLocaleString(["en-US"], {
                month: "short",
                day: "2-digit",
                year: "numeric"
            });
        }
    }
  }
</script>