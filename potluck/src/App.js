import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import NewAccount from './components/NewAccount';
import Login from './components/Login';
import EditPotluck from './components/EditPotluck';
import Potlucks from './components/Potlucks';
import NewPotluck from './components/NewPotluck';
import PotluckSignup from './components/PotluckSignup';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      Hello, World. Links for easy building;
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/new'>New Account</Link></div>
        <div><Link to='/potlucks'>All Potlucks Info</Link></div>
        <div><Link to='/addpotluck'>New Potluck</Link></div>
        <div><Link to='/editpotluck'>Edit Potluck</Link></div>
        <div><Link to='/potlucksignup'>Signup Potluck</Link></div>
        
        <Switch>
            <Route path='/new' component={NewAccount} />
            <Route path='/potlucks' component={Potlucks} />
            <Route path='/addpotluck' component={NewPotluck} />
            <Route path='/potlucksignup' component={PotluckSignup} />
            <Route path='/editpotluck' component={EditPotluck} />
            <Route path='/' component={Login} />
            
        </Switch>
      </div>
    </Router>
  );
}

export default App;
