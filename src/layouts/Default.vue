<template>
    <v-app>
      <v-app-bar app color="#0a0a0a" elevation="'" >
        <v-app-bar-nav-icon @click.stop="sidebar = !sidebar" color="white"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-icon color="white">mdi-account-box </v-icon>
      </v-app-bar>
      <v-navigation-drawer app v-model="sidebar" color="#0a0a0a">
        <v-list dense color="#0a0a0a" dark>
          <v-list-item>           
            <v-list-item-action>
              <v-icon @click.stop="sidebar = !sidebar" >mdi-chevron-left</v-icon>
            </v-list-item-action>
            <v-list-item-tittle>
            <h3> MetaMusic   </h3>
          </v-list-item-tittle>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list dark>
          <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
            <v-list-item-icon>
              <v-icon> {{item.icon}} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              {{item.title}}
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
      sidebar:false,
      items:[
        {title:"Comentários", icon:"mdi-account-box", to:"/home"},
        {title:"Artistas", icon:"mdi-account-group", to:"/artistas"},
        {title:"Perfil", icon:"mdi-account-cog", to:"/perfil"},
        {title:"Ranking", icon:"mdi-account-cog", to:"/Ranking"},
        {title:"Sair", icon:"mdi-exit-to-app", to:"/"},
      ]
    };
  },
};
</script>

<style scoped>
main {
  background-image: url('https://wallpaperaccess.com/full/1162700.jpg');
  background-size: cover;
  background-attachment: fixed;
}
</style>