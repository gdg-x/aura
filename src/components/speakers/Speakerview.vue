<template>
  <div @click="$router.push({ path: '/speakers/'+da.id})" style="cursor: pointer;">
    <v-avatar size="100" v-ripple>
      <v-img :src="getImgUrl(da.image)">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-avatar>
    <p class="mt-3 mb-0 google-font" style="font-size:110%">{{da.name}}</p>
    <p class="mt-1 mb-0 google-font" style="font-size:80%">{{da.company.name}}</p>
  </div>
</template>

<script>
export default {
  name: "speakerView",
  props: ["da"],
  methods: {
    getImgUrl(pic) {
      if (pic.length > 0) {
        return pic;
      } else {
        return require("@/assets/logo.png");
      }
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
  }
};
</script>