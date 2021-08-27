import React, { useEffect, useState } from 'react'
import '../App.css'
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../helpers/axiosWithAuth';
import './EditPotluck.css';


function EditPotluck(props) {
    const { push } = useHistory();
	const { id } = useParams();

    //   const [dishes, setDishes] = useState([
    //     {
    //         dish_id: null,
    //         dish_name:'',
    //     },
    // ])
    
    const [potluck,setPotluck] = useState({
        event_date: '',
        event_location:'',
        event_name: '',
        event_dishes: [
            {
                dish_name:'',
            },
        ]
    })

    const handleChange = (e) => {
        setPotluck({
            ...potluck,
            [e.target.name]: e.target.value,
        })
        console.log('data changed', potluck)
    }

    // const handleDishChange = (e) => {
        // setDishes({
        //     ...dishes,
        //     dish_name: e.target.value

        // })
    //     console.log(e.target.name)
    //     console.log(e.target.value)

    // }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('before',potluck)
        const formatData = {
            date: potluck.event_date,
            location: potluck.event_location,
            event_name: potluck.event_name
        }
        axiosWithAuth().put(`https://build-week4.herokuapp.com/api/events/${id}`, formatData)
        .then(res => {
            console.log(res)
            push('/potlucks')
        })
        .catch(err => {
            console.error(err)
        })
    }

    useEffect(() => {
       axiosWithAuth().get(`https://build-week4.herokuapp.com/api/events/${id}`)
       .then(res => {
           console.log('potluck res',res.data)
           console.log('potluck data',potluck)
           setPotluck(res.data)
       })
    //    axiosWithAuth().get(`https://build-week4.herokuapp.com/api/dishes/${id}/dishes`)
    //    .then(res => {
    //        setDishes(res.data)
    //        console.log('data', res)
    //        console.log('dishes', dishes)
    //    })
    }, [])

// THE FORM DISPLAYS THE CURRENT VALUES, 
// SHOULD BE ABLE TO EDIT AND SAVE
// LOCATION & DATE NOT WORKING

    return ( 
        <div className='general_wrapper'>
            <h2>Edit Potluck</h2>
            <form onSubmit={handleSubmit}>
                <h4>Edit Name:</h4>
                <input 
                    value={potluck.event_name}
                    name='event_name'
                    type='text'
                    onChange={handleChange}
                />
                <h4>Edit Date:</h4>
                <input 
                    value={potluck.event_date}
                    name='event_date'
                    type='text'
                    onChange={handleChange}
                />
                <h4>Edit Location:</h4>
                <input 
                    value={potluck.event_location}
                    name='event_location'
                    type='text'
                    onChange={handleChange}
                />
                {/* {dishes.map(({dish_name, dish_id}) => {
                    return (<div>
                             <input 
                                value={dish_name}
                                name={dish_id}
                                type='text'
                                key={dish_id}
                                onChange={handleDishChange} />
                            </div>
                            )
                }         
                    )} */}
                <button type='submit'>Change</button> <button>Cancel</button>
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
