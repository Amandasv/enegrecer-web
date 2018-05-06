import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDBiMFbhXtZudaEzdrASgnLtSwx94dXVB8',
  authDomain: 'enegrecer-e37b3.firebaseapp.com',
  databaseURL: 'https://enegrecer-e37b3.firebaseio.com',
  projectId: 'enegrecer-e37b3',
  storageBucket: 'enegrecer-e37b3.appspot.com',
  messagingSenderId: '762507318866',
};

const firebaseApp = firebase.initializeApp(config);
export default firebaseApp;

export const auth = firebase.auth();
export const ref = firebase.database().ref();

export const storageKey = 'KEY_FOR_LOCAL_STORAGE';

export const estaAutenticado = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
};


