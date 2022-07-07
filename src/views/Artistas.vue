<template>
  <div>
    <h1 class="pa-4 white--text" fluid>Artistas</h1>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="banda in bandas" :key="banda.id" cols="4">
          <v-card link :to="banda.to">
            <v-img
              :src="banda.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.5)"
              height="350px"
              
            >
              <v-card-title v-text="banda.nome"></v-card-title>
            </v-img>

            <!-- <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-.h1 {
                color: white;
                }icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions> -->

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bandas: [
        {
          id: 1,
          nome: "Angra",
          pais: "Brasil",
          src: require('@/assets/images/angra.jpg'),
          to: "/Angra",
        },
        {
          id: 2,
          nome: "Shaman",
          pais: "Brasil",
          src: require('@/assets/images/Shaman.jpg'),
          to: "/Shaman",
        },
        {
          id: 3,
          nome: "Edguy",
          pais: "Alemanha",
          src: require('@/assets/images/edguy.jpg'),
          to: "/Edguy",
        },
        {
          id: 4,
          nome: "Blind Guardian",
          pais: "Alemanha",
          src: require('@/assets/images/blindguardian.jpg'),
          to: "/BlindGuardian",
        },
        {
          id: 5,
          nome: "Helloween",
          pais: "Alemanha",
          src: require('@/assets/images/helloween.jpg'),
          to: "/Helloween",
        },
        {
          id: 6,
          nome: "Symfonia",
          pais: "Finlândia / Brasil",
          src: require('@/assets/images/synfonia.jpg'),
          to: "/Synfonia",
        },
      ],
    };
  },
};
</script>

<style>
</style>