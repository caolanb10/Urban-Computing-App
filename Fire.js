import * as firebase from 'firebase';


const app = firebase.initializeApp({
  apiKey: 'AIzaSyA8NigRryFu6RCagi6JS1-lnYLyqyQwCVI',
  authDomain: 'urban-application-7f91a.firebaseapp.com',
  databaseURL: 'https://urban-application-7f91a.firebaseio.com',
  projectId: 'urban-application-7f91a',
  storageBucket: 'urban-application-7f91a.appspot.com',
  messagingSenderId: '715635169669',
  appId: '1:715635169669:web:68b4355735f376d4f1ccec',
});

const observeAuth = () => firebase.auth().onAuthStateChanged((user) => {
  if(!user){
    try {
      firebase.auth().signInAnonymously();
    }
    catch ({ message }) {
      alert(message);
    }
  }
})

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => firebase.initializeApp({
      apiKey: 'AIzaSyA8NigRryFu6RCagi6JS1-lnYLyqyQwCVI',
      authDomain: 'urban-application-7f91a.firebaseapp.com',
      databaseURL: 'https://urban-application-7f91a.firebaseio.com',
      projectId: 'urban-application-7f91a',
      storageBucket: 'urban-application-7f91a.appspot.com',
      messagingSenderId: '715635169669',
      appId: '1:715635169669:web:68b4355735f376d4f1ccec',
    });

  observeAuth = () => firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if(!user){
      try {
        firebase.auth().signInAnonymously();
      }
      catch({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('message');
  }

  on = callback => this.ref

  send = locationData => {

  }
}

Fire.shared = new Fire();
export default Fire;
