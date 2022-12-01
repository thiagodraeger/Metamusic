<template>
  <v-card class="mx-auto" max-width="85%" color="#171717" dark outlined>
    <v-card-title class="pb-0">MEU PERFIL</v-card-title>
    <v-divider color="white"></v-divider>
    <v-form>
      <v-container class="mt-4">
        <v-col>
          <v-row>
            <v-img max-height="180" max-width="180"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" class="p-5"
              style="border-radius: 1000px">
            </v-img>
            <v-col style="padding-left: 50px;">
              <v-text-field label="Apelido" dark v-model="newUser.username" outlined dense hide-details
                class="mb-3"></v-text-field>
              <v-text-field label="Email" dark v-model="newUser.email" outlined dense hide-details
                class="mb-3"></v-text-field>
              <v-text-field label="Nome" dark v-model="newUser.first_name" outlined dense hide-details
                class="mb-3"></v-text-field>
              <v-text-field label="Sobrenome" dark v-model="newUser.last_name" outlined dense hide-details
                class="mb-3"></v-text-field>

              <v-btn color="blue" @click="updateInfo">Salvar</v-btn>
              <v-btn color="red" @click="deleteUserInfo" class="deletar">Deletar</v-btn>
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
    this.newUser = { ...this.user }
  },
  data() {
    return {
      newUser: {},
      show: false,
    }
  },



  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapActions("auth", ["updateUser", "changeUserPassword", "deleteUser"]),

    async updateInfo() {
      if (this.newUser.username == this.user.username)
        delete this.newUser.username;
      try {
        await this.updateUser(this.newUser);
      } catch (e) {
        console.log(e);
      }
    },
    async newPasswordInfo() {
      try {
        await this.changeUserPassword(this.newPassword);
      } catch (e) {
        console.log(e);
      }
    },
    async deleteUserInfo() {
      try {
        await this.deleteUser(this.user);
        this.$router.push({ path: "/" });
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style>
.deletar {
  margin-left: 10px;
}
</style>