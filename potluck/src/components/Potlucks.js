import React from 'react'

import './Potlucks.css';

function Potlucks() {

    let organizer = true;

    // test potluck data
    const testPotlucks = [
        {   id: 1,
            name: 'Potluck Crew\'s Potluck',
            month: 'August',
            date: 23, 
            year: 2021
        },
        {   id: 2, 
            name: 'Mabel\'s Birthday Potluck',
            month: 'September',
            date: 2,
            year: 2021
        }
    ]
    return (
        <div class='container'>
           <h2>Available Potlucks</h2>

            {/*Looping through potlucks */}
            {testPotlucks.map(potluck => (
               <div className='potluck'> 
                <h3>{potluck.name} </h3>
                <div className='potluck-info'>
                    <p>Date: {potluck.month} {potluck.date}, {potluck.year}</p>
                </div>
               </div>
            ))}
            {/*Showing add potluck button if organizer is true */}
            {organizer && <a href='/addpotluck'> Add a potluck</a>}
            
        </div>
    )
}

export default Potlucks
