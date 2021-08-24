import axios from 'axios';
import React, { useState } from 'react'
import './EditPotluck.css'

function EditPotluck() {

    const [newValues, setNewValues] = useState({})

    const editPotluck = e => {
        e.preventDefault();
        const newPotluck = {
            id: this.id,
            name: this.name,
            date: this.date,
            location: this.location,
            food_items: this.food_items,
        }
        axios.put(`https://build-week4.herokuapp.com/api/events/:event_id`, newPotluck)
        .then(res => {
            setNewValues(res.data);
        })
    }

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
                    <input>Edit Name</input>
                    <button onClick={editPotluck}>Submit Updated Name</button>
                <div className='potluck-info'>
                    <p>Location: {potluck.location}</p>
                        <button>Edit Location</button>
                    <p>Date: {potluck.date}</p>
                        <button>Edit Date</button>
                </div>
            </div>
            ))}
        </div>
    )
}

export default EditPotluck;
