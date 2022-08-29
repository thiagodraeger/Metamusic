<template>
  <v-card class="mx-auto" max-width="85%" color="#171717" dark outlined>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="noticia in noticias" :key="noticia.title">
          <v-card-title v-text="noticia.title"></v-card-title>
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
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        text: "Deserunt quo quibusdam nostrum. Mollitia ea doloremque nobis harum. Quod veniam laborum sunt dolores.",
        flex: 6, 
        to: "/noticias/n3",
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
