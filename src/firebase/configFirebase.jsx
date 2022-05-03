import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDuHnnL2lljPSiEQCUoNzBqQ_gF1FpWhrI",
    authDomain: "firease-mario.firebaseapp.com",
    projectId: "firease-mario",
    storageBucket: "firease-mario.appspot.com",
    messagingSenderId: "261762197950",
    appId: "1:261762197950:web:26e54dbdc9037672b4b1ef",
    measurementId: "G-6D654V2T2G"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const firestore = getFirestore(app);
  export const storage = getStorage(app);