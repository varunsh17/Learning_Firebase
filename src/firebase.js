import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDrFfeJkAsT-SFFtUe63NntCUV9ChPhShg",
    authDomain: "fir-2f124.firebaseapp.com",
    projectId: "fir-2f124",
    storageBucket: "fir-2f124.appspot.com",
    messagingSenderId: "1070217333815",
    appId: "1:1070217333815:web:9bdf3ebd6b5e6ba25203b2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

