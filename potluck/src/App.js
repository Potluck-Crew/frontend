import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import NewAccount from './components/NewAccount';
import Login from './components/Login';
import EditPotluck from './components/EditPotluck';
import Potlucks from './components/Potlucks';
import NewPotluck from './components/NewPotluck';
import PotluckSignup from './components/PotluckSignup';
import Header from './components/Header';
import { connect } from 'react-redux'


function App() {

  return (
    <Router>
      <div className="App">
        <Header /> 
        <div className='content'>
        <Switch>
            <Route path='/newaccount' component={NewAccount} />
            <Route path='/potlucks' component={Potlucks} />
            <Route path='/addnewpotluck' component={NewPotluck} />
            <Route path='/potlucksignup' component={PotluckSignup} />
            <Route path='/editpotluck/:id' component={EditPotluck} />
            <Route path='/' component={Login} />
            
        </Switch>
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.token,   
    role: state.role,
  };
};

export default connect(mapStateToProps,{})(App);
