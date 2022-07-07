<template>
  <v-card
    :loading="loading"
    class="mx-auto my-5"
    max-width="900"
  >

    <v-img
      height="500"
      src="@/assets/images/edguy.jpg"
    ></v-img>

    <v-card-title >Edguy</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        (1992 - 2018)
      </v-row>

      <div class="my-4 text-subtitle-1">
        Alemanha
      </div>

      <div>
        Edguy é uma banda de metal fundada em  1992 na Alemanha por Tobias Sammet e Jens Ludwig. Ela nasceria da vontade de Tobias Sammet fazer suas próprias composições. Em 1997 após o lançamentos de duas demos e do disco independente "Savage Poetry", é lançado o primeiro album oficial da banda "Kingdom of Madness". 
        <br>
        Atualmente a banda é formada por Tobias Sammet, Jens Ludwig, Dirk Sauer, Felix Bohnke e Tobias Exxel. Em 2000 Tobias Sammet da inicio ao seu projeto paralelo de opera rock chamado Avantasia que contaria com grandes nomes do mundo do metal.
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
          color: '#B61736',
          src: 'https://upload.wikimedia.org/wikipedia/en/7/76/Edguy-Age_of_The_Joker.jpg',
          title: 'Age Of The Joker',
          artist: '2011',
          music1: 'Robin Hood',
          music2: "Nobody's Hero",
          music3: 'Rock of Cashel',
          music4: "Pandora's Box",
          music5: 'Breathe',
          music6: 'Two out of Seven - 1',
          music7: 'Faces in the Darkness',
          music8: 'The Arcane Guild',
          music9: 'Fire on the Downline',
          music10: 'Behind the Gates to Midnight World',
          music11: 'Every Night Without You',
          music12: 'God Fallen Silent',
          music13: 'Aleister Crowley Memorial Boogie',
          music14: 'Two out of Seven',

        },
        {
          color: '#082DAD',
          src: 'https://roadie-metal.com/wp-content/uploads/2021/04/edguy-rocket-ride-1024x955.jpg',
          title: 'Rocket Ride',
          artist: '2006',
          music1: 'Sacrifice',
          music2: 'Rocket Ride',
          music3: 'Wasted Time',
          music4: 'Matrix',
          music5: 'Return to the Tribe',
          music6: 'The Asylum',
          music7: 'Save me',
          music8: 'Catch of the Century',
          music9: 'Out of Vogue',
          music10: 'Superheroes',
          music11: 'Trinidad',
          music12: 'Fucking with Fire',
          music13: 'Land of the Miracle',
        },
        {
          color: '#6B0505',
          src: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Edguy_Hellfire_Club_cover.jpg',
          title: 'Hellfire Club',
          artist: '2004',
          music1: 'Mysteria',
          music2: "The Piper Never Dies",
          music3: "We Don't Need a Hero",
          music4: "Down to the Devil",
          music5: 'King of Fools',
          music6: 'Forever',
          music7: 'Under the Moon',
          music8: 'Lavatory Lovemachine',
          music9: 'Rise of the Morning Glory',
          music10: 'Lucifer in Love',
          music11: 'Navigator',
          music12: 'The Spirit Will Remain',
        },
                {
          color: '#F6BC08',
          src: 'https://upload.wikimedia.org/wikipedia/en/b/bd/The_savage_poetry.jpg',
          title: 'The Savage Poetry',
          artist: '2000',
          music1: 'Hallowed',
          music2: "Misguiding Your Life",
          music3: "Key to My Fate",
          music4: "Sands of Time",
          music5: 'Sacred Hell',
          music6: 'Eyes of the Tyrant',
          music7: 'Frozen Candle',
          music8: 'Roses to No One',
          music9: 'Power and Majestry',
        },
      ],
    }),
  }
</script>
