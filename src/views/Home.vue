<template>
  <v-card class="mx-auto" max-width="1500">
    <v-card-title>NEWS</v-card-title>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="4">
          <v-img height="250" :src="card.src"></v-img>

          <v-card-title v-text="card.title"></v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <div v-text="card.text"></div>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        text: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        flex: 6,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        text: "Plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        text: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        flex: 6,
      },
    ],
  }),
};
</script>
