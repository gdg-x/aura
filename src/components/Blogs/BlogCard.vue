<template>
          <div 
            :class="$vuetify.theme.dark == true?'darkModeCard':'lightModeCard'" 
            class="pa-0">
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
      </template>
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

<style scoped>
  img,figure{
    width:100%
  }
</style>