import './App.css';
// import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import NewAccount from './components/NewAccount';
import Login from './components/Login';
import EditPotluck from './components/EditPotluck';
import Potlucks from './components/Potlucks';
import NewPotluck from './components/NewPotluck';
import PotluckSignup from './components/PotluckSignup';
import Header from './components/Header';

// const initialFormValues = {
//   evtname: '',
//   notes: '',
//   glutenfree: false,
//   vegetarian: false,
//   vegan: false,
// }

// const initialFormErrors = {
//   evtname: '',
//   notes: '',
// }

// const initialDisabled = true

function App() {
//   const [formValues, setFormValues] = useState(initialFormValues)
//   const [formErrors, setFormErrors] = useState(initialFormErrors)
//   const [disabled, setDisabled] = useState(initialDisabled)

//   const validate = (name, value) => {
//     yup.reach(schema, name)
//       .validate(value)
//       .then(() => setFormErrors({ ...formErrors, [name]: '' }))
//       .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
//   }

//   const inputChange = (name, value) => {
//     setFormValues({
//       ...formValues,
//       [name]: value
//     })
//   }

//   const formSubmit = () => {
//     const newPotluck = {
//       evtname: formValues.evtname.trim(),
//       notes: formValues.notes.trim(),
//       restrictions: ['glutenfree', 'vegetarian', 'vegan'].filter(restriction => !!formValues[restriction])
//     }
//   }

//   useEffect(() => {
//     schema.isValid(formValues).then(valid => setDisabled(!valid))
//   }, [formValues])

// const initialFormValues = {
 //   evtname: '',
 //   notes: '',
 //   glutenfree: false,
 //   vegetarian: false,
 //   vegan: false,
 // }

 // const initialFormErrors = {
 //   evtname: '',
 //   notes: '',
 // }

 // const initialDisabled = true

  return (
    <Router>
      <div className="App">
        <Header /> 
        <div className='content'>
        <Switch>
            <Route path='/newaccount' component={NewAccount} />
            <Route path='/potlucks' component={Potlucks} />
            <Route 
              path='/addpotluck' 
              component={NewPotluck} 
              // values={formValues}
              // change={inputChange}
              // submit={formSubmit}
              // disabled={disabled}
              // errors={formErrors}
            />
            <Route path='/addnewpotluck' component={NewPotluck} />
            <Route path='/potlucksignup' component={PotluckSignup} />
            <Route path='/editpotluck' component={EditPotluck} />
            <Route path='/' component={Login} />
            
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
