import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './container/Home';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
