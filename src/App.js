import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import './styles/main.scss'
import {Switch} from 'react-router';
import SignIn from './Pages/SignIn-F/SignIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PublicRoute from './Components/PublicRoute-F/PublicRoute'
import Home from './Pages/Home-F/Home'

// https://chat-app-74c6e.firebaseapp.com/__/auth/handler  for firebase facebook 
function App() {
  return <Switch>
    <PublicRoute path="/signin">
      <SignIn/>
    </PublicRoute>  
      <PrivateRoute path="/">
        <Home/>
      </PrivateRoute>
  </Switch>
}

export default App;
