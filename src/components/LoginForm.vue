<template>
   <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>로그인</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person" v-model="form.id" label="아이디" type="text"></v-text-field>
              <v-text-field prepend-icon="lock" v-model="form.pwd" label="비밀번호" type="password"></v-text-field>
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
      console.log('test')
    }
  }

  /* function loginCheck(){
      let username = $('input#userName').val();
      let password = $('input#userPassword').val();

      let starCountRef = database.ref('Users/' + username );
      starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      auth.signInWithEmailAndPassword(data[1].mail, password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user)
          //location.href = "../../search.html";
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
      });
    } */
}
</script>
