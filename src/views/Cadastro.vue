<template>
  <v-container fill-height fluid text-center>
    <v-container>
      <v-row>
        <v-col class="mx-auto pb-1 d-flex justify-center">
          <h1>Cadastre-se aqui:</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col d-flex>
          <v-alert class="box" white>
            <v-form style="width: 50vw">
              <v-text-field
                rounded
                class="input-field mt-5 mb-5"
                solo
                placeholder="Apelido"
                label="Apelido"
                v-model="user.username"
                hide-details="auto"
                @keyup.enter="submitRegister"
                type="text"
              >
              </v-text-field>
              <v-text-field
                rounded
                class="input-field mt-5 mb-5"
                solo
                placeholder="Email"
                label="Email"
                v-model="user.email"
                hide-details="auto"
                @keyup.enter="submitRegister"
                type="text"
              >
              </v-text-field>
              <v-text-field
                rounded
                class="input-field mt-5 mb-5"
                solo
                placeholder="Senha"
                label="Senha"
                v-model="user.password1"
                hide-details="auto"
                @keyup.enter="submitRegister"
                :type="show ? 'text' : 'password'"
              >
              </v-text-field>
              <v-text-field
                rounded
                solo
                placeholder="Confirme senha"
                class="input-field mt-5 mb-5"
                hide-details="auto"
                label="Confirmar Senha"
                v-model="user.password2"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
                @keyup.enter="submitRegister"
              >
              </v-text-field>
              <v-btn
                color="grey"
                @click="submitRegister"
                style="font-size: 15px; color: black; text-decoration: none"
                >Cadastrar
              </v-btn>
            </v-form>
          </v-alert>
          <v-card class="transparent" dark>
            <v-card-text>
              <v-row class="font-italic pb-1" justify="center">
                <a href="/">Já tem uma conta? Entre</a>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {},
      show: false,
    };
  },
  methods: {
    ...mapActions("auth", ["register"]),

    async submitRegister() {
      try {
        await this.register(this.user);
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

h1 {
  color: white;
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
  border-radius: 40px;
  margin: 2%;
  background-color: white;
}

textarea:focus,
input:focus {
  outline: none;
}

.text-fieldct {
  width: 100%;
}
</style>
