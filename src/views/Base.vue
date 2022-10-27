<template>
 <v-card :loading="loading" class="mx-auto" color="#121212">
   <v-img height="300" position="right 50% top 25%" src="https://img.freepik.com/fotos-gratis/parede-texturizada-cinza_53876-88964.jpg?w=2000"></v-img>
 
   <v-card-title class="white--text"> {{ banda.nome_banda }} - {{ $route.params.id }}
     <form action="https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y">
       <v-icon
         display="flex"
         color="#1DB954"
         type="submit"
         class="spotify pa-2"
         v-on:click="enviar()"
         >{{ "mdi-spotify" }}</v-icon
       >
     </form>
   </v-card-title>

   <v-card-text class="white--text">
     <v-row align="center" class="mx-0  text-subtitle-1"> Criada em {{banda.ano_criacao}}</v-row>
 
     <div class="my-4">{{banda.desc_banda}}</div>

   </v-card-text>
 
   <v-container>
     <v-row dense>
       <v-col v-for="(item, i) in items" :key="i" cols="2">
         <v-card :color="item.color">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar class="ma-2" size="170" tile>
                <v-img :src="item.src" class="border-radius-5"></v-img>
              </v-avatar> 
            </div>
            <div>
              <v-card-title v-text="item.title"></v-card-title>
              <v-card-subtitle v-text="item.dt"></v-card-subtitle> 
            </div>
         </v-card>
       </v-col>
     </v-row>
   </v-container>
 </v-card>
</template>
 

<script>
import BandaService from '@/api/banda'
const bandaService = new BandaService()
export default {
 data: () => ({
   show: false,
   loading: false,
   banda: {},
   items: [
     {
       color: "#FF0000",
       src: "https://upload.wikimedia.org/wikipedia/pt/7/78/AngraAngelsCry.jpg",
       title: "Angels Cry",
       dt: "1993",
       music1: "Unfinished Allegro",
       music2: "Carry On",
       music3: "Time",
       music4: "Angels Cry",
       music5: "Stand Away",
       music6: "Never Understand",
       music7: "Wuthering Heights",
       music8: "Streets of Tomorrow",
       music9: "Evil Warning",
       music10: "Lasting Child",
     },
   ],
 
   
 }),
 methods: {
    async buscarInfoBanda() {
      this.banda = await bandaService.buscarBandaPorId(this.$route.params.id)
    }
   },
   async mounted() {
    await this.buscarInfoBanda()
   }
};
</script>