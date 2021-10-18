import Vue from 'vue'
import firebase from 'firebase'
import firebaseConfig from '../../firebaseConfig'

const app = firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = app
