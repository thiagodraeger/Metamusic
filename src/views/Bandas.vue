<template>
  <div>
    <h1 class="pa-4 white--text" fluid>Bandas
<!-- POPUP -->
    <v-dialog
      v-model="dialog"
      width="500"
      dark
      overlay-color="black"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab x-small dark class="mb-3" v-bind="attrs" v-on="on">
        <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 lighten-2">
          Adicione uma Banda
          <v-btn fab x-small @click="dialog = false" right absolute depressed>
          <v-icon color="red">mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider></v-divider>
        <v-col>
        <v-file-input
          hide-details
          class="mb-3"
          dense
          outlined
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon="mdi-camera"
          label="Foto da Banda"
          >
          </v-file-input>
          <v-text-field
            hide-details
            class="mb-3"
            label="Nome da Banda"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            hide-details
            class="mb-3"
            label="Ano de Criação"
            outlined
            dense
          ></v-text-field>
          <v-textarea
          hide-details
          class="mb-3"
          dense
          outlined
          label="Descrição da Banda"
        ></v-textarea>
        </v-col>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Adicionar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

<!-- FIM-POPUP -->
    </h1>

    <v-container fluid>
      <v-row dense>
        <v-col v-for="banda in bandas" :key="banda.id" cols="3">
          <v-card link :to="`/bandas/${banda.id}`">
            <v-img
              :src="banda.foto ? banda.foto.url : null"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.5)"
              height="250px"
            >
              <v-card-title v-text="banda.nome_banda"></v-card-title>
              <v-card-subtitle v-text="banda.ano_criacao"></v-card-subtitle>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import BandaService from "@/api/banda";
  const bandaService = new BandaService();
  export default {
    data() {
      return {
        bandas: [],
        dialog: false,
      };
    },
    async created() {
      this.bandas = await bandaService.buscarBandas();
    },
  };
</script>

<style>

</style>
