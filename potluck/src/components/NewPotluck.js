import React, { useState } from 'react'
import { loginStart } from '../actions'

const initialPotluck = {
    event_name:'',
    date: '',
    location: '',
    food_items: [],
}

function NewPotluck(props) {
    const [potluck, setPotluck] = useState(initialPotluck)
    const [errors, setErrors] = useState('')

    // const {
    //     values,
    //     submit,
    //     change,
    //     disabled,
    //     errors,
    // } = props

    const onSubmit = evt => {
        evt.preventDefault();
        console.log(potluck)
    }

    // const onChange = evt => {
    //     const { name, value, checked, type } = evt.target
    //     const valueToUse = type === 'checkbox' ? checked : value;
    //     change(name, valueToUse);
    // }

    const handleChange = (e) => {
        console.log(e.target.value);
        setPotluck({...potluck,
                    [e.target.name]: e.target.value,
        })
    }

    return (
            <div className='general_wrapper'>
                <form onSubmit={onSubmit}>
                <h2>New Potluck</h2>

                {/* Errors */}
                {/* <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.month}</div>
                    <div>{errors.day}</div>
                    <div>{errors.year}</div>
                </div> */}


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
                {/* Food Items */}

                <label>Category: 
                    <select
                        value=''
                        name='category'
                    >
                        <option value=''>- Select a category -</option>
                        <option value='appetizer'>Appetizer</option>
                        <option value='maindish'>Main Dish</option>
                        <option value='sidedish'>Side Dish</option>
                        <option value='bread'>Bread</option>
                        <option value='dessert'>Dessert</option>
                        <option value='beverage'>Beverage</option>
                        <option value='cups'>Cups</option>
                        <option value='plates'>Plates</option>
                        <option value='napkins'>Napkins</option>
                        <option value='utensils'>Utensils</option>
                    </select>
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
                <button className='signup_button'>Submit</button>
                </form>
            </div>
       
    )
}

export default NewPotluck;


// THIS IS MORE SPECIFIC THAN THE DATA WE GET
// FROM ENDPOINTS SAVING HERE JUST IN CASE WE
// WANT TO GET MORE SPECIFIC LATER


// <label>Month: 
//                     <select
//                         onChange={onChange}
//                         value={values.month}
//                         name='month'
//                     >
//                         <option value=''>- Select a month -</option>
//                         <option value='january'>January</option>
//                         <option value='february'>February</option>
//                         <option value='march'>March</option>
//                         <option value='april'>April</option>
//                         <option value='may'>May</option>
//                         <option value='june'>June</option>
//                         <option value='july'>July</option>
//                         <option value='august'>August</option>
//                         <option value='september'>September</option>
//                         <option value='october'>October</option>
//                         <option value='november'>November</option>
//                         <option value='december'>December</option>
//                     </select>
//                 </label>

//                 <label>Day: 
//                     <select
//                         onChange={onChange}
//                         value={values.day}
//                         name='day'
//                     >
//                         <option value=''>- Select a day -</option>
//                         <option value='01'>01</option>
//                         <option value='02'>02</option>
//                         <option value='03'>03</option>
//                         <option value='04'>04</option>
//                         <option value='05'>05</option>
//                         <option value='06'>06</option>
//                         <option value='07'>07</option>
//                         <option value='08'>08</option>
//                         <option value='09'>09</option>
//                         <option value='10'>10</option>
//                         <option value='11'>11</option>
//                         <option value='12'>12</option>
//                         <option value='13'>13</option>
//                         <option value='14'>14</option>
//                         <option value='15'>15</option>
//                         <option value='16'>16</option>
//                         <option value='17'>17</option>
//                         <option value='18'>18</option>
//                         <option value='19'>19</option>
//                         <option value='20'>20</option>
//                         <option value='21'>21</option>
//                         <option value='22'>22</option>
//                         <option value='23'>23</option>
//                         <option value='24'>24</option>
//                         <option value='25'>25</option>
//                         <option value='26'>26</option>
//                         <option value='27'>27</option>
//                         <option value='28'>28</option>
//                         <option value='29'>29</option>
//                         <option value='30'>30</option>
//                         <option value='31'>31</option>
//                     </select>
//                 </label>

//                 <label>Year: 
//                     <select
//                         onChange={onChange}
//                         value={values.year}
//                         name='year'
//                     >
//                         <option value=''>- Select a year -</option>
//                         <option value='2021'>2021</option>
//                         <option value='2022'>2022</option>
//                     </select>
//                 </label> */}


//                 {/* Event Time */}
//                 {/* <label>Event Time:
//                     <input
//                         value={values.time}
//                         onChange={onChange}
//                         name='time'
//                         type='text'
//                     />
//                 </label> */}

//                 {/* <label>AM or PM:
//                     <select
//                         onChange={onChange}
//                         value={values.ampm}
//                         name='ampm'
//                     >
//                         <option value=''>- Select AM or PM -</option>
//                         <option value='am'>AM</option>
//                         <option value='pm'>PM</option>
//                     </select>
//                 </label> */}


//                 { /* Event Address */}
//                 {/* <label>Event Address:
//                     <input
//                         value={values.address}
//                         onChange={onChange}
//                         name='address'
//                         type='text'
//                     />
//                 </label> */}
// {/* 
//                 <label>Event City:
//                     <input
//                         value={values.city}
//                         onChange={onChange}
//                         name='city'
//                         type='text'
//                     />
//                 </label> */}
// {/* 
//                 <label>Event State:
//                     <input
//                         value={values.state}
//                         onChange={onChange}
//                         name='state'
//                         type='text'
//                     />
//                 </label> */}

//                 {/* <label>Event ZIP:
//                     <input
//                         value={values.zip}
//                         onChange={onChange}
//                         name='zip'
//                         type='text'
//                     />
//                 </label> */}
