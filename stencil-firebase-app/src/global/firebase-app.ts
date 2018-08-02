import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseApiKey } from '../utils/env';

export default (() => {
  // Initialize Firebase
  const config = {
    apiKey: firebaseApiKey,
    authDomain: "stencil-firebase-app.firebaseapp.com",
    databaseURL: "https://stencil-firebase-app.firebaseio.com",
    projectId: "stencil-firebase-app",
    storageBucket: "stencil-firebase-app.appspot.com",
    messagingSenderId: "391261901316"
  };
  const app = firebase.initializeApp(config);
  app.firestore().settings({ timestampsInSnapshots: true });

  return {
    app: () => app,
  };
})();
