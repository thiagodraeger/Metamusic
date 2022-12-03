<template>
  <v-card class="mx-auto" color="#121212" dark>
    <v-container>
      <v-col>
        <v-row>
          <v-img
            max-height="150"
            max-width="150"
            :src="artista.foto_artista ? artista.foto_artista.url : null"
          >
          </v-img>
          <v-col>
            <v-card-title
              >{{ artista.nome_artista }}
              <v-btn
                @click="deletarArtista(artista.id)"
                color="secondary"
                fab
                x-small
                dark
                class="ma-2"
              >
                <v-icon>mdi-delete</v-icon></v-btn
              >
            </v-card-title>
            <v-card-subtitle>
              {{ artista.dt_nasc.split("-").reverse().join("/") }}
            </v-card-subtitle>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-card>
</template>

<script>
import ArtistaService from "@/api/artista";
const artistaService = new ArtistaService();
import axios from "axios";

export default {
  async created() {
    this.artistas = await artistaService.buscarArtistas();
  },

  data() {
    return {
      artistas: [],
      artista: {},
      dialog: false,
    };
  },

  methods: {
    async buscarInfoArtista() {
      this.artista = await artistaService.buscarArtistaPorId(
        this.$route.params.id
      );
    },
    async deletarArtista(id) {
      await axios.delete(`api/Artista/${id}/`);
      this.buscarArtistas();
    },
  },
  async mounted() {
    await this.buscarInfoArtista();
  },
};
</script>

<style scoped></style>
