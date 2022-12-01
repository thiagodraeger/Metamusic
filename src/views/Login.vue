<template>
  <v-container fill-height fluid text-center>
    <v-container>
      <v-row>
        <v-col class="mx-auto pb-1 d-flex justify-center">
          <v-alert class="transparent">
            <v-img style="width: 100%" src="@/assets/images/logo_meta.png">
            </v-img>
          </v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col d-flex>
          <v-alert class="box" white>
            <v-form style="width: 50vw">
              <v-text-field
                class="input-field"
                rounded
                solo
                placeholder="Nome"
                label="Nome"
                v-model="user.username"
                @keyup.enter="submitLogin"
                hide-details="auto"
              >
              </v-text-field>
              <v-text-field
                rounded
                solo
                placeholder="Senha"
                class="input-field mt-5 mb-5"
                hide-details="auto"
                label="Senha"
                v-model="user.password"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
                @keyup.enter="submitLogin"
              ></v-text-field>
              <v-btn
                color="btn grey"
                @click="submitLogin"
                style="font-size: 15px; color: black; text-decoration: none"
              >
                Login</v-btn
              >
            </v-form>
          </v-alert>
          <v-card class="transparent" dark>
            <v-card-text>
              <v-row class="font-italic pb-1" justify="center">
                <a href="/cadastro">Ainda não tem uma conta? Registre-se</a>
              </v-row>
              <v-row class="font-italic" justify="center">
                <a href="http://">Esqueceu a senha?</a>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-snackbar color="red" v-model="errorLogin" danger multline timeout="2050">
      Usuário ou senha inválidos
    </v-snackbar>-->
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {},
      show: false,
      errorLogin: false,
      novaConta: false,
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),

    async submitLogin() {
      try {
        await this.login(this.user);
        this.$router.push({ path: "/perfil" });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
a:link {
  color: white;
  text-decoration: none;
  font-size: 20px;
}

a:visited {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.box {
  background-color: transparent;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.input-field {
  background-color: white;
  border-radius: 40px;
  margin: 2%;
}
.text-fieldct {
  width: 100%;
}
</style>
