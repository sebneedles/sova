// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAflLPsHLwTg6agNFLX4SM5mVAq1gFkK78',
  authDomain: 'sova-auth-app.firebaseapp.com',
  projectId: 'sova-auth-app',
  storageBucket: 'sova-auth-app.appspot.com',
  messagingSenderId: '640347664813',
  appId: '1:640347664813:web:8713ce06bb0aa099bbb124',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get reference to the service
export const auth = getAuth(app);
