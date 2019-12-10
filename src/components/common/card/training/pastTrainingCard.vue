<template>
    <v-list two-line subheader class="py-0" :class="$vuetify.theme.dark == true?'black':'white'">
        <v-list-item
        >
            <v-list-item-avatar>
                <v-avatar :class="$vuetify.theme.dark == true?'grey darken-3':'grey lighten-2'" >
                    <span class="google-font" style="width:100vh">{{getCharString(data.data.name)}}</span>
                </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title class="google-font" v-text="data.data.name"></v-list-item-title>
                <v-list-item-subtitle class="google-font">{{ data.data.local_date | dateFilter}} | {{ data.data.local_time }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
            <v-btn icon :href="data.data.link" target="_blank">
                <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
            </v-list-item-action>
        </v-list-item>

        <v-divider inset></v-divider>
    </v-list>
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