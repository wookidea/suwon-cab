<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Member Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="person"
                v-model="form.id"
                label="아이디"
                type="text"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                v-model="form.pwd"
                label="비밀번호"
                type="password"
                @keydown.enter="signIn"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="signIn">로그인</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import firebase from 'firebase/app'

export default {
  name: 'LoginForm',
  data () {
    return {
      form: {
        id: '',
        pwd: ''
      }
    }
  },
  methods: {
    signIn () {
      var username = this.form.id
      var password = this.form.pwd

      var starCountRef = firebase.database().ref('Users/' + username)
      starCountRef.on('value', (snapshot) => {
        const data = snapshot.val()
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(() => {
            return firebase.auth().signInWithEmailAndPassword(data[1].mail, password)
              .then(() => {
                this.$router.replace('home')
              })
              .catch((error) => {
                var errorCode = error.code
                var errorMessage = error.message
                console.log(errorCode)
                console.log(errorMessage)
              })
          })
      })
    }
  }
}
</script>
