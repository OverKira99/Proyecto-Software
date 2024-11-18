import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBmebnxkLuDfp74g72VnRStZG-xEGtx7Qo",
  authDomain: "ingsoftware-b2b55.firebaseapp.com",
  projectId: "ingsoftware-b2b55",
  storageBucket: "ingsoftware-b2b55.firebasestorage.app",
  messagingSenderId: "737370901590",
  appId: "1:737370901590:web:a04147efcd285f5dd1bff7",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);