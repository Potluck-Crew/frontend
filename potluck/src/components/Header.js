import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import '../App.css'
import axios from 'axios';
import { connect } from 'react-redux'
import axiosWithAuth from '../helpers/axiosWithAuth';


function Header(props) {

// There might be a better place for this but for now keeping it here
  const handleLogout = () => {
    axiosWithAuth().get('https://build-week4.herokuapp.com/api/auth/users')
    .then(res => {
        console.log(res)
    localStorage.removeItem('token');
    document.location.href = '/login'
    });
  }

    return (
        <div className='header'>
            <Link className='logo'  to='/'>perfect potluck</Link>
            <div>
                {props.isLoggedIn ? <div>
                  <span>Welcome Back, {props.username}!</span>
                  <Link className="nav" onClick={handleLogout} to='/logout'>LOG OUT</Link>
                  <Link className="nav" to='/potlucks'>VIEW POTLUCKS </Link>
                </div> : <Link className="nav" to='/newaccount'>CREATE AN ACCOUNT</Link>}
                
            
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      token: state.token,
      isLoggedIn: state.isLoggedIn,
      username: state.username,
    };
  };

export default connect(mapStateToProps, {})(Header)
