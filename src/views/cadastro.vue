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
              <v-form style="width:45rem">
                <v-text-field
                  class="input-field"
                  rounded  
                  solo
                  placeholder="Nome"
                  label="Nome"
                  v-model="user.Nome"
                  @keyup.enter="login"
                  hide-details="auto"
                >
                </v-text-field>
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
                <v-btn color="btn grey" @click="login"> Login</v-btn>
                <v-btn class="ml-4" color="red" @click="reset"> Cancelar</v-btn>
              </v-form>
            </v-alert>
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
  h1{
    color: white;
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
  