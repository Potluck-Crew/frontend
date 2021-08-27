import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import NewAccount from './components/NewAccount';
import Login from './components/Login';
import EditPotluck from './components/EditPotluck';
import Potlucks from './components/Potlucks';
import NewPotluck from './components/NewPotluck';
import PotluckSignup from './components/PotluckSignup';
import Header from './components/Header';
import { connect } from 'react-redux';
// import schema from './Schema';
// import * as yup from 'yup'

// const initialFormValues = {
//   event_name: '',
//   event_location: '',
//   event_date: '',
// }

// const initialFormErrors = {
//   event_name: '',
//   event_location: '',
//   event_date: '',
// }

// const initialDisabled = true

function App() {

  // const [formValues, setFormValues] = useState(initialFormValues)
  // const [formErrors, setFormErrors] = useState(initialFormErrors)
  // const [disabled, setDisabled] = useState(initialDisabled)

  // const validate = (name, value) => {
  //   yup.reach(schema, name)
  //     .validate(value)
  //     .then(() => setFormErrors({ ...formErrors, [name]: '' }))
  //     .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  // }

  // const inputChange = (name, value) => {
  //   validate(name, value)
  //   setFormValues({
  //     ...formValues,
  //     [name]: value
  //   })
  // }

  // useEffect(() => {
  //   schema.isValid(formValues).then(valid => setDisabled(!valid))
  // }, [formValues])

  return (
    <Router>
      <div className="App">
        <Header /> 
        <div className='content'>
        <Switch>
            <Route path='/newaccount' component={NewAccount} />
            <Route path='/potlucks' component={Potlucks} />
            <Route 
              path='/addnewpotluck' 
              component={NewPotluck}
                // () => (
                // NewPotluck({
                //   change: inputChange,
                //   values: formValues,
                //   disabled: disabled,
                //   errors: formErrors})
              // )}
              // <NewPotluck
              //   change={inputChange} 
              //   values={formValues}
              //   disabled={disabled}
              //   errors={formErrors}
              // />}
            />
            <Route path='/potlucksignup/:id' component={PotluckSignup} />
            <Route path='/editpotluck/:id' component={EditPotluck} />
            <Route path='/' component={Login} />
            
        </Switch>
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.token,   
    role: state.role,
  };
};

export default connect(mapStateToProps,{})(App);
