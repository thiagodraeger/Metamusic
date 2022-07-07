<template>
  <v-container class="rankingbox">
    <v-alert dark>
      <v-data-table
        dark
        :headers="headers"
        :items="desserts"
        :items-per-page="10"
        class="elevation-1"
      >
      </v-data-table>
    </v-alert>
  </v-container>
</template>
<script>
/*for (var i = 1; i < 10; i++) {
  console.log(i);
  
}*/
export default {
  data() {
    return {
      headers: [
        {
          text: "Posição",
          align: "start",
          sortable: false,
          value: "position",
        },
        { text: "Banda", value: "name" },
        { text: "Curtidas", value: "curtidas" },
        { text: "Comentarios", value: "comentarios" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Angra",
          curtidas: 1591,
          comentarios: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "BlindGuardian",
          curtidas: 237,
          comentarios: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Edguy",
          curtidas: 262,
          comentarios: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Helloween",
          curtidas: 305,
          comentarios: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Shaman",
          curtidas: 356,
          comentarios: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Synfonia",
          curtidas: 375,
          comentarios: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
