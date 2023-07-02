// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBuJ1sLXq6lStCS7y5baYgGky2WjUbE88k",
    authDomain: "student-details-9d8d6.firebaseapp.com",
    projectId: "student-details-9d8d6",
    storageBucket: "student-details-9d8d6.appspot.com",
    messagingSenderId: "936940404385",
    appId: "1:936940404385:web:8a631a7e4ac4be1d1a3ae0",
    measurementId: "G-5PK78BW588"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBuJ1sLXq6lStCS7y5baYgGky2WjUbE88k",
//   authDomain: "student-details-9d8d6.firebaseapp.com",
//   projectId: "student-details-9d8d6",
//   storageBucket: "student-details-9d8d6.appspot.com",
//   messagingSenderId: "936940404385",
//   appId: "1:936940404385:web:8a631a7e4ac4be1d1a3ae0",
//   measurementId: "G-5PK78BW588"
// };

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);