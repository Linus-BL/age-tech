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
import Deal from './components/shop/Deal'
import Heading5 from './components/textComponents/Heading5'
import CoopImage from './coop.png'
import Adcard from './components/atomics/AdCard'
import testImage from './ad_test.jpg'
import Points from './components/shop/Points'

const deal = {
  title: "Rabatt på coop",
  description: "bla bla bla, så här mycket rabbat kan du få på hela sortimentet",
  points: 24,
  image: CoopImage
}

const ad = {
  id: 1,
  title: "Baka hos mig",
  description: "Kom och baka",
  image: testImage,
  location: "Skultunaparken",
  date: "20 november",
  points: 23,
}
const user = {
  points: 245
}
function App() {
  return (
    <>
      <Points user={user}></Points>
      <Adcard ad={ad}></Adcard>
      <Heading5>hej hallå</Heading5>
      <Deal onClickFunction={() => { console.log("deal") }} deal={deal}></Deal>
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
