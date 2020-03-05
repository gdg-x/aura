<template>
  <v-card outlined :href="item.link" :target='item.link[0] == "/" ? "" : "_blank"'  class="pa-2 ma-2" flat>
    <!--<toolBlock v-if="item.tools" :tools="item.tools" />-->
    <v-icon v-if="item.icon" large style="font-size:300%">{{ item.icon }}</v-icon>
    <img
      v-else-if="item.svg"
      :src="require('@/assets/img/svg/' + item.svg + '.svg')"
      v-on="on"
      dark
      style="max-width: 32px; max-height: 32px;"
    />
    <p class="google-font mt-2 title align-bottom">{{ make_readable(item.name) }}</p>
    <p class="google-font" style="font-size:95%;">{{ item.desc }}</p>
  </v-card>
</template>

<script>
//import toolBlock from "@/components/home/wwdComponents/toolBlock.vue";
export default {
  props: {
    item: Object
  },
  components: {
    //toolBlock
  },
  methods: {
    make_readable(str) {
      return str.replace(/_/, " ");
    }
  }
};
</script>
