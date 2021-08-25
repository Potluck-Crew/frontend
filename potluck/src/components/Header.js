import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import '../App.css'
import axios from 'axios';
import { connect } from 'react-redux'
import axiosWithAuth from '../helpers/axiosWithAuth';


function Header() {

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
            <div className='logo'>perfect potluck</div>
            <div>
                <Link className="nav" to='/'>Home</Link>
                <Link className="nav" to='/'>Login</Link>
                <Link className="nav" onClick={handleLogout} to='/logout'>SIGN OUT</Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      token: state.token,
      
    };
  };

export default connect(mapStateToProps, {})(Header)
