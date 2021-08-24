import React from 'react'
import './EditPotluck.css'

function EditPotluck() {

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
                    <button>Edit Name</button>
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
