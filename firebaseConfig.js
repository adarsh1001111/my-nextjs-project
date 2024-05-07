import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";

export const firebaseConfig = {
  // appId: "YOUR_APP_ID",
  apiKey: "AIzaSyDura2iWUpPK1VCp1Sz831n-WtpxIllkn0",
  authDomain: "internship-72f12.firebaseapp.com",
  projectId: "internship-72f12",
  storageBucket: "internship-72f12.appspot.com",
  messagingSenderId: "428910796651",
  // appId: "1:428910796651:web:f046cdd2afb0f81c61362e",
  // measurementId: "G-6J4F8ZQCT3"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the authentication service
const auth = getAuth(app);

export { auth, signOut };
