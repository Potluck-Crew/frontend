import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axiosWithAuth from '../helpers/axiosWithAuth';
import './NewPotluck.css';



function NewPotluck(props) {
    const{
        disabled,
        // errors,
    } = props

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
                <div>{errors.event_name}</div>
                {/* Event Date */}
                <label>Date of Event: (MM/DD/YYYY)
                    <input
                        value={potluck.date}
                        name='date'
                        type='text'
                        onChange={handleChange}
                    />
                </label>
                <div>{errors.event_date}</div>
                {/* Food Items */}
                
                <label>Item 1:
                    <input
                        type="text"
                        name="food_items"
                        value={potluck.dish_name}
                        onChange={handleChange}
                    />
                </label>

                <label>Item 2:
                    <input
                        type="text"
                        name="food_items"
                        value={potluck.dish_name}
                        onChange={handleChange}
                    />
                </label>

                <label>Item 3:
                    <input
                        type="text"
                        name="food_items"
                        value={potluck.dish_name}
                        onChange={handleChange}
                    />
                </label>

                <label>Number Needed: (Optional)
                    <input
                        name='numberneeded'
                        type='text'
                    />
                </label>

                <label>Food Notes: (Optional)
                    <input
                        name='foodnotes'
                        type='text'
                    />
                </label> 

                
                {/* Invite Friends */}



                {/* Notes & Submit Button */}
                 <label>Notes: (Optional)
                    <input
                        value={potluck.location}
                        name='location'
                        type='text'
                        onChange={handleChange}
                    />
                </label>
                <button className='signup_button' disabled={disabled}>Submit</button>
                </form>
            </div>
       
    )
}

export default NewPotluck;
