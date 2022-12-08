<template>
  <v-card class="mx-auto" max-width="85%" color="#171717" dark outlined>
    <v-card-title class="pb-0">LOJAS</v-card-title>
    <v-divider color="white"></v-divider>
    <v-container class="lojas mt-4">
      <!-- teste-slide -->
      <v-slide-group v-model="model" class="lojas" show-arrows>
        <v-slide-item v-for="loja in lojas" :key="loja.id">
          <v-card
            link
            :href="loja.link"
            color="#131313"
            class="ma-4 d-flex align-center"
          >
            <v-img :src="loja.src" height="90" width="290"> </v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>

    <!-- NEWS-->
    <v-card-title class="pb-0">NOTÍCIAS</v-card-title>
    <v-divider color="white"></v-divider>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="noticia in noticias" :key="noticia.id" cols="4">
          <!-- cols="12"-->
          <v-card
            link
            :to="`/noticias/${noticias.id}`"
            color="#171717"
            outlined
          >
            <v-container fluid>
              <v-img
                height="250"
                :src="teste.src"
              ></v-img>
              <v-card-title v-text="noticia.titulo_noticia"></v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <div v-text="noticia.conteudo_noticia"></div>
                </v-row>
              </v-card-text>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import NoticiaService from "@/api/noticia";
const noticiaService = new NoticiaService();
export default {
  data() {
    return {
      noticias: [],
      teste: {src: require("@/assets/images/no_image_available.jpeg")},
      lojas: [
        {
          id: 1,
          src: require("@/assets/images/lojaO.png"),
          link: "https://loja.overload.com.br/",
        },
        {
          id: 2,
          src: require("@/assets/images/lojaN.png"),
          link: "https://www.nuclearblast.com/eu/",
        },
        {
          id: 3,
          src: require("@/assets/images/lojaH.png"),
          link: "https://www.pumpkins-store.com/",
        },
        {
          id: 4,
          src: require("@/assets/images/lojaS.png"),
          link: "https://shaman.lojaintegrada.com.br/",
        },
        {
          id: 5,
          src: require("@/assets/images/lojaW.png"),
          link: "https://www.wikimetalstore.com.br/",
        },
        {
          id: 6,
          src: require("@/assets/images/loja4.png"),
          link: "https://www.4fan.com.br/",
        },
      ],
    };
  },
  async created() {
    this.noticias = await noticiaService.buscarNoticias();
  },
};
</script>

<style scoped>
.lojas {
  background-color: #131313;
}
</style>
