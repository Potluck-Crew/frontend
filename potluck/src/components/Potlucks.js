import React, {useState, useEffect} from 'react'
import '../App.css';
import { connect } from 'react-redux'
import axiosWithAuth from '../helpers/axiosWithAuth';
import {useHistory} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";


function Potlucks(props) {
    const [ potlucks, setPotlucks ] = useState([''])
    const { push } = useHistory();

    // #FIXTHIS: Organizer items should only show up if role is organizer
    // You need to refresh for items to show up after login
    let organizer = true;

    useEffect(() => {
        axiosWithAuth().get('https://build-week4.herokuapp.com/api/events')
        .then(res => {
            // console.log(res.data);
            setPotlucks(res.data)
        })
    }, [])

    const handleCreate = () => {
        push('/addnewpotluck')
    }
 
    return (
        <div className='container'>
           <h2>Available Potlucks</h2>
           {potlucks.map(potluck => (
               <div className='potluck'> 
               <h3>{potluck.event_name}</h3>
                    <div className='potluck-info'>
                    <p>Location: {potluck.event_location}</p>
                    <p>Date: {potluck.event_date}</p>
                      

                    <p><Link to='/potlucksignup'> Sign up for this potluck</Link> | 
                        &nbsp;{organizer && <Link to={`/editpotluck/${potluck.event_id}`}>Edit Potluck</Link>} </p>
                    </div>
               </div>
           ))}
            {/*Showing add potluck button if organizer is true */}
            {organizer && <button className='signup_button' onClick={handleCreate}>Create a new potluck</button>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      token: state.token,   
      role: state.role,
    };
  };

export default connect(mapStateToProps,{})(Potlucks)
