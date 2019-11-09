<template>
  <div>
    <div 
      :class="$vuetify.theme.dark == true?'darkModeCard':'lightModeCard'" 
      class="pa-0 hidden-sm-and-down">
        <v-img
              :src="data.data.thumbnail"
              :lazy-src="data.data.thumbnail"
              width="100%"
              cover
              style="border-radius:5px"
              height="200px"
          >
              <template v-slot:placeholder>
                  <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                  >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
              </template>
          </v-img>
          <div class="pa-3">
            <p class="google-font ma-0 mt-2" style="font-size:120%;" >{{data.data.title | summary(30) }}</p>
            <p class="google-font mt-0 mb-0" style="font-size:90%;">{{data.data.pubDate}}</p>
            <p class="google-font mt-0 mb-4" style="font-size:90%;">{{data.data.author }}</p>
            <!-- <v-chip x-small v-for="(item,i) in data.data.categories" outlined :key="i">{{item}}</v-chip> -->
            <a target="_blank" :href="data.data.link" class="mb-0 mt-0 google-font" style="color:#1a73e8;text-decoration:none">Read</a>
          </div>
        
    </div>

    <div class="d-md-none d-lg-none">
      <v-card
        class="mx-auto"
        max-width="100%"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class=" mb-4 google-font">{{data.data.pubDate | dateFilter}}</div>
            <v-list-item-title class="mb-1 google-font" style="font-size:120%">{{data.data.title | summary(30)}}</v-list-item-title>
            <!-- <v-list-item-subtitle class="google-font">{{data.data.author}}</v-list-item-subtitle> -->
            <!-- <v-list-item-subtitle class="google-font" v-html="$options.filters.summary(data.data.description,180)"></v-list-item-subtitle> -->
            <v-list-item-subtitle class="google-font mb-0" v-html="$options.filters.summary(filterData(data.data.description),100)"></v-list-item-subtitle>
            <!-- <p class="google-font mt-0 mb-0" style="font-size:70%;">{{data.data.author}}</p> -->
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="100"
            color="grey"
          >
            <v-img :src="data.data.thumbnail" alt=""/>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn :href="data.data.link" target="_blank" text>Read</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
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
      filterData(d){
        let r =d.replace(/<img[^>]*>/gi,"");
        return r
        console.log(r)
      },
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

<style scoped>
  img,figure{
    width:100%
  }
</style>