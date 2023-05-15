// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, GithubAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyABj_IDOSKTF9KCahvCrmkEMD7zu0VjNe0',
  authDomain: 'nancy-s-new-market.firebaseapp.com',
  projectId: 'nancy-s-new-market',
  storageBucket: 'nancy-s-new-market.appspot.com',
  messagingSenderId: '1080687566221',
  appId: '1:1080687566221:web:aa0ebe582d716b358bf1c4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleauthprovider = new GoogleAuthProvider();
export const githubauthprovider = new GithubAuthProvider();
