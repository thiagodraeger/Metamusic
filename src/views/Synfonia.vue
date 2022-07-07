<template>
  <v-card
    :loading="loading"
    class="mx-auto my-5"
    max-width="900"
  >

    <v-img
      height="500"
      src="@/assets/images/synfonia.jpg"
    ></v-img>

    <v-card-title >Symfonia</v-card-title>

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
        Foi um supergrupo de power metal sinfônico formado em 2010 por Andre Matos, Timo Tolkki, Jari Kainulainen, Mikko Härkin e Uli Kusch. A banda durou apenas até 2011  e teve apenas um album lançado, denominado "In Paradisum". 

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
          color: '#7B68EE',
          src: 'https://m.media-amazon.com/images/I/71zCMi3OtSL._AC_SX679_.jpg',
          title: 'In Paradisum',
          artist: '2011',
          music1: 'Come By The Hills',
          music2: 'Santiago',
          music3: 'Alayna',
          music4: 'Forevermore	',
          music5: 'Pilgrim Road',
          music6:'In Paradisum',
          music7: 'Rhapsody In Black',
          music8: 'I Walk In Neon',
          music9: "Don't Let Me Go",
          music10: 'Fields Of Avalon',
        },
      ],
    }),
  }
</script>
