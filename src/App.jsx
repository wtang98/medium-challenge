import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav.jsx';
import StartWriting from './Components/StartWriting/StartWriting.jsx';
import Side from "./Components/Side/Side";
import Latest from './Components/Latest/Latest';
import Featured from './Components/Featured/Featured';
import FeaturedArti from './Components/FeaturedArti/FeaturedArti';

function App() {
  return (
    <>
      <Nav className="nav1"/>
      <br/>
      <div className="content">
        <div className="content__left">
          <StartWriting className="splash"/>
          <Latest title={"Java 17 New Features | Pattern Matching for switch | Part 5"} text={"Traditionally, a switch throws NullPointerException if the selector expression evaluates to null. This is well-understood behavior and we…"} writer={"Omid Haghighatgoo"} date={"Aug 17"} min={"2"}/>
          <Latest title={"Contextual Logging in Event-Driven Java Services"} text={"Moving away from thread-based context"} writer={"Randal Kamradt Sr in Javarevisited"} date={"Sep 9"} min={"8"} />
          <Latest title={"IoT in GIS"} text={"IoT is a buzzword these days. Today we will learn the basic of IoT and its application in Geospatial domain."} writer={"Suchismita Sahu in Analytics Vidhya"} date={"Aug 27"} min={"12"}/>
          <Featured className="content__left-f" writer = "Lars Janus"/>
          <Latest title={"IoT in GIS"} text={"Pop smoke learns react in 3 hours"} date={"Aug 27"} min={"22"}/>
          <Latest title={"Wei-Tong"} text={"Are you too stupid for Javascript"} date={"Aug 27"} min={"3"}/>
        </div>
        <Side className="side"/>
      </div>
    </>
  );
}

export default App;
