import React, { Suspense } from 'react'
import { createRoot } from 'react-dom'
import './index.css'
import App from './App'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import { relayEnvironment } from './graphql/relay'

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>
)
