import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDyv8ji2F3bLMxUH3CtfOdkYVOaarpCfw",
  authDomain: "tienda-tecnologia-a45fa.firebaseapp.com",
  projectId: "tienda-tecnologia-a45fa",
  storageBucket: "tienda-tecnologia-a45fa.appspot.com",
  messagingSenderId: "878802651563",
  appId: "1:878802651563:web:c7c2a57ddd2af5a815aaee"
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);
const auth = getAuth(app);

export {app, dataBase, auth};