<template>
  <div @click="$router.push({ path: '/speakers/'+data.id})" style="cursor: pointer;" class="fill-height">
    <v-avatar size="100" v-ripple>
      <v-img :src="getImgUrl(data.image, 'profile.jpg')" :lazy-src="getImgUrl(data.image, 'profile.jpg')">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-avatar>
    <p class="mt-3 mb-0 google-font" style="font-size:110%">{{data.name}}</p>
    <p class="mt-1 mb-0 google-font" style="font-size:80%">{{data.company.name}}</p>
  </div>
</template>

<script>
export default {
  name: "speakerView",
  props: ["data"],
  methods: {
  }
};
</script>