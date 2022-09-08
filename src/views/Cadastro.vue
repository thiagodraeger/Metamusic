<template>
  <v-container fill-height fluid text-center>
    <v-container class="cont">
      <v-row>
          <v-col class="mx-auto pb-1 d-flex justify-center">
              <h1>Cadastre-se aqui:</h1>
          </v-col>
      </v-row>
      <v-row>
        <v-col d-flex>
          <v-alert class="box" white>
            <v-form style="width:45rem">
              <v-text-field
                rounded  
                class="input-field mt-5 mb-5"
                solo
                placeholder="Nome"
                label="Nome"
                v-model="user.Nome"
                @keyup.enter="login"
                hide-details="auto"
              >
              </v-text-field>
              <v-text-field
                rounded  
                class="input-field mt-5 mb-5"
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
              <v-text-field
                rounded
                solo
                placeholder="Confirmar Senha"
                class="input-field mt-5 mb-5"
                hide-details="auto"
                label="Confirmar Senha"
                v-model="user.cpassword"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
                @keyup.enter="login"
              ></v-text-field>
              <v-btn color="grey" @click="Cadastrar"> Login</v-btn>
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
  font-size: 20px;
}

a:visited {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h1{
  color: white;
  }  
.cont{
  width: 47rem;
  border-radius: 30px; 
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
  border-radius: 40px;
  margin: 2%;
  background-color:white;

}
textarea:focus, input:focus{
    outline: none;
}
.text-fieldct{
  width: 100%;
}
</style>