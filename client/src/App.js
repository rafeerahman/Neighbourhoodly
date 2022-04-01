import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Register from './pages/homePages/Register';
import LogIn from './pages/homePages/LogIn';
import NeighbourhoodListPage from './pages/NeighbourhoodListPage';
import NeighbourhoodPage from './pages/NeighbourhoodPage';
import UserHome from './pages/homePages/UserHome';
import Rankings from './pages/Rankings';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import pickachuAvatar from './images/pickachuAvatar.png'
import AboutUs from './pages/AboutUs';

class App extends React.Component {

    state = {
        currentUser: true,
        neighbourhoods: [] // temp
    }

    render() {
        const { currentUser } = this.state;
        
        return (
        <BrowserRouter>
            <Switch>
            { !currentUser ? <Route exact path = "/" render={(props) => (<Register {...props} app={ this }/>)}/> :
                <Route exact path = "/" render={(props) => (<UserHome {...props} app={ this }/>)}/>
            }
            <Route exact path = "/LogIn" render={(props) => (<LogIn {...props} app={ this }/>)}/>
            <Route exact path = "/Neighbourhoods" render={(props) => (<NeighbourhoodListPage {...props} app ={ this }/>)}/>
            <Route exact path = "/AboutUs" render={(props) => (<AboutUs {...props} app = { this }/>)}/>
            <Route exact path = "/Rankings" render={(props) => (<Rankings {...props} app={ this }/>)}/>
            <Route exact path = "/AdminDashboard" render={(props) => (<AdminDashboard {...props} app={ this }/>)}/>
            <Route exact path = "/Profile" render={(props) => (<Profile {...props} app={ this }/>)}/>
            { this.state.neighbourhoods.map((neighbourhood) => (
                <Route exact path={`/${neighbourhood.title}`} 
                    render={(props) => (<NeighbourhoodPage {...props} name={neighbourhood.name} app={ this }/>)}/>))
            }
            </Switch>
        </BrowserRouter>
        )
    }
}

export default App;