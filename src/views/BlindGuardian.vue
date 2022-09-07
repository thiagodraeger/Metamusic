<template>
  <v-card :loading="loading" class="mx-auto" color="#121212">
    <v-img
      height="300"
      position=""
      src="https://igormiranda.com.br/wp-content/uploads/2022/05/blind-guardian-2022-grupo.jpg"
    ></v-img>

    <v-card-title class="white--text">
      Blind Guardian
      <form action="https://open.spotify.com/artist/7jxJ25p0pPjk0MStloN6o6">
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
      <v-row align="center" class="mx-0"> (1984 - atualmente) </v-row>

      <div class="my-4 text-subtitle-1">Alemanha</div>

      <div>
        Blind Guardian é uma banda alemã de power metal formada no ano de 1984.
        Formada em 1984 por Hansi Kürsch, André Olbrich e Thomas Stauch. A banda
        geralmente busca inspiração para suas músicas na cultura medieval, nas
        mitologias nórdica e grega e nas obras de J. R. R. Tolkien. Atualmente
        ela é formada por Hansi Kürsch, André Olbrich, Marcus Siepen e Frederik
        Ehmke.
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
                      <ul v-text="item.music14"></ul>
                      <ul v-text="item.music15"></ul>
                      <ul v-text="item.music16"></ul>
                      <ul v-text="item.music17"></ul>
                      <ul v-text="item.music18"></ul>
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
        color: "#4A6D10",
        src: "https://roadie-metal.com/wp-content/uploads/2017/01/Twistinmyth.jpg",
        title: "A Twist in the Myth",
        dt: "2006",
        music1: "This Will Never End",
        music2: "Otherland",
        music3: "Turn the Page",
        music4: "Fly",
        music5: "Carry the Blessed Home",
        music6: "Another Stranger Me",
        music7: "Straigh Through the Mirror",
        music8: "Lionheart",
        music9: "Skalds and Shadows",
        music10: "The Edge",
        music11: "The New Order",
      },
      {
        color: "#335685",
        src: "https://m.media-amazon.com/images/I/71lOjsIfc3L._AC_SX425_.jpg",
        title: "Somewhere Far Beyond",
        dt: "2007 (Remastered)",
        music1: "Time What is Time",
        music2: "Journey Through the Dark",
        music3: "Black Chamber",
        music4: "Theatre of Pain",
        music5: "The Quest of Tanelorn",
        music6: "Ashes to Ashes",
        music7: "The Bard's Song - In the Forest",
        music8: "The Bard's Song - The Hobbit",
        music9: "The Piper's Calling",
        music10: "Somewhere Far Beyond",
        music11: "Spread Your Wings",
        music12: "Trial by Fire",
      },
      {
        color: "#FFE26C",
        src: "https://imageswscdn.wslojas.com.br/files/25539/MED_PROD_596012719799.jpg",
        title: "Imaginations from the Other Side",
        dt: "2007 (Remastered)",
        music1: "Imaginations from the Other Side",
        music2: "I'm Alive",
        music3: "A Past and Future Secret",
        music4: "The Script for My Requiem",
        music5: "Mordred's Song",
        music6: "Born in a Mourning Hall",
        music7: "Bright Eyes",
        music8: "Another Holy War",
        music9: "And the Story Ends",
      },
    ],

   methods: {
     enviar() {},
   },
 }),
};
</script>
