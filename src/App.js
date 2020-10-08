import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import {Switch, Route} from 'react-router';
import SignIn from './Pages/SignIn-F/SignIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Pages/Home-F/Home'

// https://chat-app-74c6e.firebaseapp.com/__/auth/handler  for firebase facebook
function App() {
  return <Switch>
    <Route path="signin">
      <SignIn/>
    </Route>
    <Route>
      <PrivateRoute path="/">
        <Home/>
      </PrivateRoute>
    </Route>
  </Switch>
}

export default App;
