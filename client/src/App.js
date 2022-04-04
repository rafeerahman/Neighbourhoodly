import React from 'react';
import { Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
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

import { checkSession } from './actions/userActions/checkSession'
import EditProfile from './pages/EditProfile';
import { getAllNeighbourhoods } from './actions/getNeighbourhoods';
class App extends React.Component {

    componentDidMount() {
        checkSession(this)
        getAllNeighbourhoods(this)
    }

    state = {
        currentUser: null,
        isAdmin: false,
        neighbourhoodsData: null,
    }

    render() {
        const {currentUser, isAdmin, neighbourhoodsData} = this.state;
        // code below requires server call
        const neighbourhoods = [
        {
            title: "Yonge-St Clair",
            safetyScore: 8,
            avgUserRating: 7,
        },
        {
            title: "York University Heights",
            safetyScore: 8.5,
            avgUserRating: 9,
        },
        {
            title: "Bay Street Corridor",
            safetyScore: 4.5,
            avgUserRating: 9,
        },
        {
            title: "Bayview Village",
            safetyScore: 5.5,
            avgUserRating: 9,
        },
        {
            title: "Woodbine-Lumsden",
            safetyScore: 8.5,
            avgUserRating: 9,
        },
        {
            title: "Yonge-Eglinton",
            safetyScore: 8.5,
            avgUserRating: 9,
        }
        ]
        // yo
        return (
        <BrowserRouter>
            <Switch>
            <Route 
                exact path={["/Login"]}
                render={() => (
                <div>
                {currentUser !== null ? <UserHome app={this}  isAdmin={this.isAdmin}  />
                :
                <LogIn app={this} />
                } 
                </div>
                )}
            />
            <Route
                exact path={["/"]}
                render={() => (
                <div>
                {currentUser !== null ? <UserHome app={this}  isAdmin={this.isAdmin} />
                :
                    <Register  app={this} />
                }
                </div>
                )}
            />  

            <Route exact path = "/Neighbourhoods"
                render={() => (<NeighbourhoodListPage data={neighbourhoodsData} app= {this} />)}
            />

            <Route exact path = "/AboutUs"
                render={() => (<AboutUs app={this} />)}
            />

            <Route exact path = "/Rankings"
                render={() => (<Rankings  app={this} data={neighbourhoods} />)}
            />

            
            <Route exact path = {["/AdminDashboard"]}
            render={() => (
                <div>
                {currentUser !== null && isAdmin === true
                    ? 
                    <AdminDashboard app={this}/>
                    : 
                    <Redirect to="/login"/>}
                </div>
            )} />

            
            <Route exact path = "/Profile"
            render={() => (
                <div>
                {currentUser !== null 
                    ? 
                    <Profile app={this}/>
                    : 
                    <Redirect to="/login"/>}
                </div>)
            }/>

           
            <Route exact path = "/edit"
            render={() => (
                <div>
                {currentUser !== null 
                    ? 
                    <EditProfile app={this}/>
                    : 
                    <Redirect to="/login"/>}
                </div>)}
            />

            {neighbourhoodsData ? 
                neighbourhoodsData.map((neighbourhood) => (
                    <Route exact path={`/${neighbourhood.neighbourhoodName}`}
                    render={() => (
                        <NeighbourhoodPage 
                        app={this}
                        neighbourhood={neighbourhood}

                        safetyScore={5}
                        avgUserRating={4}
                        />)
                    }/>
                )) : null}
            </Switch>

        </BrowserRouter>
        )
        
    }

}

export default App;
