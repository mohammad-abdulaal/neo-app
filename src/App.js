import Nav from './components/Nav';
import  Upload  from './components/Upload';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Fetching from './components/Fetching';
import React,{useState} from 'react';
function App() {
  return (
    <BrowserRouter>
          <div >
            <Nav/>
            <Switch>
              <Route exact path="/Upload"  component = {()=> <Upload />}></Route>
              <Route exact path="/Fetching"  component = {()=> <Fetching/>}></Route>
            </Switch>
          </div>
    </BrowserRouter>
  );
}

export default App;
