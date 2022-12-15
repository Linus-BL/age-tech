import React from 'react';
import './css/main.css';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import AuthProvider from './context/AuthContext';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <>
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
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
