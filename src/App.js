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
import CoopImage from './coop.png';
import testImage from './ad_test.jpg';
import Profile from './components/profile/Profile';
import Home from './components/home/Home';
import SignupDetails from './components/login/SignupDetails';
import Offer from './components/ads/Offer';
import Request from './components/ads/Request';

const deal = {
  title: 'Rabatt på coop',
  description:
    'bla bla bla, så här mycket rabbat kan du få på hela sortimentet',
  points: 24,
  image: CoopImage,
};

const ad = {
  id: 1,
  title: 'Baka hos mig',
  description: 'Kom och baka',
  image: testImage,
  location: 'Skultunaparken',
  date: '20 november',
  points: 23,
};
const user = {
  points: 245,
};
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
              <Route path="/profile" element={<PrivateRoute />}>
                <Route path="" element={<Profile />} />
              </Route>
              <Route path="/home" element={<PrivateRoute />}>
                <Route path="" element={<Home />} />
              </Route>
              <Route path="/createOffer" element={<PrivateRoute />}>
                <Route path="" element={<Offer />} />
              </Route>
              <Route path="/createRequest" element={<PrivateRoute />}>
                <Route path="" element={<Request />} />
              </Route>
              <Route exact path="/" element={<Login />} />
            <Route path="/signupDetails" element={<PrivateRoute />}>
              <Route path="" element={<SignupDetails />} />
            </Route>

            <Route path="/signup" element={<Signup />} />

            <Route path="/forgotPassword" element={<ForgotPassword />} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
