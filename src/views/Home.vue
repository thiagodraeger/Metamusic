<template>
  <v-card class="mx-auto" max-width="85%" color="#171717" dark outlined>
<!-- Lojas -->
    <v-card-title class="pb-0">LOJAS</v-card-title>
    <v-divider color="white"></v-divider>
    <v-container class="lojas mt-4">
      <v-row>
        <v-col v-for="loja in lojas" :key="loja.id" cols="2" class="d-flex align-center">
          <v-card link :href="loja.link" color="#131313" outlined>
            <v-img :src="loja.src">
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
<!-- NEWS -->
    <v-card-title class="pb-0">NEWS</v-card-title>
    <v-divider color="white"></v-divider>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="noticia in noticias" :key="noticia.title" cols="4">
          <v-card link :to="noticia.to" color="#171717" outlined>
            <v-container fluid>
              <v-img height="250" :src="noticia.src"></v-img>
              <v-card-title v-text="noticia.title"></v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <div v-text="noticia.text"></div>
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
export default {
  data: () => ({
    noticias: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        text: "Quia est omnis nostrum voluptatum repudiandae eos eum itaque.",
        flex: 6,
        to: "/noticias/n1",
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        text: "Ut officiis ut ratione placeat reprehenderit ut at veniam. Quo id quod non fuga accusamus assumenda quidem corporis itaque.",
        flex: 6,
        to: "/noticias/n2",
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        text: "Deserunt quo quibusdam nostrum. Mollitia ea doloremque nobis harum. Quod veniam laborum sunt dolores.",
        flex: 6, 
        to: "/noticias/n3",
      },
    ],
    lojas: [
        {
          id: 1,
          src: require('@/assets/images/lojaO.png'),
          link: "https://loja.overload.com.br/",
        },
        {
          id: 2,
          src: require('@/assets/images/lojaN.png'),
          link: "https://www.nuclearblast.com/eu/",
        },
        {
          id: 3,
          src: require('@/assets/images/lojaH.png'),
          link: "https://www.pumpkins-store.com/",
        },
        {
          id: 4,
          src: require('@/assets/images/lojaS.png'),
          link: "https://shaman.lojaintegrada.com.br/",
        },
        {
          id: 5,
          src: require('@/assets/images/lojaW.png'),
          link: "https://www.wikimetalstore.com.br/",
        },
        {
          id: 6,
          src: require('@/assets/images/loja4.png'),
          link: "https://www.4fan.com.br/",
        },
      ],
  }),
};
</script>

<style scoped>
.lojas{
 background-color: #131313;
}
</style>
