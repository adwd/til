import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [showLogo, setShowLogo] = React.useState(true);
  return (
    <div className="App" onClick={() => setShowLogo(show => !show)}>
      <header className="App-header">
        {showLogo && <img src={logo} className="App-logo" alt="logo" />}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
