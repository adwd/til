import firebaseApp from './firebase-app';

declare var Context: {
  firebaseApp: firebase.app.App;
};

Context.firebaseApp = firebaseApp.app();
