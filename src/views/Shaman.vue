<template>
 <v-card :loading="loading" class="mx-auto" color="#121212">
   <v-img height="300" position="right 50% top 10%" src="https://igormiranda.com.br/wp-content/uploads/2022/04/Shaman-2022-banda-02.jpg"></v-img>
 
   <v-card-title class="white--text"> Shaman
     <form action="https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m">
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
     <v-row align="center" class="mx-0"> (2000 - atualmente) </v-row>
 
     <div class="my-4 text-subtitle-1">Brasil</div>
 
     <div>
        Shaman é uma banda brasileira de metal formada em 2000 pelos ex-membros do Angra: Andre Matos, Luis Mariutti e Ricardo Confessori. E pelo guitarrista Hugo Mariutti, irmão de Luis. Essa formação duraria até 2006. Em 2018 a banda voltaria com a sua formação original, porem seria interrompida em 08 de junho de 2019, por conta da morte inesperada do vocalista Andre Matos.
        <br>
        Atualmente a banda é formada por Ricardo Confessori, Hugo Mariutti , Luís Mariutti e Alírio Netto.
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
          color: '#D2691E',
          src: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/06/Shaman-Ritual-Capa-696x696.jpg',
          title: 'Ritual',
          dt: '2002',
          music1: 'Ancient Winds',
          music2: 'Here I Am',
          music3: 'Distant Thunder',
          music4: 'For Tomorrow',
          music5: 'Time Will Come',
          music6: 'Over Your Head',
          music7: 'Fairy Tale',
          music8: 'Blind Spell',
          music9: 'Ritual',
          music10: 'Pride',
        },
        {
          color: '#FFFAFA',
          src: 'https://upload.wikimedia.org/wikipedia/en/2/26/Shaaman_reason.jpg',
          title: 'Reason',
          dt: '2005',
          music1: 'Turn Away',
          music2: 'Reason',
          music3: 'More',
          music4: 'Innocence',
          music5: 'Scarred Forever',
          music6: 'In The Night',
          music7: 'Rough Stone',
          music8: 'Iron Soul',
          music9: 'Trail Of Tears',
          music10: 'Born To Be',
        },
      ],
    }),
  }
</script>