import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC_Bdb1C66Sccid5J5yOPEd-PcnEpbh9_Q",
  authDomain: "clone-d2ed8.firebaseapp.com",
  projectId: "clone-d2ed8",
  storageBucket: "clone-d2ed8.appspot.com",
  messagingSenderId: "314683603419",
  appId: "1:314683603419:web:f224028421d461f266cffe",
  measurementId: "G-35266YPBD3"
};

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();

    const auth = firebase.auth(); 

    const provider = new firebase.auth.GoogleAuthProvider();

    export { db, auth, provider };