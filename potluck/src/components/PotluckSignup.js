import React, { useState, useEffect } from 'react'
import '../App.css';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../helpers/axiosWithAuth';
import { connect } from 'react-redux';

function PotluckSignup(props) {
    const { id } = useParams();
    const {push} = useHistory();
    const [potluck, setPotluck] = useState([])
    const currentUser = props.user_id
    const [currentDish, setCurrentDish] = useState('')
    const [currentID, setCurrentID] = useState('')
    const [testDish, setTestDish] = useState([])
    const [newDish, setNewDish] = useState('')

    useEffect(() => {

        axiosWithAuth().get(`https://build-week4.herokuapp.com/api/events/${id}`)
        .then(res => {
            console.log('events data',res.data)
            setPotluck(res.data)
        })            
        
        axiosWithAuth().get('https://build-week4.herokuapp.com/api/dishes')
        .then(res => {
            setTestDish(res.data)
        })

     },[id])

     const dishFormat = {
         dish_name: newDish,
         event_id: id,
     }

     const handleAdd = (e) => {
         e.preventDefault();
         //console.log(dishFormat);
       axiosWithAuth().post('https://build-week4.herokuapp.com/api/dishes', dishFormat)
       .then(res => {
           console.log(res)
       })
       push('/potlucks')
     } 

     const handleChange = (e) => {
        setNewDish(e.target.value)
        //console.log(e.target.value)
     }

     const currentlyDishes = testDish.filter(item => item.event_id == id);

     const formatData = {
        dish_name: currentDish,
        event_id: id,
        user_id: currentUser,
    }

     const handleClick = (e) => {
        e.preventDefault();
        // console.log('array',currentlyDishes,'id', id)
        console.log('before', formatData)
       
        axiosWithAuth().put(`https://build-week4.herokuapp.com/api/dishes/${currentID}`, formatData)
        .then(res => {
            console.log(res)
            push('/potlucks')
        })
        .catch(err => {
            console.error(err)
        })
     }

    

     const handleMouse = (dish_name, dish_id) => {
         setCurrentDish(dish_name)
         setCurrentID(dish_id)
         console.log(currentDish, currentID)
     }

    return (
        <div className='general_wrapper'>
            <h2>{potluck.event_name} | {potluck.event_date}</h2>
            <p>Thank you so much for attending {potluck.event_name}. Please, sign up for the items you'd like to bring below!</p>
            <h3>Available Items:</h3>
            {currentlyDishes.map(({dish_name, username, event_id,dish_id}) => {
                    return (<div>                        
                            {dish_name} | <button onMouseOver={() => {handleMouse(dish_name,dish_id)}} onClick={handleClick}>Reserved by {username}</button>
                            </div>
                            )})}

                <form onSubmit={handleAdd}>
                    <input 
                        type='text'
                        value={newDish.dish_name}
                        onChange={handleChange}
                        name='dish_name'
                    />
                    <button type='submit'>Add</button>
                </form>

        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        
    token: state.token ,  
    role: state.role,
    user_id: state.user_id,
    };
  };
export default connect(mapStateToProps,{})(PotluckSignup);