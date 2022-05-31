import React from 'react';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";

import './App.css';
import {InputComponent} from "./components";
import {PolicyPage} from "./policy";
import {Navigation} from "./navigation";
import {Nonsensopedia} from "./nonsensopedia"

export const routesPath = {
  about: 'about'
}

export const githubpage = {
  me: <a href="https://github.com/Barthas255">About Me</a>
}

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Navigation/>}/>
            <Route path='/about' element={githubpage.me}/>
            <Route path='/policy' element={<PolicyPage/>}/>
            <Route path='/form' element={<InputComponent defaultValue={'hello form'}/> }/>
            <Route path='/nonsensopedia' element={<Nonsensopedia/> }/>
            <Route path='*' element={<div>404</div>}/>
          </Routes>
        </Router>
      </div>
  )
}

export default App;
