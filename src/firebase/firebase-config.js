import * as React from 'react';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDS_LpX1jZvXcTZiQutAs-dTYm8-YFOgfc',
  authDomain: 'job-finder-app-fb9fd.firebaseapp.com',
  databaseURL: 'https://job-finder-app-fb9fd-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'job-finder-app-fb9fd',
  storageBucket: 'job-finder-app-fb9fd.appspot.com',
  messagingSenderId: '981831217824',
  appId: '1:981831217824:web:a8e5d74d5798aa7c56cfc5',
};

// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
//Init services

export default function firebaseSetup() {
  return { firebase, Auth, database, storage };
}
