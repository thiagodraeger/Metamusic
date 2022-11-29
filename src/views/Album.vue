<template>
    <v-card :loading="loading" class="mx-auto" color="#121212">
    
    <!-- TESTE -->
    <v-container>
      <v-row dense>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar
                class="ma-10"
                size="250"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- TESTE -->
    
    </v-card>
  </template>
  
  <script>
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
          color: '#FFFFFF',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    }),
    methods: {
      async buscarInfoAlbum() {
        this.album = await AlbumService.buscarAlbumPorId(this.$route.params.id);
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

  </style>
  