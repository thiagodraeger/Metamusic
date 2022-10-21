<template>
  <div>
    <h1 class="pa-4 white--text" fluid>Bandas</h1>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="banda in bandas" :key="banda.id" cols="3">
          <v-card link :to="`/artistas/${banda.id}`">
            <v-img
              :src="imagemFixa"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.5)"
              height="250px"
              
            >
              <v-card-title v-text="banda.nome_banda"></v-card-title>
              <!-- <v-card-subtitle v-text="banda.desc_banda"></v-card-subtitle> -->
              <v-card-subtitle v-text="banda.ano_criacao"></v-card-subtitle>
            </v-img>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BandaService from '@/api/banda'
const bandaService = new BandaService()
export default {
  data() {
    return {
      imagemFixa: require('@/assets/images/angra.jpg'),
      bandas: [],
    };
  },
  async created() {
    this.bandas = await bandaService.buscarBandas()
  }
};
</script>

<style>
</style>