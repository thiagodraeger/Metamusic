<template>
  <v-card class="mx-auto" color="#121212">
    <v-img height="400" :src="banda.capa_banda ? banda.capa_banda.file : null">
      <v-row>
        <v-card-title class="nomebanda">
          {{ banda.nome_banda }}
          <a target="_blank" :href="banda.link_spotify">
            <v-icon
              display="flex"
              color="#1DB954"
              type="submit"
              class="spotify pa-2"
              size="38px"
              >{{ "mdi-spotify" }}
            </v-icon>
          </a>
          <v-col>
            <v-row>
              <v-btn
                v-if="user && user.is_staff"
                href="/Bandas"
                x-small
                light
                class="ma-1"
                @click="deletarBanda(banda.id)"
                dark
              >
                <v-icon>mdi-delete</v-icon></v-btn
              >
            </v-row>
            <v-row>
              <!-- POPUP -->
              <v-dialog v-model="dialog" width="500" dark overlay-color="black">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-if="user && user.is_staff"
                    v-bind="attrs"
                    v-on="on"
                    x-small
                    light
                    class="ma-1"
                    dark
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="text-h5 lighten-2">
                    Edite a Banda
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
                        ref="file1"
                        @change="uploadFile1"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-upload"
                        label="Foto da Banda"
                        v-model="banda.foto"
                        @keydown.enter="editarBanda"
                      >
                      </v-file-input>
                      <v-file-input
                        hide-details
                        class="mb-3"
                        dense
                        outlined
                        ref="file2"
                        @change="uploadFile2"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-upload"
                        label="Banner da Banda"
                        v-model="banda.capa_banda"
                        @keydown.enter="editarBanda"
                      >
                      </v-file-input>
                      <v-text-field
                        hide-details
                        class="mb-3"
                        label="Nome da Banda"
                        outlined
                        dense
                        v-model="banda.nome_banda"
                        @keydown.enter="editarBanda"
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
                        @keydown.enter="editarBanda"
                      ></v-select>
                      <v-text-field
                        hide-details
                        class="mb-3"
                        label="Ano de Criação"
                        outlined
                        dense
                        type="number"
                        v-model="banda.ano_criacao"
                        @keydown.enter="editar"
                      ></v-text-field>
                      <v-textarea
                        hide-details
                        class="mb-3"
                        dense
                        outlined
                        label="Descrição da Banda"
                        v-model="banda.desc_banda"
                        @keydown.enter="editar"
                      ></v-textarea>
                    </v-form>
                  </v-col>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="editarBanda">
                      Salvar
                    </v-btn>
                    <!-- @click="dialog = false" -->
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <!-- FIM-POPUP -->
            </v-row>
          </v-col>
        </v-card-title>
      </v-row>
    </v-img>

    <v-card-title class="white--text titulo"> Integrantes</v-card-title>

    <v-card-text class="white--text">
      <v-row
        align="center"
        class="mx-0 text-subtitle-1"
        v-for="(integrante, index) in banda.integrantes"
        :key="index"
        >- {{ integrante.nome_artista }}
      </v-row>
    </v-card-text>

    <v-card-title class="white--text titulo"> Sobre a banda</v-card-title>
    <v-card-text class="white--text">
      <v-row align="center" class="mx-0 text-subtitle-1 ano">
        Criada em {{ banda.ano_criacao }}</v-row
      >

      <div class="my-4 texto">{{ banda.desc_banda }}</div>
    </v-card-text>

    <v-card-title class="white--text titulo">Discografia</v-card-title>
    <v-container>
      <v-row dense>
        <v-col v-for="album in albums" :key="album.id" cols="2">
          <v-card link :to="`/albums/${album.id}`" class="card">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-img
                :src="album.capa_album ? album.capa_album.url : null"
              ></v-img>
            </div>
            <div class="Album">
              <v-card-title v-text="album.nome_album"></v-card-title>
              <v-card-subtitle v-text="album.ano_lancamento"></v-card-subtitle>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import BandaService from "@/api/banda";
const bandaService = new BandaService();
import AlbumService from "@/api/album";
const albumService = new AlbumService();
import ArtistaService from "@/api/artista";
const artistaService = new ArtistaService();

import axios from "axios";
import { mapState } from "vuex";

export default {
  data: () => ({
    dialog: false,
    banda: {},
    albums: [],
    artistas: [],
  }),
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    uploadFile1() {
      this.foto_banda = this.$refs.file1["internalValue"];
    },
    uploadFile2() {
      this.capa_banda = this.$refs.file2["internalValue"];
    },
    async submitFile(image) {
      console.log(image);
      const formData = new FormData();
      formData.append("file", image);
      const headers = { "Content-Type": "multipart/form-data" };
      const { data } = await axios.post(
        `${axios.defaults.baseURL}api/media/images/`,
        formData,
        { headers }
      );
      return data.attachment_key;
    },
    async buscarInfoBanda() {
      this.banda = await bandaService.buscarBandaPorId(this.$route.params.id);
    },
    async deletarBanda(id) {
      await axios.delete(`api/Banda/${id}/`);
      this.buscarInfoBanda();
    },
    async editarBanda() {
      try {
        let integrantesID = [];
        this.banda.integrantes.forEach((integrante) =>
          integrantesID.push(integrante.id)
        );
        this.banda["integrantes"] = integrantesID;
        if (this.foto_banda !== undefined) {
          console.log(this.foto_banda);
          this.banda.foto_attachment_key = await this.submitFile(
            this.foto_banda
          );
        }
        if (this.capa_banda !== undefined) {
          console.log(this.capa_banda);
          this.banda.capa_banda_attachment_key = await this.submitFile(
            this.capa_banda
          );
        } 
        await axios.patch(`api/Banda/${this.banda.id}/`, this.banda);
        this.buscarInfoBanda();
      } catch (e) {
        console.log(e);
      }
      this.dialog = false;
    },
  },
  async mounted() {
    await this.buscarInfoBanda();
  },
  async created() {
    this.albums = await albumService.buscarAlbum(Number(this.$route.params.id));
    this.artistas = await artistaService.buscarArtistas();
  },
};
</script>
<style scoped>
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
.Album {
  background-color: #171717;
  color: white;
}
.card {
  border-radius: 15px;
}
.nomebanda {
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 80px;
  padding: 25px;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.4);
}
.texto {
  font-size: 17px;
}

.ano {
  font-weight: bold;
}

.titulo {
  text-decoration: underline;
  font-size: 20px;
}
</style>
