import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyA3iOPzD7gn2wze5Fl8IZ-tDGd5sNH9vrc',
  authDomain: 'crwn-db-3f920.firebaseapp.com',
  projectId: 'crwn-db-3f920',
  storageBucket: 'crwn-db-3f920.appspot.com',
  messagingSenderId: '918195147296',
  appId: '1:918195147296:web:efddc2f41896392b3e2245',
  measurementId: 'G-23Z7ZVGWFE',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
