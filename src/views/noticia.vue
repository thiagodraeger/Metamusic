<template>
  <v-card class="mx-auto pt-10" max-width="85%" color="#171717" dark outlined>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title
      v-for="noticia in noticias"
      :key="noticia.title"
      v-text="noticia.title"
      class="titulo"
    ></v-card-title>

    <v-card-text>
      <div class="cor my-4 text-subtitle-1">August 26, 2022 |</div>

      <div class="letra">
        On March 13th 2007, American gothic metal band TYPE O NEGATIVE released
        their seventh and final studio album, Dead Again. This year marks the
        15th anniversary of the band's final record before the passing of
        bassist/vocalist Peter Steele.
        <p></p>

        Today, the band announces that they are offering a limited edition
        re-issue of Dead Again.
        <p></p>

        TYPE O NEGATIVE's Kenny Hickey comments,
        <p></p>

        "The first casualty of this album was the record company - which
        promptly went under after its release. Soon after, Peter passed, and
        then even the rehearsal studio it was written and developed in was burnt
        to the ground by Hurricane Sandy. As the black cloud continued its
        relentless path over TYPE O, Dead Again appeared and disappeared from
        the streaming platforms for years. Now that the storm has passed, we
        have some slight hope of establishing a small illusion of permanence
        with this final release of Dead Again. We are sorry for any
        inconvenience we may have caused you."
        <p></p>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-container fluid>
      <v-form>
        <v-text-field
          auto-grow
          v-model="comentario.comentario"
          @keydow.enter="comentar"
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
              <b>@{{ comentario.criado_por.username }}</b> -
              {{ comentario.data_comentario.split("-").reverse().join("/") }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ comentario.comentario }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-btn
            @click="deletarComentario(comentario.id)"
            color="secondary"
            fab
            x-small
            dark
            class="ma-2"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn
            @click="editarComentario(comentario.id)"
            color="secondary"
            fab
            x-small
            dark
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-list-item>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  async created() {
    await this.listarComentarios();
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
  }),
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
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
  font-size: 50px;
}

.letra {
  font-size: 17px;
}

.cor {
  color: gray;
}
</style>
