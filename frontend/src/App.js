import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Institution from './container/Institution';
import Staff from './container/Staff';

export default function App() {
  return (
    <Router>
            
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/staff">
            <Staff />
          </Route>
          <Route path="/">
            <Institution/>
          </Route>
        </Switch>
    
    </Router>
  );
}


function About() {
  return <h2>About</h2>;
}
