// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";

// Your Firebase Config
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

// Initialize Services
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Export auth so other files can use it
export { auth };
