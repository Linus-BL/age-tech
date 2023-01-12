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
import OwnProfile from './components/profile/OwnProfile';
import Profile from './components/profile/Profile';
import Home from './components/home/Home';
import SignupDetails from './components/login/SignupDetails';
import Offer from './components/ads/Offer';
import Request from './components/ads/Request';
import Shop from './components/shop/Shop';
import AdOpened from './components/atomics/AdOpened';
import Navbar from './components/nav/Navbar';
import SelectTags from './components/login/SelectTags';
import AllAdsByCategory from './components/home/AdsByCategory';
import AllAdsUser from './components/profile/AllAdsUser';
import CreateAd from './components/ads/CreateAd';
import Transaction from './components/atomics/Transaction';

function App() {
  return (
    <div className="app">
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
              <Route path="" element={<OwnProfile />} />
            </Route>
            <Route path="/profile/:userId" element={<PrivateRoute />}>
              <Route path="" element={<Profile />} />
            </Route>
            <Route path="/home" element={<PrivateRoute />}>
              <Route path="" element={<Home />} />
            </Route>
            <Route path="/shop" element={<PrivateRoute />}>
              <Route path="" element={<Shop />} />
            </Route>
            <Route path="/allAds" element={<PrivateRoute />}>
              <Route path="/allAds/:tagName" element={<AllAdsByCategory />} />
            </Route>
            <Route path="/allAdsUser" element={<PrivateRoute />}>
              <Route path="/allAdsUser/:userId" element={<AllAdsUser />} />
            </Route>
            <Route path="/ad" element={<PrivateRoute />}>
              <Route path="/ad/:id" element={<AdOpened />} />
            </Route>
            <Route path="/signupDetails" element={<PrivateRoute />}>
              <Route path="" element={<SignupDetails />} />
            </Route>
            <Route path="/createOffer" element={<PrivateRoute />}>
              <Route path="" element={<Offer />} />
            </Route>
            <Route path="/createRequest" element={<PrivateRoute />}>
              <Route path="" element={<Request />} />
            </Route>
            <Route path="/selectTags" element={<SelectTags />}>
              <Route path="" element={<Request />} />
            </Route>
            <Route path="/createAd" element={<PrivateRoute />}>
              <Route path="" element={<CreateAd />} />
            </Route>
            <Route path="/transaction/:id" element={<Transaction />}>
              <Route path="" element={<CreateAd />} />
            </Route>

            <Route path="/signup" element={<Signup />} />
            <Route exact path="/" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
          </Switch>
          <Navbar />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
