<template>
  <v-container fill-height fluid text-center>
    <v-container>
      <v-row>
        <v-col
          class="mx-auto pb-1 d-flex justify-center"
        >
          <v-alert class="transparent">
            <v-img style="width: 550px"
              src="@/assets/images/logo_meta.png"
            >
            </v-img>
          </v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col d-flex>
          <v-alert class="box" white>
            <v-form style="width:45rem">
              <v-text-field
                class="input-field"
                rounded  
                solo
                placeholder="Email"
                label="Email"
                v-model="user.email"
                @keyup.enter="login"
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
                @keyup.enter="login"
              ></v-text-field>
              <v-btn color="grey" @click="login"> Login</v-btn>
              <!-- <v-btn class="ml-4" color="red" @click="reset"> Cancelar</v-btn> -->
            </v-form>
          </v-alert>
          <v-card class="transparent" dark>
            <v-card-text>
              <v-row class="font-italic" justify="center">
                <a href="">Ainda não tem uma conta? Registre-se</a>
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
    </v-dialog> -->
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
a:link {
  color: white;
  text-decoration: none;
}

a:visited {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.box{
  background-color:transparent;
  padding:0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  
}
.input-field{
  background-color:white;
  border-radius: 40px;
  margin: 2%;

}
textarea:focus, input:focus{
    outline: none;
}
.text-fieldct{
  width: 100%;
}
</style>
