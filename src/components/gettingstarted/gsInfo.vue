<template>
  <v-container fluid>
    <p class="google-font mb-0" style="font-size:150%;color: #1a73e8;"></p>
    <br />

    <v-list two-line>
      <template v-for="item in resources.items">
        <v-list-item :key="item">
          <v-list-item-content>
            <!-- <v-list-item-title style="font-size:150% ma-2">
              <b>{{item.name}}</b>
            </v-list-item-title> -->
            <v-list-item class="ma-2 google-font">{{item.desc}}</v-list-item>
            <v-list-item v-for="entry in item.values" :key="entry">
              <div>
                <li>
                  <span>
                    <a :href="entry.link" class="google-font">{{entry.name}}</a>
                    <span v-show="entry.desc" class="google-font"> - {{entry.desc}}</span>
                  </span>
                </li>
              </div>
            </v-list-item>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <br />
  </v-container>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import trainingData from "@/assets/data/trainingData.json";
import resources from "@/assets/data/resources.json";
export default {
  name: "App",
  data: () => ({
    communityData: communityData,
    trainingData: trainingData,
    resources: resources,
    dialog: false,
    dialogData: {
      name: "",
      date: "",
      link: ""
    }
  }),
  computed: {
    color_mode() {
      if (this.$vuetify.theme.dark) return "darkModeContainer";
      return "lightModeContainer";
    },
    moveForBottomNavStyle() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return "z-index: 10; bottom: 60px";
      } else {
        return "";
      }
    }
  },
  methods: {
    make_linkable(str) {
      return str.replace(/\s+/g, "-").toLowerCase();
    },
    passItemData(item) {
      this.dialogData = item;
    }
  }
};
</script>