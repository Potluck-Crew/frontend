import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './EditPotluck.css'

function EditPotluck(props) {
    const { event_id } = useParams();

    const [newPotluck, setNewPotluck] = useState({
        event_name: '',
        date: '',
        location: ''
    })

    const { name, date, location } = props;

    const handleChange = (e) => {
            setNewPotluck({
                ...newPotluck,
                [e.target.name]: e.target.value,
            })
        }
        
    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`https://build-week4.herokuapp.com/api/events/${event_id}`, newPotluck)
        .then(res => {
            setNewPotluck(res.data);
        })
        .catch(err => {
            console.error(err)
        })
    }

    useEffect(() => {
        axios.get(`https://build-week4.herokuapp.com/api/events/${event_id}`)
        .then(res => {
            setNewPotluck(res.data);
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    let organizer = true;

    const testPotlucks = [
        {
            id: 1,
            name: 'Potluck Crew\'s Potluck',
            date: 'August 23, 2021',
            location: 'Orlando, FL',
            food_items: ['Appetizer', 'Main Dish', 'Dessert']
        },
        {
            id: 2,
            name: 'Mabel\'s Birthday Potluck',
            date: 'September 2, 2021',
            location: 'Las Vegas, NV',
            food_items: ['Appetizer', 'Main Dish']
        }
    ]

    return (
        <div className="form-container">
            <h4>Edit Potluck</h4>
            {testPotlucks.map(potluck => (
            <div className='potluck'>
                <h3>{potluck.name} </h3>
                    <input value={newPotluck.event_name} placeholder='Edit Name'/>
                <div className='potluck-info'>
                    <p>Location: {potluck.location}</p>
                        <input value={newPotluck.location} placeholder='Edit Location' />
                    <p>Date: {potluck.date}</p>
                        <input value={newPotluck.date} placeholder='Edit Date' />
                <button onClick={handleChange}>Submit Updates</button>
                </div>
            </div>
            ))}
        </div>
    )
}

export default EditPotluck;
