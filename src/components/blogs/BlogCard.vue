<template>
  <div>
    <v-card
      class="mx-auto pa-2"
      max-width="100%"
      flat
      :class="$vuetify.theme.dark ? 'aura-card-dark' : 'aura-card-light'"
    >
      <v-list-item three-line>
        <!-- <v-list-item-avatar tile size="90" style="border-radius: 12px !important;" color="grey">
          <v-img :src="data.data.thumbnail" alt="" />
        </v-list-item-avatar> -->
        <v-list-item-content>
          <div class="google-font">
            <p style="font-size: 120%" class="mb-1">
              <b>{{ data.data.title | summary(30) }}</b>
            </p>
            <p style="font-size: small;" class="my-2"><v-icon size="20">mdi-account-outline</v-icon> {{ data.data.author }}</p>
            <p class="mb-4" style="font-size: 80%">
              Published on {{ convtDate(data.data.pubDate) }}
            </p>

            <v-btn
              rounded
              depressed
              small
              right
              class="mb-0 mt-2 google-font"
              :href="data.data.link"
              :color="$vuetify.theme.dark ? '#585B5A' : '#DEE4EA'"
              >See More
              <v-icon right>mdi-arrow-right-thin</v-icon>
            </v-btn>

          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      data: {},
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    filterData(d) {
      let r = d.replace(/<img[^>]*>/gi, "");
      return r;
    },
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) {
        return val.substring(0, num) + "..";
      } else {
        return val;
      }
    },
  },
};
</script>
