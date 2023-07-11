import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyB0kGDWSICsk29LpgM3S2DgZ_CVU9TUfsc",
  authDomain: "placmements.firebaseapp.com",
  projectId: "placmements",
  storageBucket: "placmements.appspot.com",
  messagingSenderId:"326716354122",
  appId: "1:326716354122:web:ef846eff9500718b1bc0b3"
};
console.log(process.env.REACT_APP_API_KEY)
const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => {signInWithPopup(auth,provider).then((res)=>{
//     console.log(res);
// })

// };
export {auth,provider};