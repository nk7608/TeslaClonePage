import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAh1bPy2Ixq6oi-K9O59u4E_90RRoPPhsQ",
    authDomain: "tesla-clone-e8e53.firebaseapp.com",
    projectId: "tesla-clone-e8e53",
    storageBucket: "tesla-clone-e8e53.appspot.com",
    messagingSenderId: "1024202749909",
    appId: "1:1024202749909:web:698bee5bf59384a39daf5c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();

  export { auth }