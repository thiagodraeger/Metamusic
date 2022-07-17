dirb<template>
 <v-card :loading="loading" class="mx-auto" color="#171717">
   <v-img height="300" src="@/assets/images/angra.jpg"></v-img>
 
   <v-card-title class="white--text"> Angra
     <form action="https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y">
       <v-icon
         display="flex"
         color="green"
         type="submit"
         class="spotify pa-2"
         v-on:click="enviar()"
         >{{ "mdi-spotify" }}</v-icon
       >
     </form>
   </v-card-title>

   <v-card-text class="white--text">
     <v-row align="center" class="mx-0"> (1991 - atualmente) </v-row>
 
     <div class="my-4 text-subtitle-1">Brasil</div>
 
     <div>
       Angra é uma banda brasileira de metal, formada na cidade de São Paulo em
       1991, pelos musicos Andre Matos (Vocalista do viper entre 1985-1990),
       Rafael Bittencourt e André Linhares. A banda foi formada com a proposta
       de fundir a agressividade do heavy metal, os ritmos étnicos brasileiros
       e a sofisticação da música erudita.
       <br />
       A banda atualmente esta na sua terceira formação, formada pelos musicos
       Rafael Bittencourt (1991-presente), Felipe Andreoli (2001-presente),
       Fabio Lione (2013-presente), Bruno Valverde (2014-presente), Marcelo
       Barbosa (2015-presente).
     </div>
   </v-card-text>
 
   <v-container>
     <v-row dense>
       <v-col v-for="(item, i) in items" :key="i" cols="6">
         <v-card :color="item.color">
           <div class="d-flex flex-no-wrap justify-space-between">
             <div>
               <v-card-title
                 class="text-h5"
                 v-text="item.title"
               ></v-card-title>
 
               <v-card-subtitle v-text="item.dt"></v-card-subtitle>
 
               <v-card-actions>
                 <v-btn
                   icon
                   @click="show = !show"
                   width="40px"
                   height="40px"
                   class="mt-3"
                 >
                   <v-icon>{{
                     show ? "mdi-chevron-up" : "mdi-chevron-down"
                   }}</v-icon>
                 </v-btn>
               </v-card-actions>
 
               <v-expand-transition>
                 <div v-show="show">
                   <v-card-text>
                     <ul v-text="item.music1"></ul>
                     <ul v-text="item.music2"></ul>
                     <ul v-text="item.music3"></ul>
                     <ul v-text="item.music4"></ul>
                     <ul v-text="item.music5"></ul>
                     <ul v-text="item.music6"></ul>
                     <ul v-text="item.music7"></ul>
                     <ul v-text="item.music8"></ul>
                     <ul v-text="item.music9"></ul>
                     <ul v-text="item.music10"></ul>
                     <ul v-text="item.music11"></ul>
                     <ul v-text="item.music12"></ul>
                     <ul v-text="item.music13"></ul>
                   </v-card-text>
                 </div>
               </v-expand-transition>
             </div>
 
             <v-avatar class="ma-3" size="130" tile>
               <v-img :src="item.src"></v-img>
             </v-avatar>
           </div>
         </v-card>
       </v-col>
     </v-row>
   </v-container>
 </v-card>
</template>
 
 
 
 
 
<script>
export default {
 data: () => ({
   show: false,
   items: [
     {
       color: "#FF0000",
       src: "https://upload.wikimedia.org/wikipedia/pt/7/78/AngraAngelsCry.jpg",
       link: "https://open.spotify.com/album/1VYp1m8Eo4AApycV8S44a7",
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
     {
       color: "#FFFFE0",
       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGuhJO_gplxhjdr8gT3WkAAuf8Y7zxN_rNaq_xE5s92jRY0zBklwxVsWjjW7mkVc7tds&usqp=CAU",
       title: "Holy Land",
       dt: "1996",
       music1: "Crossing",
       music2: "Nothing to Say",
       music3: "Silence and Distance",
       music4: "Carolina IV",
       music5: "Holy Land",
       music6: "The Shaman",
       music7: "Make Believe",
       music8: "Z.I.T.O.",
       music9: "Deep Blue",
       music10: "Lullaby for Lucifer",
     },
     {
       color: "#8B0000",
       src: "https://roadie-metal.com/wp-content/uploads/2017/05/AngraFireworks-capa.jpg",
       title: "Fireworks",
       dt: "1998",
       music1: "Wings of Reality",
       music2: "Petrified Eyes",
       music3: "Lisbon",
       music4: "Metal Icarus",
       music5: "Paradise",
       music6: "Mystery Machine",
       music7: "Fireworks",
       music8: "Extreme Dream",
       music9: "Gentle Change",
       music10: "Speed",
     },
   ],
 
   methods: {
     enviar() {},
   },
 }),
};
</script>