<template>
  <v-card class="mx-auto" max-width="85%" color="#171717" dark outlined>
    <v-card-title class="pb-0">MEU PERFIL</v-card-title>
    <v-divider color="white"></v-divider>
    <v-form>    
      <v-container class="mt-4">
        <v-col>
          <v-row>
            <v-img max-height="300" max-width="300"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            class="mb-5"
            style="border-radius: 1000px"
            >
            </v-img>
            <v-col>
              <v-text-field label="Nome" dark v-model="newUser.username" outlined dense></v-text-field>
              <v-text-field label="Senha" dark v-model="newUser.password" outlined dense></v-text-field>
              <v-textarea outlined dense>
              <template v-slot:label>
                <div>
                  Descrição
                </div>
              </template>
              </v-textarea>
              <v-btn color="blue" @click="verificarAtualizacao">Salvar</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  created() {
    this.newUser.username = this.user.username
    this.newUser.password = this.user.password
  },
  data() {
    return {
      newUser: {
        username: "",
        password: "",
      }
    }
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapActions("auth", ["updateInfo"]),
    verificarAtualizacao() {
      if (this.user.username != this.newUser.username || this.user.password != this.newUser.password) {
        this.updateInfo(this.newUser)
        console.log("DEU")
      }
    }
  }
};
</script>

<style>
</style>