<template>
  <div>
    <h1 class="pa-4 white--text" fluid>
      Bandas
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
                label="Foto da Banda"
                v-model="banda.foto"
                @keydown.enter="CriarBanda"
              >
              </v-file-input>
              <v-file-input
                hide-details
                class="mb-3"
                dense
                outlined
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-upload"
                label="Banner da Banda"
                v-model="banda.capa_banda"
                @keydown.enter="CriarBanda"
              >
              </v-file-input>
              <v-text-field
                hide-details
                class="mb-3"
                label="Nome da Banda"
                outlined
                dense
                v-model="banda.nome_banda"
                @keydown.enter="CriarBanda"
              ></v-text-field>
              <v-select
                class="mb-3"
                hide-details
                dense
                multiple
                :items="artistas"
                item-text="nome_artista"
                item-value="id"
                label="Artistas"
                outlined
                v-model="banda.integrantes"
                @keydown.enter="CriarBanda"
              ></v-select>
              <v-text-field
                hide-details
                class="mb-3"
                label="Ano de Criação"
                outlined
                dense
                type="number"
                v-model="banda.ano_criacao"
                @keydown.enter="CriarBanda"
              ></v-text-field>
              <v-textarea
                hide-details
                class="mb-3"
                dense
                outlined
                label="Descrição da Banda"
                v-model="banda.desc_banda"
                @keydown.enter="CriarBanda"
              ></v-textarea>
            </v-form>
          </v-col>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="CriarBanda">
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
        <v-col v-for="banda in bandas" :key="banda.id" cols="3">
          <v-card link :to="`/banda/${banda.id}`">
            <v-img
              :src="banda.foto ? banda.foto.file : null"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.5)"
              height="250px"
            >
              <v-card-title v-text="banda.nome_banda"></v-card-title>
              <v-card-subtitle v-text="banda.ano_criacao"></v-card-subtitle>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BandaService from "@/api/banda";
import ArtistaService from "@/api/artista";
import axios from "axios";

const bandaService = new BandaService();
const artistaService = new ArtistaService();
export default {
  async created() {
    this.bandas = await bandaService.buscarBandas();
    this.artistas = await artistaService.buscarArtistas();
  },

  data() {
    return {
      bandas: [],
      banda: {},
      artistas: [],
      artista: {},
      dialog: false,
    };
  },

  methods: {
    async buscarBandas() {
      const { data } = await axios.get("api/Banda/");
      this.bandas = data;
    },
    async buscarArtistas() {
      const { data } = await axios.get("api/Artista/");
      this.artistas = data;
    },
    async CriarBanda() {
      await axios.post("api/Banda/", this.banda);
      this.buscarBandas();
      this.dialog = false;
    },
    
  },
};
</script>

<style>
</style>
