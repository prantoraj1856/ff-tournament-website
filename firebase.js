// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBZgNI29JXE4jywdgC_Pnyw_FV2vw2KYAw",
  authDomain: "pranto-ff.firebaseapp.com",
  projectId: "pranto-ff",
  storageBucket: "pranto-ff.firebasestorage.app",
  messagingSenderId: "936271925064",
  appId: "1:936271925064:web:f1710b460c94ff1aee2d7d",
  measurementId: "G-V3SWSEZWC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth
export const auth = getAuth(app);
