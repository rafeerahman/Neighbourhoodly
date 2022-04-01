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

        loggedIn: false,
        admin: false,
        userEmail: "",
        // code below requires server call
        users :
        [
            {name: "admin", password: "admin", email: "admin@admin.com", type: "admin"},
            {name: "user", password: "user", email: "user@user.com", type: "user"}
        ],
        user: null
    }

    logInHandler = (user, isAdmin) => {
        if (isAdmin) {
            this.setState({
                admin: true
            })
        }
        //console.log(user);
        this.setState({
            loggedIn: true,
            userEmail: user.email,
            user: user
        })

        // setTimeout(() => console.log(this.state.user), 5000);
    }

    logoutHandler = () => {
        this.setState({
        admin: false,
        loggedIn: false,
        userEmail: "",
        user: null
        })
    }

    registerHandler = (user) => {
        // code below requires server call
        this.state.users.push(user)
        this.setState({
            users: this.state.users
        })
    }

    removeUser = (email) => {
        // code below requires server call
        this.state.users = this.state.users.filter(other => other.email !== email)
        this.setState({users: this.state.users})
    }

    isLoggedIn = () => {
        //console.log("Logged in status: ", this.state.loggedIn);
        return this.state.loggedIn
    }

    isAdmin = () => {
        //console.log("Admin status: ", this.state.admin);
        return this.state.admin
    }
    reviews = [
        {
            user: this.state.users[0],
            neighbourhoodTitle: "Yonge-St Clair",
            avatar: pickachuAvatar,
            reviewTitle: "Lots of things to do at Yonge-St Claire",
            date: "2022/03/01",
            starRating: 4,
            reviewBody: "This neighbourhood felt very safe and I liked it."
        }, 
        {
            user: this.state.users[1],
            neighbourhoodTitle: "York University Heights",
            avatar: pickachuAvatar,
            reviewTitle: "York University is great!",
            date: "2022/03/01",
            starRating: 4,
            reviewBody: "Great restaurants"
        }
    ]
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
        
        return (
        <BrowserRouter>
            <Switch>
            <Route 
                exact path={["/LogIn"]}
                render={() => (
                <div>
                {currentUser !== null ? <UserHome
                    app={this} 
                    appState={ this.state } 
                    isLoggedIn={this.isLoggedIn} 
                    isAdmin={this.isAdmin} 
                    logInHandler={this.logInHandler} 
                    logoutHandler={this.logoutHandler}
                    />
                :
                <LogIn 
                    app={this}
                    appState={ this.state } 
                    isLoggedIn={this.isLoggedIn} 
                    isAdmin={this.isAdmin} 
                    logInHandler={this.logInHandler} 
                    logoutHandler={this.logoutHandler}
                    />
                } 
                </div>
                )}
            />
            <Route
                exact path={["/"]}
                render={() => (
                <div>
                {currentUser !== null ? <UserHome
                    app={this}
                    appState={ this.state } 
                    isLoggedIn={this.isLoggedIn} 
                    isAdmin={this.isAdmin} 
                    logInHandler={this.logInHandler} 
                    logoutHandler={this.logoutHandler}
                    />
                :
                    <Register 
                    app={this}
                    users={this.state.users} 
                    appState={ this.state } 
                    registerHandler={this.registerHandler} 
                    isLoggedIn={this.isLoggedIn} 
                    logInHandler={this.logInHandler}
                    />
                }
                </div>
                )}
            />  

            <Route exact path = "/Neighbourhoods"
                render={() => (<NeighbourhoodListPage 
                    data={neighbourhoodsData} 
                    app= {this} 
                    isLoggedIn={this.isLoggedIn} 
                    isAdmin={this.isAdmin} 
                    logInHandler={this.logInHandler}/>)}
            />

            <Route exact path = "/AboutUs"
                render={() => (<AboutUs
                    app={this}
                    user={this.state.currentUser}
                    isLoggedIn={this.isLoggedIn}
                    isAdmin={this.isAdmin} 
                />)}
            />

            <Route exact path = "/Rankings"
                render={() => (<Rankings 
                    user={this.state.currentUser}
                    app={this}
                    data={neighbourhoods} 
                    appState={ this.state } 
                    isLoggedIn={this.isLoggedIn} 
                    logInHandler={this.logInHandler} 
                    isAdmin={this.isAdmin}/>)}
            />

            
            <Route exact path = "/AdminDashboard"
            render={() => (
                <div>
                {currentUser !== null && isAdmin 
                    ? 
                <AdminDashboard
                users={this.state.users} 
                reviews={this.reviews} 
                appState={ this.state } 
                logInHandler={this.logInHandler}
                isAdmin={this.isAdmin} 
                removeUser={this.removeUser} 
                logoutHandler={this.logoutHandler}/>
                    : 
                    <Redirect to="/login"/>}
                </div>
            )}
            />

            
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
                        user={this.state.user}
                        reviews={this.reviews}
                        isLoggedIn={this.isLoggedIn}
                        isAdmin={this.isAdmin}
                        name={neighbourhood.neighbourhoodName}
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
