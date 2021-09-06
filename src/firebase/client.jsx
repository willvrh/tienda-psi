import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABFJIy3elFZloUAVmtQa_uusTpkUtmFeU",
    authDomain: "tienda-psi.firebaseapp.com",
    projectId: "tienda-psi",
    storageBucket: "tienda-psi.appspot.com",
    messagingSenderId: "819126983272",
    appId: "1:819126983272:web:61c131a55ef29d2cdb39dd",
    measurementId: "G-4NQY41MG8X"
  };
  
  // Initialize Firebase
 const app = initializeApp(firebaseConfig);

  export const getData = () => getFirestore(app);
