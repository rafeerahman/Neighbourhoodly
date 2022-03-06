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
        loggedIn: false,
        admin: false,
        userEmail: ""
    }

    logInHandler = (updatedEmail, isAdmin) => {
        if (isAdmin) {
            this.setState({
                admin: true
            })
        }
        this.setState({
            loggedIn: true,
            userEmail: updatedEmail
        })
    }

    logoutHandler = () => {
        this.setState({
        admin: false,
        loggedIn: false,
        userEmail: ""
        })
    }

    isLoggedIn = () => (
        this.state.loggedIn
    )

    isAdmin = () => (
        this.state.admin
    )

    render() {

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
        }
        ]

        const users = [
        {name: "admin", password: "admin", email: "admin@admin.com", type: "admin"},
        {name: "user", password: "user", email: "user@user.com", type: "user"}
        ]
        
        const reviews = [
        {
            email: "user@user.com",
            user: "user",
            neighbourhoodTitle: "Yonge-St Clair",
            avatar: pickachuAvatar,
            reviewTitle: "Lots of things to do",
            date: "2022/03/01",
            starRating: 4,
            reviewBody: "This neighbourhood felt very safe and I liked it."
        }
        ]
        
        return (
        <BrowserRouter>
        
            <Switch>
            { this.state.loggedIn ? 
                <Route exact path = "/" 
                    render={() => (<UserHome 
                    appState={ this.state } 
                    isLoggedIn={this.isLoggedIn} 
                    isAdmin={this.isAdmin} 
                    logInHandler={this.logInHandler} 
                    logoutHandler={this.logoutHandler}/>)}
                /> :
                <Route exact path = "/" 
                render={() => (<Register 
                    users={users} 
                    appState={ this.state } 
                    isLoggedIn={this.isLoggedIn} 
                    logInHandler={this.logInHandler}/>)}
                /> 
                
            }

            <Route exact path = "/LogIn"
                render={() => (<LogIn 
                    users={users} 
                    appState={ this.state } 
                    isLoggedIn={this.isLoggedIn} 
                    isAdmin={this.isAdmin} 
                    logInHandler={this.logInHandler} 
                    logoutHandler={this.logoutHandler}/>)}
            />

            <Route exact path = "/Neighbourhoods"
                render={() => (<NeighbourhoodListPage 
                    data={neighbourhoods} 
                    appState={ this.state } 
                    isLoggedIn={this.isLoggedIn} 
                    isAdmin={this.isAdmin} 
                    logInHandler={this.logInHandler}/>)}
            />

            <Route exact path = "/AboutUs"
                render={() => (<AboutUs
                    isLoggedIn={this.isLoggedIn}
                    isAdmin={this.isAdmin} 
                />)}
            />

            <Route exact path = "/Rankings"
                render={() => (<Rankings 
                    data={neighbourhoods} 
                    appState={ this.state } 
                    isLoggedIn={this.isLoggedIn} 
                    logInHandler={this.logInHandler} 
                    isAdmin={this.isAdmin}/>)}
            />

            <Route exact path = "/AdminDashboard"
                render={() => (<AdminDashboard
                     users={users} 
                     reviews={reviews} 
                     appState={ this.state } 
                     logInHandler={this.logInHandler} 
                     isAdmin={this.isAdmin} 
                     logoutHandler={this.logoutHandler}/>)}
            />

            <Route exact path = "/Profile"
                render={() => (<Profile 
                    users={users} 
                    appState={ this.state } 
                    isLoggedIn={this.isLoggedIn} 
                    logInHandler={this.logInHandler} 
                    isAdmin={this.isAdmin}/>)}
            />

            {neighbourhoods.map((neighbourhood) => (
                    <Route exact path={`/${neighbourhood.title}`}
                    render={() => (
                        <NeighbourhoodPage 
                        isLoggedIn={this.isLoggedIn}
                        name={neighbourhood.title}
                        reviews={reviews}
                        safetyScore={neighbourhood.safetyScore}
                        avgUserRating={neighbourhood.avgUserRating}
                        />)
                    }/>
                ))}
            </Switch>

        </BrowserRouter>
        )
        
    }

}

export default App;
