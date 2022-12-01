<template>
    <div>
      <h1 class="pa-4 white--text" fluid>Artistas
      </h1>
  
      <v-container fluid>
        <v-row dense>
          <v-col v-for="artista in artistas" :key="artista.id" cols="3">
            <v-card link :to="`/artistas/${artista.id}`">
              <v-img
                :src="artista.foto_artista ? artista.foto_artista.url : null"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.5)"
                height="250px"
              >
                <v-card-title v-text="artista.nome_artista"></v-card-title>
                <v-card-subtitle v-text="artista.ano_criacao"></v-card-subtitle>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
    import ArtistaService from "@/api/artista";

    const artistaService = new ArtistaService();
    export default {
      async created() {
        this.artistas = await artistaService.buscarArtistas();
        console.log(this.artistas)
      },
      
      data() {
        return {
          artistas: [],
          artista: {},
          dialog: false,
        };
      },
    };
  </script>
  
  <style>
  
  </style>
  