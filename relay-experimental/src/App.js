// @flow
import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import './App.css';
import { environment } from './relay/environment';
import Launches from './components/Launches';

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <React.Suspense fallback={<div>loading...</div>}>
        <Launches />
      </React.Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
