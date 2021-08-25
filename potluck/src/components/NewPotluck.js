import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axiosWithAuth from '../helpers/axiosWithAuth';
import './NewPotluck.css';



function NewPotluck() {

    const initialPotluck = {
        event_name:'',
        date: '',
        location: ''
    }

    const [potluck, setPotluck] = useState(initialPotluck)

    const history = useHistory();
    const [errors, setErrors] = useState('')


    const handleChange = (e) => {
        console.log(e.target.value);
        setPotluck({...potluck,
                    [e.target.name]: e.target.value,
        })
    }

    const createPotluck = (potluck) => {
        axiosWithAuth().post('https://build-week4.herokuapp.com/api/events', potluck)
        .then(res=>{
            console.log(res);
            history.push('/potlucks')
        })
        .catch(err => {
            console.log(err);
        })
}

    const onSubmit = (e) => {
        e.preventDefault();
        createPotluck(potluck);
    }

    return (
            <div className='general_wrapper'>
                <form onSubmit={onSubmit}>
                <h2>New Potluck</h2>

                {/* Event Details */}
                <label>Event Name:
                    <input
                        value={potluck.event_name}
                        name='event_name'
                        type='text'
                        onChange={handleChange}
                    />
                </label>
                {/* Event Date */}
                <label>Date of Event: (MM/DD/YYYY)
                    <input
                        value={potluck.date}
                        name='date'
                        type='text'
                        onChange={handleChange}
                    />
                </label>
                <label>Location:
                    <input
                        value={potluck.location}
                        name='location'
                        type='text'
                        onChange={handleChange}
                    />
                </label>
                <button className='signup_button'>Submit</button>
                </form>
            </div>
       
    )
}

export default NewPotluck;
