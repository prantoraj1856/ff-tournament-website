// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZgNI29JXE4jywdgC_Pnyw_FV2vw2KYAw",
  authDomain: "pranto-ff.firebaseapp.com",
  projectId: "pranto-ff",
  storageBucket: "pranto-ff.firebasestorage.app",
  messagingSenderId: "936271925064",
  appId: "1:936271925064:web:f1710b460c94ff1aee2d7d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
