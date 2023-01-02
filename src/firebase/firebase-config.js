import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4QjNqPX37UvOKTsT6Z6bCAgumY-75XAg",
  authDomain: "job-finder-app-c1066.firebaseapp.com",
  projectId: "job-finder-app-c1066",
  storageBucket: "job-finder-app-c1066.appspot.com",
  messagingSenderId: "81602874614",
  appId: "1:81602874614:web:f2f26a994cf0b8e69430d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Init services
export const db = getFirestore(app);