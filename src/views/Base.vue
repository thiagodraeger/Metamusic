<template>
  <v-card :loading="loading" class="mx-auto" color="#121212">
    <v-img height="400" :src="banda.capa_banda ? banda.capa_banda.url : null">
      <v-row>
        <v-card-title class="nomebanda">
          {{ banda.nome_banda }}
          <form action="https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y">
            <v-icon
              display="flex"
              color="#1DB954"
              type="submit"
              class="spotify pa-2"
              v-on:click="enviar()"
              size="38px"
              >{{ "mdi-spotify" }}</v-icon
            >
          </form>
        </v-card-title>
      </v-row>
    </v-img>

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
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-img
                :src="album.capa_album ? album.capa_album.url : null"
                class="border-radius-5"
              ></v-img>
            </div>
            <div>
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

export default {
  data: () => ({
    show: false,
    loading: false,
    banda: {},
    albums: [],
    items: [
      {
        color: "#9e9e9e",
        src: "https://www.pindula.co.zw/images/a/a7/No_Image.jpg",
        title: "Exemplo",
        dt: "0000",
      },
    ],
  }),
  methods: {
    async buscarInfoBanda() {
      this.banda = await bandaService.buscarBandaPorId(this.$route.params.id);
    },
  },
  async mounted() {
    await this.buscarInfoBanda();
  },
  async created() {
    this.albums = await albumService.buscarAlbum(Number(this.$route.params.id));
  },
};
</script>
<style scoped>
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
}
</style>