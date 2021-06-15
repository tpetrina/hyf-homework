import React from 'react';
import UserProvider from './components/UserProvider'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Github User Searcher </h1>
      <UserProvider />
    </div>
  );
}

export default App;
