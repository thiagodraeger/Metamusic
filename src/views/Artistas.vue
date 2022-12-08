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
            Adicione um Artista
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
                type="file"
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-upload"
                label="Foto"
                v-model="artista.foto_artista"
                :append-icon="'mdi-send'"
              @click:append="uploadFile"
              >
              </v-file-input>
              <v-text-field
                hide-details
                class="mb-3"
                label="Nome"
                outlined
                dense
                v-model="artista.nome_artista"
                @keyup.enter="CriarArtista"
              ></v-text-field>
              <v-text-field
                hide-details
                class="mb-3"
                label="Data de Nascimento"
                outlined
                dense
                type="date"
                v-model="artista.dt_nasc"
                @keyup.enter="CriarArtista"
              ></v-text-field>
            </v-form>
          </v-col>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="CriarArtista">
              Adicionar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- FIM-POPUP -->
    </h1>

    <v-container fluid>
      <v-row dense>
        <v-col v-for="artista in artistas" :key="artista.id" cols="3">
          <v-card link :to="`/artista/${artista.id}`">
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
      this.dialog = false;
    },
    uploadFile() {
      this.Images = this.$refs.file.files[0];
    },
    async submitFile() {
      const formData = new FormData();
      formData.append("file", this.Images);
      const headers = { "Content-Type": "multipart/form-data" };
      const { data } = await axios.post(
        "https://metamusic.pythonanywhere.com/media/image",
        formData,
        { headers }
      );
      this.artista.foto_artista_attachment_key = data.attachment_key;
      await axios.post("https://metamusic.pythonanywhere.com/", this.artista);
      this.$swal("Cachorro registrado com sucesso!"),
        this.$router.push("/Artista");
    },
  },
};
</script>

<style></style>
