<template>
  <v-card :loading="loading" class="mx-auto" color="#121212" dark>
    <!-- TESTE -->
    <v-container>
      <v-card>
        <v-row>
          <v-col sm="2" cols="12">
            <v-avatar class="ml-3" size="250" tile>
              <v-img
                :src="album.capa_album ? album.capa_album.url : null"
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col sm="6" cols="12">
            <v-text-field class="titulo_album" v-model="album.nome_album">
            </v-text-field>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <!-- TESTE -->

    <v-col>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(musica, i) in musicas" :key="musica.id">
            <v-list-item-content>
              <v-list-item-title>{{ i + 1 }}</v-list-item-title>
              <v-divider></v-divider>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title
                v-text="musica.titulo_musica"
              ></v-list-item-title>
              <v-divider></v-divider>
            </v-list-item-content>
            <v-list-item-content id="pepino">
              <v-list-item-title
                v-text="musica.tempo_musica"
                class="tempo"
              ></v-list-item-title>
              <v-divider></v-divider>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <!-- <v-list>
        <v-list-item v-for="musica in musicas" :key="musica.id">
          <v-list-item-content>
            {{ musica.id }} - {{ musica.titulo_musica }}
            {{ musica.tempo_musica }}
            <v-divider></v-divider>
          </v-list-item-content>
          <v-list-item-content>
            {{ musica.tempo_musica }}
            <v-divider></v-divider>
          </v-list-item-content>  
        </v-list-item>
      </v-list> -->
    </v-col>
  </v-card>
</template>

<script>
import AlbumService from "@/api/album";
const albumService = new AlbumService();
import MusicaService from "@/api/musica";
const musicaService = new MusicaService();

export default {
  data: () => ({
    loading: false,
    album: {},
    musicas: [],
  }),
  methods: {
    async buscarInfoAlbum() {
      this.album = await albumService.buscarAlbumPorId(this.$route.params.id);
    },
  },
  async mounted() {
    await this.buscarInfoAlbum();
  },
  async created() {
    this.musicas = await musicaService.buscarMusica(
      Number(this.$route.params.id)
    );
  },
};
</script>

<style>
.titulo_album {
  font-size: xx-large;
}
#pepino {
  display: flex;
  justify-content: end;
}
</style>
