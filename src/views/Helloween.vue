<template>
  <v-card
    :loading="loading"
    class="mx-auto my-5"
    max-width="900"
  >

    <v-img
      height="500"
      src="@/assets/images/helloween.jpg"
    ></v-img>

    <v-card-title >Helloween</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        (1984 - atualmente)
      </v-row>

      <div class="my-4 text-subtitle-1">
        Alemanha
      </div>

      <div>
        Helloween é uma influente banda alemã de power metal, fundada em 1984 por Michael Weikath, Markus Grosskopf, Kai Hansen e Ingo Schwichtenberg (falecido em 1995). Ela é considerada uma das bandas responsaveis por "criar" o power metal. 
        <br>
       Em 2018 a banda anunciaria o retorno de Kai Hansen e Michael Kiske à banda. Atualmente ela é formada por Michael Weikath, Markus Grosskopf, Andi Deris, Sascha Gerstner, Dani Löble, Kai Hansen e Michael Kiske.
      </div>
    </v-card-text>

    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="6"
        >
          <v-card
            :color="item.color"
            white
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
            <v-card-actions>
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
     <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

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
        </v-card-text>
      </div>
    </v-expand-transition>
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
          color: '#C37100',
          src: 'https://img.discogs.com/df4vYbOMeNDv3LYQbbl6B2IgAF8=/fit-in/600x593/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-369653-1508847462-4663.jpeg.jpg',
          title: 'Keeper of the Seven Keys Pt.II',
          artist: '1988',
          music1: 'Invitation',
          music2: "Eagle Fly Free",
          music3: 'You Always Walk Alone',
          music4: "Rise and Fall",
          music5: 'Dr. Stein',
          music6: 'We Got the Right',
          music7: 'March of Time',
          music8: 'I Want Out',
          music9: 'Keeper of the Seven Keys',
          music10: 'Save Us',
          music11: 'Savage',
          music12: "Livin' Ain't No Crime",
          music13: "Don't Run for Cover",
        },
        {
          color: '#B8860B	',
          src: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Oathcover.jpg',
          title: 'The Time of the Oath',
          artist: '1996',
          music1: 'We Burn',
          music2: 'Steel Tormentor',
          music3: 'Wake Up the Mountain',
          music4: "Power",
          music5: 	"Forever and One (Neverland)",
          music6: "Before the War",
          music7: 	"A Million to One",
          music8: 	"Anything My Mama Don't Like",
          music9: "Kings Will Be Kings",
          music10: 	"Mission Motherland",
          music11: 	"If I Knew",
          music12: "The Time of the Oath",
        },
        
      ],
    }),
  }
</script>
