import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route  path='/project/:id' component={ProjectDetails}></Route>
          <Route path='/signIn' component={SignIn}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
