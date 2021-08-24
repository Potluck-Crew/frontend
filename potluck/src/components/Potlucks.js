import React from 'react'
import './Potlucks.css';

function Potlucks() {

    let organizer = true;

    // test potluck data
    const testPotlucks = [
        {   id: 1,
            name: 'Potluck Crew\'s Potluck',
            date: 'August 23, 2021' ,   
            location: 'Orlando, FL', 
            food_items: ['Appetizer', 'Main Dish', 'Dessert']    },
        {   id: 2, 
            name: 'Mabel\'s Birthday Potluck',
            date: 'September 2, 2021',
            location: 'Las Vegas, NV', 
            food_items: ['Appetizer', 'Main Dish']
        }
    ]
    return (
        <div className='container'>
           <h2>Available Potlucks</h2>

            {/*Looping through potlucks */}
            {testPotlucks.map(potluck => (
               <div className='potluck'> 
                <h3>{potluck.name} </h3>
                <div className='potluck-info'>
                    <p>Location: {potluck.location}</p>
                    <p>Date: {potluck.date}</p>
                    <p><a href='/potlucksignup'> Sign up for potluck</a> | 
                        &nbsp;{organizer && <a href='/editpotluck'>Edit Potluck</a>} </p>
                       {potluck.food_items.map(item => (
                            <li>{item}</li>
                        ))}
                </div>
               </div>
            ))}
            {/*Showing add potluck button if organizer is true */}
            {organizer && <a href='/addnewpotluck'> Create a new potluck</a>}
            
        </div>
    )
}

export default Potlucks
