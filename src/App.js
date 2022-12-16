import React from 'react';
import './css/main.css';
import Signup from './components/login/Signup';
import Dashboard from './components/profile/Dashboard';
import Login from './components/login/Login';
import ForgotPassword from './components/login/ForgotPassword';
import AuthProvider from './context/AuthContext';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import PrivateRoute from './components/nav/PrivateRoute';
import UpdateProfile from './components/profile/UpdateProfile';
import LinkButton from './components/atomics/LinkButton';
import Button from './components/atomics/Button';

function App() {
  return (
    <>
      <LinkButton onClickFunction={() => console.log("knapp")}>Visa mer</LinkButton>
      <Router>
        <AuthProvider>
          <Switch>
            {/*Allt i appen ska samma struktur som dashboard (förutom login/signup/forgotPassword)*/}
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="" element={<Dashboard />} />
            </Route>
            {/* Aka raderna mellan dessa två kommentarer */}
            <Route path="/updateProfile" element={<PrivateRoute />}>
              <Route path="" element={<UpdateProfile />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route exact path="/" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
