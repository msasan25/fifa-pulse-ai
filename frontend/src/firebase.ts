import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBaVNlW7-VuiizFnvZsNSHRc-RbMZDQiGk",
    authDomain: "fifa-pulse-ai-c3988.firebaseapp.com",
    projectId: "fifa-pulse-ai-c3988",
    storageBucket: "fifa-pulse-ai-c3988.firebasestorage.app",
    messagingSenderId: "629373602998",
    appId: "1:629373602998:web:2ad3e0ae45d6f160c46a17",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);