const config = {
    apiKey: "AIzaSyCgpwQEHZHUhwoqC9rg09H1W6QZnIcIQXc",
    authDomain: "kpistory-app.firebaseapp.com",
    projectId: "kpistory-app",
    storageBucket: "kpistory-app.appspot.com",
    messagingSenderId: "98531123654",
    appId: "1:98531123654:web:75d47d8c068deba57792c7",
    measurementId: "G-ELYHHZMFBJ"
  };

  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.ts');
    } else {
      return config;
    }
  }    