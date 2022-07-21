<template>
  <v-container fill-height fluid text-center>
    <v-container>
      <v-row>
        <v-col
          class="black--text text-center mx-auto pb-5"
          cols="2"
          sm="5"
          offset="5"
        >
          <v-alert border="top" dark>
            <h1 class="h1">Entrar no MetaMusic</h1>
          </v-alert>
        </v-col>
      </v-row>
      <v-row class="elavation-3 mx-auto">
        <v-col cols="auto"> </v-col>
        <v-col>
          <v-alert class="box" border="top" dark>
            <v-form>
              <v-text-field
                dark
                label="Email"
                v-model="user.email"
                @keyup.enter="login"
              ></v-text-field>
              <v-text-field
                dark
                label="Senha"
                v-model="user.password"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
                @keyup.enter="login"
              ></v-text-field>
              <v-btn color="green" @click="login"> Login</v-btn>
              <v-btn class="ml-4" color="red" @click="reset"> Cancelar</v-btn>
            </v-form>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar color="red" v-model="errorLogin" danger multline timeout="2050">
      Usuário ou senha inválidos
    </v-snackbar>

    <v-dialog v-model="novaConta" persistent max-width="300">
      <v-card>
        <v-card-tittle>Conta não encontrada.</v-card-tittle>
        <v-card-text>
          A conta não foi localizada. Deseja criar uma nova conta com os dados
          informados?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-2" text @click="criarNovaConta">Sim</v-btn>
          <v-btn color="red darken-2" text @click="novaConta = false">
            Não</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      show: false,
      errorLogin: false,
      novaConta: false,
    };
  },
};
</script>

<style scoped>
.h1 {
  color: white;
}
</style>