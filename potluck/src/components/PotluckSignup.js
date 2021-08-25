import React, { useState, useEffect } from 'react'
import '../App.css';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../helpers/axiosWithAuth';
import { connect } from 'react-redux';



function PotluckSignup() {
    const { id } = useParams();
    const [dishes, setDishes ] = useState([
        { 
            dish_name: '',
            dish_id: null,
        }
    ])
    const [dish, setDish] = useState([])


    useEffect(() => {
        axiosWithAuth().get(`https://build-week4.herokuapp.com/api/dishes/${id}/dishes`)
        .then(res => {
            setDishes(res.data)
            console.log('data', res)
            console.log('dishes', dishes)
        })
        axiosWithAuth().get(`https://build-week4.herokuapp.com/api/dishes/${id}`)
        .then(res => {
            console.log('dish data', res.data)
            setDish(res.data)
            
        })
     }, [])

    return (
        <div className='general_wrapper'>

            Available Items:
            {dishes.map(({dish_name, dish_id}) => {
                    return (<div>
                            {dish_name} {dish_id} Reserved by: {dish.username}
                            
                            </div>
                            )
                })}

        </div>
    )
}

const mapStateToProps = (state) => {

    return {
      token: state.token,   
      role: state.role,
    };
  };
export default connect(mapStateToProps,{})(PotluckSignup);