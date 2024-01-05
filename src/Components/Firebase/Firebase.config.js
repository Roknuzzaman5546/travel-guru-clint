// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsZWrSrNznFY7Z211gRnHBsA9x_YctVXI",
  authDomain: "travel-guru-71001.firebaseapp.com",
  projectId: "travel-guru-71001",
  storageBucket: "travel-guru-71001.appspot.com",
  messagingSenderId: "442142768005",
  appId: "1:442142768005:web:4c678a907514f4965a62ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);