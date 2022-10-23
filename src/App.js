import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import {Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./components";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
 
 
 


function App() {
  return (
    <> 
    <CssBaseline />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/experience" component={Experience} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contacts} />
    <Route path="/skill" component={Skills} />
     

   
    </Switch>

    </>
  );
}

export default App;
