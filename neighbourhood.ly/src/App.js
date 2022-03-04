import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Register from './pages/homePages/Register';
import LogIn from './pages/homePages/LogIn';
import NeighbourhoodListPage from './pages/NeighbourhoodListPage';
import NeighbourhoodPage from './pages/NeighbourhoodPage';
import UserHome from './pages/homePages/UserHome';

class App extends React.Component {
  state = {
    loggedIn: false
  }

  logInHandler = () => {
    this.setState({
        loggedIn: !this.state.loggedIn   // setState is async, becareful when debugging
    }, () => {console.log("loggedIn changed: " + this.state.loggedIn)})
  }

  isLoggedIn = () => (
    this.state.loggedIn
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
    
    
    return (
      <BrowserRouter>
      
        <Switch>
          { this.state.loggedIn ? 
            <Route exact path = "/" 
              render={() => (<UserHome appState={ this.state } isLoggedIn={this.isLoggedIn} logInHandler={this.logInHandler}/>)}
            /> :
            <Route exact path = "/" 
              render={() => (<Register users={users} appState={ this.state } isLoggedIn={this.isLoggedIn} logInHandler={this.logInHandler}/>)}
            /> 
            
          }

          <Route exact path = "/LogIn"
            render={() => (<LogIn users={users} appState={ this.state } isLoggedIn={this.isLoggedIn} logInHandler={this.logInHandler}/>)}
          />

          <Route exact path = "/Neighbourhoods"
            render={() => (<NeighbourhoodListPage data={neighbourhoods} appState={ this.state } isLoggedIn={this.isLoggedIn} logInHandler={this.logInHandler}/>)}
          />

          {neighbourhoods.map((neighbourhood) => (
                <Route exact path={`/${neighbourhood.title}`}
                  render={() => (
                    <NeighbourhoodPage 
                      isLoggedIn={this.isLoggedIn}
                      name={neighbourhood.title}
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
