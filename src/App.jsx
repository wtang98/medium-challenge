import React from 'react';
import './App.scss';
import Nav from './Components/Nav/Nav.jsx';
import StartWriting from './Components/StartWriting/StartWriting.jsx';

function App() {
  return (
    <>
    <Nav className="nav1"/>
    <br />
    <StartWriting className="nav2" />
    </>
  );
}

export default App;
