<template>
  <v-app>
    <v-navigation-drawer app v-model="sidebar" width="225" color="#0a0a0a" dark>
      <v-list dense color="#0a0a0a">
        <v-list-item-title align="center">
          <h3>MetaMusic</h3>
        </v-list-item-title>
      </v-list>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" link :to="item.to">
          <v-list-item-icon>
            <v-icon> {{ item.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="submitLogout">
          <v-list-item-icon>
            <v-icon> mdi-exit-to-app </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Sair
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
import { mapActions } from "vuex";

export default {
  data() {
    return {
      sidebar: true,
      items: [
        { title: "Home", icon: "mdi-home", to: "/home" },
        { title: "Bandas", icon: "mdi-account-group", to: "/bandas" },
        { title: "Perfil", icon: "mdi-account-box", to: "/perfil" },
      ],
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    async submitLogout() {
      try {
        await this.logout();
        console.log("Saiu")
        this.$router.push({ path: "/" });
      } catch (e) {
        console.log(e);
      }
    },
  }
};
</script>

<style scoped>
main {
  /* background-image: url('https://wallpaperaccess.com/full/1162700.jpg'); */
  background-color: #171717;
  background-size: cover;
  background-attachment: fixed;
}

/* body{
	margin:0;
	padding:0;
	font-family:"arial",heletica,sans-serif;
	font-size:12px;
    background: #2980b9 url('https://static.tumblr.com/03fbbc566b081016810402488936fbae/pqpk3dn/MRSmlzpj3/tumblr_static_bg3.png') repeat 0 0;
	-webkit-animation: 10s linear 0s normal none infinite animate;
	-moz-animation: 10s linear 0s normal none infinite animate;
	-ms-animation: 10s linear 0s normal none infinite animate;
	-o-animation: 10s linear 0s normal none infinite animate;
	animation: 10s linear 0s normal none infinite animate;
 
}
 
@-webkit-keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}
 
@-moz-keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}
 
@-ms-keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}
 
@-o-keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
}
 
@keyframes animate {
	from {background-position:0 0;}
	to {background-position: 500px 0;}
} */
</style>


