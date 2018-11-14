import { Component, Prop, State } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @Prop({ context: 'isServer' }) private isServer: boolean;
  @Prop({ context: 'firebaseApp' }) private firebaseApp: firebase.app.App;
  @State() messages = [];
  
  componentWillLoad() {
    if (this.isServer) {
      return;
    }

    this.firebaseApp.firestore().collection('messages').get()
      .then(querySnapshot => {
        this.messages = querySnapshot.docs.map(doc => doc.data().text);
      });
  }

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <div>
          <ul>
            {this.messages.map(message => (
              <li>{message}</li>
            ))}
          </ul>
        </div>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
        <app-todos />
      </div>
    );
  }
}
