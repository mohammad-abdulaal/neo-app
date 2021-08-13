import Nav from './components/Nav';
import  Upload  from './components/Upload';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Fetching from './components/Fetching';
import React,{useState} from 'react';
function App() {
  const [file,setFile]=useState([]);
  return (
    <BrowserRouter>
          <div >
            <Nav/>
            <Switch>
              <Route exact path="/Upload"  component = {()=> <Upload file={file} setFile={setFile} />}></Route>
              <Route exact path="/Fetching"  component = {()=> <Fetching file={file} setFile={setFile}/>}></Route>
            </Switch>
          </div>
    </BrowserRouter>
  );
}

export default App;
