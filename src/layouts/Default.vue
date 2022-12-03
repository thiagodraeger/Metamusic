<template>
  <v-app>
    <v-navigation-drawer app v-model="sidebar" width="225" color="#0a0a0a" dark disable-resize-watcher>
      <v-list dense color="#0a0a0a">
        <v-list-item-title align="center">
          <h3>MetaMusic</h3>
          <h5>{{user.username}}</h5>
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
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      sidebar: true,
      items: [
        { title: "Home", icon: "mdi-home", to: "/home" },
        { title: "Bandas", icon: "mdi-account-group", to: "/bandas" },
        { title: "Artistas", icon: "mdi-account-star", to: "/artistas" },
        { title: "Perfil", icon: "mdi-cog", to: "/perfil" },
      ],
    };
  },

  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    async submitLogout() {
      try {
        await this.logout();
      } catch (e) {
        console.log(e);
      }
    },
  }
};
</script>



<style scoped>
main {
  background-color: #171717;
  background-size: cover;
  background-attachment: fixed;
}

/* main{
	margin:0;
	padding:0;
	font-family:"arial",heletica,sans-serif;
	font-size:12px;
    background: #2f3336 url('https://i.pinimg.com/736x/d9/87/0d/d9870ddb4ed7fb7d9f3156c8eb0fcea4.jpg') repeat 0 0;
	-webkit-animation: 15s linear 0s normal none infinite animate;
	-moz-animation: 15s linear 0s normal none infinite animate;
	-ms-animation: 15s linear 0s normal none infinite animate;
	-o-animation: 15s linear 0s normal none infinite animate;
	animation: 15s linear 0s normal none infinite animate;
 
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


