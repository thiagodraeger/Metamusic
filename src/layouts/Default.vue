<template>
    <v-app>
      <v-navigation-drawer app v-model="sidebar" color="#0a0a0a" dark>
        <v-list dense color="#0a0a0a" >
          <v-list-item-tittle align="center">
            <h3> MetaMusic   </h3>
          </v-list-item-tittle>
        </v-list>
        <v-list >
          <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
            <v-list-item-icon>
              <v-icon> {{item.icon1}} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              {{item.title1}}
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list >
          <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
            <v-list-item-icon>
              <v-icon> {{item.icon2}} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              {{item.title2}}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main> 
        <router-view></router-view>
      </v-main>
    </v-app>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {title1:"Home", icon1:"mdi-account-box", to:"/home"},
        {title1:"Artistas", icon1:"mdi-account-group", to:"/artistas"},
        {title2:"Perfil", icon2:"mdi-account-cog", to:"/perfil"},
        {title2:"Sair", icon2:"mdi-exit-to-app", to:"/"},
      ]
    };
  },
};
</script>

<style scoped>
main {
  /* background-image: url('https://wallpaperaccess.com/full/1162700.jpg'); */
  background-color: #171717;
  background-size: cover;
  background-attachment: fixed;
}
</style>