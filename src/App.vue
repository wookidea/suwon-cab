<template>
  <v-app id="app">
    <template>
      <v-app-bar app color="primary" dark v-if="!$route.name == 'login'">
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <site-title :title="site.title"></site-title>
        <v-spacer />
        <v-btn icon @click="save"><v-icon>mdi-check</v-icon></v-btn>
        <v-btn icon @click="read"><v-icon>mdi-numeric</v-icon></v-btn>
        <v-btn icon @click="readOne"><v-icon>mdi-account-supervisor-circle</v-icon></v-btn>
      </v-app-bar>
      <v-navigation-drawer app v-model="drawer">
        <site-menu :items="site.menu"></site-menu>
      </v-navigation-drawer>
      <v-content>
        <router-view />
      </v-content>
      <site-footer :footer="site.footer" v-if="!$route.name == 'login'"></site-footer>
    </template>
  </v-app>
</template>

<script>
import SiteTitle from '@/views/site/title'
import SiteFooter from '@/views/site/footer'
import SiteMenu from '@/views/site/menu'

export default {
  components: { SiteTitle, SiteFooter, SiteMenu },
  name: 'App',
  data () {
    return {
      drawer: false,
      site: {
        menu: [],
        title: '나의 타이틀입니다',
        footer: '대한예수교침례회'
      }
    }
  },
  created () {
    this.subscribe()
  },
  methods: {
    subscribe () {
    },
    save () {
      console.log('save@@@')
      this.$firebase
        .database()
        .ref()
        .child('abcd')
        .child('abcd')
        .child('abcd')
        .set({
          title: 'abcd',
          text: 'tttttt'
        })
    },
    read () {
      this.$firebase
        .database()
        .ref()
        .child('abcd')
        .on('value', (sn) => {
          console.log(sn)
          console.log(sn.val())
        })
    },
    async readOne () {
      const sn = await this.$firebase
        .database()
        .ref()
        .child('abcd')
        .once('value')
      console.log(sn.val())
    }
  }
}
</script>
