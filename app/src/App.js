import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {


  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('api/v1/person')
        .then(response => response.json())
        .then(data => {
          setGroups(data);
          setLoading(false);
        })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
