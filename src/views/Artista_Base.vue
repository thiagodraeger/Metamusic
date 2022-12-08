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
            <v-card-title>{{ artista.nome_artista }} </v-card-title>
            <v-card-subtitle>
              {{ data_nascimento }}
            </v-card-subtitle>
          </v-col>
          <v-col align-self="center">
            <v-row justify="end">
              <v-btn
                href="/Artistas"
                fab
                x-small
                dark
                class="ma-1"
                @click="deletarArtista(artista.id)"
              >
                <v-icon>mdi-delete</v-icon></v-btn
              >
            </v-row>
            <v-row justify="end">
              <v-dialog v-model="dialog" width="500" dark overlay-color="black">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" fab x-small dark class="ma-1">
                    <v-icon>mdi-pencil</v-icon></v-btn
                  >
                </template>
                <v-card>
                  <v-card-title class="text-h5 lighten-2">
                    Edite o Artista
                    <v-btn
                      fab
                      x-small
                      @click="dialog = false"
                      right
                      absolute
                      depressed
                    >
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
                    <v-btn color="green darken-1" text @click="editarArtista">
                      Salvar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
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
  async listarArtistas() {
    this.artistas = await artistaService.buscarArtistas();
  },

  data() {
    return {
      artistas: [],
      artista: {
        dt_nasc: "",
      },
      dialog: false,
    };
  },
  computed: {
    data_nascimento() {
      return this.artista.dt_nasc.split("-").reverse().join("/");
    },
  },

  methods: {
    async buscarInfoArtista() {
      this.artista = await artistaService.buscarArtistaPorId(
        this.$route.params.id
      );
    },
    async deletarArtista(id) {
      await axios.delete(`api/Artista/${id}/`);
      this.buscarInfoArtista();
    },
    async editarArtista() {
      try {
        await axios.put(`api/Artista/${this.artista.id}/`, this.artista);
        this.buscarInfoArtista();
      } catch (e) {
        console.log(e);
      }
      this.dialog = false;
    },
  },
  async created() {
    await this.buscarInfoArtista();
  },
};
</script>

<style scoped></style>
