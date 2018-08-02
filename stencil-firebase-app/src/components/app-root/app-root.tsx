import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
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
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <div>
          <ul>
            {this.messages.map(message => (
              <li>{message}</li>
            ))}
          </ul>
        </div>

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
