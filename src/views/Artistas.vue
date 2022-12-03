<template>
  <div>
    <h1 class="pa-4 white--text" fluid>
      Artistas

      <!-- POPUP -->
      <v-dialog v-model="dialog" width="500" dark overlay-color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab x-small dark class="mb-3" v-bind="attrs" v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 lighten-2">
            Adicione uma Banda
            <v-btn fab x-small @click="dialog = false" right absolute depressed>
              <v-icon color="red">mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>
          <v-col>
            <v-form>
              <v-file-input
                hide-details
                class="mb-3"
                dense
                outlined
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-upload"
                label="Foto"
                v-model="artista.foto_artista"
              >
              </v-file-input>
              <v-text-field
                hide-details
                class="mb-3"
                label="Nome"
                outlined
                dense
                v-model="artista.nome_artista"
              ></v-text-field>
              <v-text-field
                hide-details
                class="mb-3"
                label="Data de Nascimento"
                outlined
                dense
                type="date"
                v-model="artista.dt_nasc"
              ></v-text-field>
            </v-form>
          </v-col>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="CriarArtista">
              Adicionar
            </v-btn>
            <!-- @click="dialog = false" -->
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- FIM-POPUP -->
    </h1>

    <v-container fluid>
      <v-row dense>
        <v-col v-for="artista in artistas" :key="artista.id" cols="2">
          <v-card link :to="`/artista/${artista.id}`">
            <v-img
              :src="artista.foto_artista ? artista.foto_artista.url : null"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.5)"
              height="150px"
            >
              <v-card-title v-text="artista.nome_artista"></v-card-title>
              <v-card-subtitle v-text="artista.ano_criacao"></v-card-subtitle>
              <!-- DELETAR -->
              <!-- <v-btn
            @click="deletarArtista(artista.id)"
            color="secondary"
            fab
            x-small
            dark
            class="ma-2"
          >
            <v-icon>mdi-delete</v-icon></v-btn> -->
              <!-- DELETAR -->
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ArtistaService from "@/api/artista";
import axios from "axios";

const artistaService = new ArtistaService();
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
    async buscarArtistas() {
      const { data } = await axios.get("api/Artista/");
      this.artistas = data;
    },
    async CriarArtista() {
      await axios.post("api/Artista/", this.artista);
      this.buscarArtistas();
    },
    async deletarArtista(id) {
      await axios.delete(`api/Artista/${id}/`);
      this.buscarArtistas();
    },
  },
};
</script>

<!-- <script>
// import ArtistaService from "@/api/artista";
// import axios from "axios";

// const artistaService = new ArtistaService();
// export default {
//   async created() {
//     this.artistas = await artistaService.buscarArtistas();
//     console.log(this.artistas)
//   },
      
//   data() {
//     return {
//       artistas: [],
//       artista: {},
//       dialog: false,
//       };
//     },

//   methods: {
//     async buscarArtistas() {
//     const { data } = await axios.get("api/Artista/");
//     this.bandas = data;
//   },
// }
// };
// </script> -->

<style></style>
