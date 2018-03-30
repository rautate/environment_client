import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Actual from './Components/Actual.jsx';
import History from './Components/History.jsx';

var createReactClass = require('create-react-class');


const App = createReactClass({
    render(){
		return(
            <Router>
                <div>
                    <ul className='nav-list'>
                        <li className='nav-list-item'><Link to={'/'}>Actual</Link></li>
                        <li className='nav-list-item'><Link to={'/history'}>History</Link></li>
                    </ul>

                    <Switch>
                        <Route exact path='/' component={Actual} />
                        <Route exact path='/history' component={History} />
                    </Switch>
                </div>
            </Router>
		);
    }
});

export default App;
