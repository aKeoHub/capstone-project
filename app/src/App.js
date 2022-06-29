

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {

//                      <Route path='/login' component={Login} />
//                     <Route path='/register' component={Register} />
//                     <Route path='/events' component={Events} />
//                     <Route path='/documents' component={Documents} />
//                     <Route path='/forum' component={Forum} />
    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
