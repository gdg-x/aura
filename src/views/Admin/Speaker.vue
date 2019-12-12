<template>
  <v-content class="grey lighten-5">
    <v-container fluid class="text-center">
      <v-row justify="center" align="center">
        <v-col cols="12" md="11">
          <v-toolbar class="elevation-1">
            <v-toolbar-title>Speaker Details:</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-text-field
              flat
              v-model="search"
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-search-web"
              label="Search"
              single-line
              class="hidden-sm-and-down"
            ></v-text-field>
            <AddSpeaker class="ml-2" />
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import AddSpeaker from '@/components/Admin/Speaker/addSpeaker'
export default {
  name: "speakers",
  components:{
    AddSpeaker
  },
  data:()=>({
    search:''
  })
};
</script>

<style>
</style>