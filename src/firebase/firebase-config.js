import * as React from 'react';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD4QjNqPX37UvOKTsT6Z6bCAgumY-75XAg',
  authDomain: 'job-finder-app-c1066.firebaseapp.com',
  databaseURL: 'https://job-finder-app-c1066-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'job-finder-app-c1066',
  storageBucket: 'job-finder-app-c1066.appspot.com',
  messagingSenderId: '81602874614',
  appId: '1:81602874614:web:0b9d7801a2f50bad9430d7',
  measurementId: 'G-4CP5PHQQ1C',
};

// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
//Init services

export default function firebaseSetup() {
  return { firebase, Auth, database, storage };
}
