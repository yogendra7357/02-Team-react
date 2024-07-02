import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import OrganizationTeam from './Components/Organization/OrganizationTeam.jsx';
import TemeMamber from './Components/Hierarchy/TemeMamber.jsx';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Navbar/>
        <Routes>
        <Route path="/" element= {<div>My Teams</div>}/>
        <Route path="/MyProject" element= {<div>My Project</div>}/>
        <Route path="/Organization" element= {<OrganizationTeam/>}/>
        <Route path="/Hierarchy" element= {<TemeMamber/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
