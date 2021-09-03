import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './container/Home';
import RentsList from './container/RentsList';
import Logout from './container/Logout';
import HouseDetails from './container/HouseDetails';

function App() {
  return (
    <div>
      <ToastContainer className="toast-container-custom" />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/rents" component={RentsList} />
        <Route path="/logout" component={Logout} />
        <Route path="/houses/:id" component={HouseDetails} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
