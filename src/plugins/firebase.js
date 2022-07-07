import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDACpchWB_aA4sLrZ5Vuud_Mx8-2zFXjPY",
  authDomain: "metamusic-vue.firebaseapp.com",
  projectId: "metamusic-vue",
  storageBucket: "metamusic-vue.appspot.com",
  messagingSenderId: "266630570565",
  appId: "1:266630570565:web:871d14a1c56d59b8a4792c"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}