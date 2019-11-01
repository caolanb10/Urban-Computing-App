import * as firebase from 'firebase';

export const app = firebase.initializeApp({
  apiKey: 'AIzaSyA8NigRryFu6RCagi6JS1-lnYLyqyQwCVI',
  authDomain: 'urban-application-7f91a.firebaseapp.com',
  databaseURL: 'https://urban-application-7f91a.firebaseio.com',
  projectId: 'urban-application-7f91a',
  storageBucket: 'urban-application-7f91a.appspot.com',
  messagingSenderId: '715635169669',
  appId: '1:715635169669:web:68b4355735f376d4f1ccec',
});

export const observeAuth = () => firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    try {
      firebase.auth().signInAnonymously();
    } catch ({ message }) {
      alert(message);
    }
  }
});

export const ref = ({ table }) => firebase.database().ref(table);

export const uid = () => (firebase.auth().currentUser || {}).uid;

export const postToDB = ({ data, table }) => firebase.database().ref(table).push({ data });

export const setToDB = ({ data, table }) => firebase.database().ref(table).set(data);
