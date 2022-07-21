<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1 white--text" > Meu perfil</h1>
    <v-form>    
      <v-container>
        <v-text-field label="Nome" dark v-model="nome"> </v-text-field>
        <v-text-field label="Sobrenome" dark v-model="sobrenome"></v-text-field>
        <v-btn color="green" @click="salvarPerfil"> Salvar</v-btn>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>

</script>

<style>
</style>