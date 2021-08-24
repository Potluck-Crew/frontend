import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import '../App.css'

function Header() {
    return (
        <div className='header'>
            <div className='logo'>perfect potluck</div>
            <div>
                <Link className="nav" to='/'>Home</Link>
                <Link className="nav" to='/'>Login</Link>
                <Link className="nav"  to='/potlucks'>All Potlucks</Link>
                <Link className="nav" to='/addnewpotluck'>New Potluck</Link>
            </div>
        </div>
    )
}

export default Header
