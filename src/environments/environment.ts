// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqqx5Av2yan28TPt_uISU6RX31V0H9ld0",
  authDomain: "termometer-iot.firebaseapp.com",
  projectId: "termometer-iot",
  storageBucket: "termometer-iot.appspot.com",
  messagingSenderId: "55341521437",
  appId: "1:55341521437:web:5a1e610ca6eb81a49c84f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
