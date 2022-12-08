<template>
  <v-card class="mx-auto pt-10" max-width="85%" color="#171717" dark outlined>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title v-text="noticia.titulo_noticia" class="titulo"></v-card-title>

    <v-card-text>
      <div class="cor my-4 text-subtitle-1">August 26, 2022 |</div>

      <v-container class="letra">
        <v-row>
          {{ noticia.subtitulo }}
        </v-row>
        <br><br>
        <v-row justify="center">
          <v-img
            class="d-flex"
            max-width="500px"
            :src="noticia.foto_noticia ? noticia.foto_noticia.url : null"
          ></v-img>
        </v-row>
        <br><br>
        <v-row>
          {{ noticia.texto }}
        </v-row>
      </v-container>
    </v-card-text>
    <v-divider></v-divider>
    <v-container fluid>
      <v-form>
        <v-text-field
          auto-grow
          v-model="comentario.comentario"
          label="Adicione um comentário..."
          rows="1"
          row-height="2"
          :append-icon="'mdi-send'"
          @click:append="comentar"
        >
        </v-text-field>
      </v-form>
      <v-card class="mx-auto" flat color="transparent">
        <v-list-item
          three-line
          v-for="(comentario, index) in comentarios"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title>
              <b>@{{ comentario.criado_por }}</b> -
              {{ comentario.data_comentario.split("-").reverse().join("/") }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ comentario.comentario }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-btn
            @click="deletarComentario(comentario.id)"
            fab
            x-small
            dark
            class="ma-2"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn @click="editarComentario(comentario.id)" fab x-small dark>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-list-item>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";
import NoticiaService from "@/api/noticia";
const noticiaService = new NoticiaService();
import { mapState } from "vuex";

export default {
  async created() {
    await this.listarComentarios();
  },
  async mounted() {
    await this.buscarInfoNoticia();
  },
  data: () => ({
    comentarios: [],
    comentario: {},
    noticias: [
      {
        title: "NOTÍCIA",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        text: "Quia est omnis nostrum voluptatum repudiandae eos eum itaque.",
        flex: 6,
        to: "/noticias/n1",
      },
    ],
    noticia: {},
  }),
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    async buscarInfoNoticia() {
      this.noticia = await noticiaService.buscarNoticiaPorId(
        this.$route.params.id
      );
    },
    async buscarNoticias() {
      const { data } = await axios.get("api/Noticia/");
      this.noticias = data;
    },
    async listarComentarios() {
      const { data } = await axios.get("api/Comentario/");
      this.comentarios = data;
    },
    async comentar() {
      this.comentario.criado_por = this.user.pk;
      await axios.post("api/Comentario/", this.comentario);
      this.listarComentarios();
    },
    async deletarComentario(id) {
      await axios.delete(`api/Comentario/${id}/`);
      this.listarComentarios();
    },
    async editarComentario(id) {
      try {
        await axios.put(`api/Comentario/${id}/`, this.comentario);
        this.listarComentarios();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
.titulo {
  font-size: 45px;
}

.letra {
  font-size: 17px;
}

.cor {
  color: gray;
}
</style>
