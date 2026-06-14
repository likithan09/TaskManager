import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
 apiKey: "AIzaSyB3MBN_1UIcavVA1bkZb9DpcQguDpBlAc0",
  authDomain: "taskmanager-likhitha.firebaseapp.com",
  projectId: "taskmanager-likhitha",
  storageBucket: "taskmanager-likhitha.firebasestorage.app",
  messagingSenderId: "146280805159",
  appId: "1:146280805159:web:a49673a7ed84a0c46e3382"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };