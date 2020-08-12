<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="4" class>
        <p class="google-font mb-0" style="font-size:150%">¿Qué hacemos?</p>
        <p
          class="google-font mt-0"
          style="font-size:95%"
        >Los GDGs (Google Developer Groups) son para entusiastas, estudiantes y desarrolladores
          que estén interesados en aprender y en compartir sus conocimientos sobre las tecnologías
          de Google y de otros, para el desarrollo de software y hardware.</p>
        <p class="google-font" style="font-size:95%">Estas son algunas de las tecnologías de Google de las que hablamos:</p>
        <span v-for="(item,i) in whatwedodata" :key="i">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <a :href="item.link" target="_blank" class="ma-0 mx-3" rel="noreferrer">
                <img :src="getImgUrl(item.image)" width="25vh" alt srcset dark v-on="on" />
              </a>
              &nbsp;&nbsp;&nbsp;
            </template>
            <span>{{item.TechName}}</span>
          </v-tooltip>
        </span>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="8">
        <v-container fluid>
          <v-row>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-comment</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Charlas</p>
             <p
                class="google-font"
                style="font-size:95%"
              >Aprende de experimentados Speakers. Actualízate con las últimas técnicas, metodologías, buenas prácticas, noticias y anuncios.</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-code-tags</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Codelabs</p>
              <p
                class="google-font"
                style="font-size:95%"
              >Son tutoriales puestos a disposición para aprender algo nuevo. Adquieres experiencia práctica y ¡claro que puedes pedir ayuda!</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-school</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Study Jams</p>
              <p
                class="google-font"
                style="font-size:95%"
              >Conformamos grupos de estudio y realizamos talleres impartidos por miembros más experimentados de la comunidad.</p>
            </v-col>
             <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-chart-bubble</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Fiestas para ver eventos EN VIVO</p>
              <p
                class="google-font"
                style="font-size:95%"
              >Nos reunimos para ver un evento importante de la industria y poder comentarlo en comunidad.</p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import whatwedodata from "@/assets/data/whatwedo.json";
export default {
  name: "App",
  data: () => ({
    whatwedodata: whatwedodata
  }),
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    }
  }
};
</script>