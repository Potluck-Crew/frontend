import React, { useEffect, useState } from 'react'
import '../App.css'
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../helpers/axiosWithAuth';


function EditPotluck(props) {
    const { push } = useHistory();
	const { id } = useParams();
    const [potluck,setPotluck] = useState({
        event_date: '',
        event_dishes: [],
        event_location: '',
        event_name: '',
    })

    useEffect(() => {
       axiosWithAuth().get(`https://build-week4.herokuapp.com/api/events/${id}`)
       .then(res => {
           console.log(res.data)
           setPotluck(res.data)
       })
    }, [])

    return (
        <div className='general_wrapper'>
            <form>
                <input 
                    value={potluck.event_name}
                    name='event_name'
                    type='text'
                />
                <input 
                    value={potluck.event_date}
                    name='event_date'
                    type='text'
                />
                <input 
                    value={potluck.event_location}
                    name='event_location'
                    type='text'
                />
                

            </form>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
      token: state.token,   
      role: state.role,
    };
  };

export default connect(mapStateToProps,{})(EditPotluck);
