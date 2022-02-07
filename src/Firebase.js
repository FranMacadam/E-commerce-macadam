import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD-Y3PDOKZK1MfaRi-8TwN3cXGt2UKWtr8",
    authDomain: "e-commerce-macadam.firebaseapp.com",
    projectId: "e-commerce-macadam",
    storageBucket: "e-commerce-macadam.appspot.com",
    messagingSenderId: "528539094995",
    appId: "1:528539094995:web:9effe86b4cfc2e6baf2926",
    measurementId: "G-ZNVG4NZG4Y"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)