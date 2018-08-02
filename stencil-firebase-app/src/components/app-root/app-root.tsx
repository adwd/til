import { Component } from '@stencil/core';
import firebase from 'firebase/app';
import { firebaseApiKey, isProd } from '../../utils/env';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  componentDidLoad() {
    // Initialize Firebase
    const config = {
      apiKey: firebaseApiKey,
      authDomain: "stencil-firebase-app.firebaseapp.com",
      databaseURL: "https://stencil-firebase-app.firebaseio.com",
      projectId: "stencil-firebase-app",
      storageBucket: "stencil-firebase-app.appspot.com",
      messagingSenderId: "391261901316"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
