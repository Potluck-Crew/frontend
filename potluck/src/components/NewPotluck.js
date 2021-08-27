import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axiosWithAuth from '../helpers/axiosWithAuth';
import './NewPotluck.css';
import schema from '../Schema';
import * as yup from 'yup'

const initialFormValues = {
    event_name: '',
    event_location: '',
    event_date: '',
}

const initialFormErrors = {
    event_name: '',
    event_location: '',
    event_date: '',
}

const initialDisabled = true

function NewPotluck(props) {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        validate(name, value)
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

    // const {
    //     values,
    //     change,
    //     disabled,
    //     errors
    // } = props

    const history = useHistory();

    // const handleChange = (e) => {
    //     // console.log(e.target.value);
    //     change(e.target.name, e.target.value)
    // }

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
        // createPotluck(potluck);
    }

    return (
            <div className='general_wrapper'>
                <form onSubmit={onSubmit} key='1234'>
                <h2>New Potluck</h2>

                {/* Event Details */}
                <label>Event Name:
                    <input
                        value={formValues.event_name}
                        name='event_name'
                        type='text'
                        onChange={handleChange}
                        key='123'
                    />
                </label>
                <div className='errors'>{formErrors.event_name}</div>
                {/* Event Date */}
                <label>Date of Event: (MM/DD/YYYY)
                    <input
                        value={formValues.event_date}
                        name='event_date'
                        type='text'
                        onChange={handleChange}
                    />
                </label>
                <div className='errors'>{formErrors.event_date}</div>
                {/* Event Location */}
                <label>Location:
                    <input
                        value={formValues.event_location}
                        name='event_location'
                        type='text'
                        onChange={handleChange}
                    />
                </label>
                <div className='errors'>{formErrors.event_location}</div>
                {/* Food Items */}
                
                <label>Item 1:
                    <input
                        type="text"
                        name="dish_name"
                        value={formValues.dish_name}
                        onChange={handleChange}
                    />
                </label>

                <label>Item 2:
                    <input
                        type="text"
                        name="dish_name"
                        value={formValues.dish_name}
                        onChange={handleChange}
                    />
                </label>

                <label>Item 3:
                    <input
                        type="text"
                        name="dish_name"
                        value={formValues.dish_name}
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
                        name='notes'
                        type='text'
                    />
                </label>
                <button className='signup_button' disabled={disabled}>Submit</button>
                </form>
            </div>
       
    )
}

export default NewPotluck;
