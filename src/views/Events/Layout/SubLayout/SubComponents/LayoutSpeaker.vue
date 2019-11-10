<template>
    <v-dialog
      v-model="dialog"
      width="700"
    >
      <template v-slot:activator="{ on }">
          <div v-on="on" style="cursor: pointer;" class="text-center py-3 ma-1" :class="$vuetify.theme.dark == true?'darkModeCard':'whiteTheme'" >
              <v-avatar size="100">
                    <v-img
                    :src="require('@/assets/img/common/avatar.png')"
                    :lazy-src="require('@/assets/img/common/avatar.png')">
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
                </v-avatar>
                <!-- <p class="mt-3 mb-0 google-font mb-0" style="font-size:120%">{{data.data.name}}</p>
                <p class="mt-1 mb-0 google-font mt-0" style="font-size:80%">{{data.data.designation}}</p>
                <socialMediaDetails :data="{data:data.data.socialLinks}"/> -->
                <p class="mt-3 mb-0 google-font mb-0" style="font-size:120%">Name</p>
                <p class="mt-1 mb-0 google-font mt-0" style="font-size:80%">designation</p>
                <!-- <socialMediaDetails :data="{data:data.data.socialLinks}"/> -->
          </div>
          
      </template>

      <v-card color="">
        <v-card-title
          class="px-5 google-font"
          primary-title
        >
         <!-- {{data.data.name}}  -->
         Name
        </v-card-title>

        <v-card-text class="pa-5">
            <p class="google-font">Designattaion</p>
            <p class="google-font">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quas accusantium quod molestias odit harum porro, consequuntur, optio similique officiis labore soluta iure? Repudiandae temporibus consequuntur non vel libero natus.</p>
            <!-- <socialMediaDetails  class="pl-0 ml-0" :data="{data:data.data.socialLinks}"/> -->
            <!-- <p class="google-font">{{data.data.designation}}</p>
            <p class="google-font">{{data.data.bio}}</p>
            <socialMediaDetails  class="pl-0 ml-0" :data="{data:data.data.socialLinks}"/> -->
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
    import socialMediaDetails from '@/components/common/socialInfo'
  export default {
    components:{
        socialMediaDetails
    },
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
    mounted(){
     
    },
    methods:{
      getImgUrl(pic) {
          if(pic.length>0){
              return require('@/assets/img/team/'+pic)
          }else{
              return require('@/assets/img/common/avatar.png')
          }
      },
      getCharString(data){
          var splitArr = data.split(" ")
          if(splitArr.length>1){
              return (splitArr[0].substring(0,1)+''+splitArr[1].substring(0,1)).toUpperCase()
          }
          else{
              return (splitArr[0].substring(0,1)).toUpperCase()
          }
      },
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        }
    }
  }
</script>

<style scoped>
  .whiteTheme{
    background: white;
    border:1px solid #e0e0e0;
    border-radius:5px
  }
</style>