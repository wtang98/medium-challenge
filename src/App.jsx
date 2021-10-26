import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav.jsx';
import StartWriting from './Components/StartWriting/StartWriting.jsx';
import Side from "./Components/Side/Side";
import Latest from './Components/Latest/Latest';
import Featured from './Components/Featured/Featured';

import latestData from "./Data/latestData.js"


function App() {

  const filteredArr = latestData.filter(lateData => lateData.title).slice(0,3);
  const afterArr = latestData.filter(lateData => lateData.title).slice(3,6);

  // const results = filteredArr.map(result => result.)

  return (
    <>
      <Nav className="nav1"/>
      <br/>
      <div className="content">
        <div className="content__left">
          <StartWriting className="splash"/>
          <Latest dataArr={filteredArr}/>
          <Featured className="content__left-f" writer = "Lars Janus"/>
          <Latest dataArr={afterArr}/>
        </div>
        <Side className="side"/>
      </div>
    </>
  );
}

export default App;
