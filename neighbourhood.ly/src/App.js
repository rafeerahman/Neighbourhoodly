import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Register from './Register';
import LogIn from './LogIn';
import NeighbourhoodListPage from './pages/NeighbourhoodListPage';
import NeighbourhoodPage from './pages/NeighbourhoodPage';

class App extends React.Component {

  state = {
    loggedIn: false
  }

  logInHandler = () => {
    this.setState({
        loggedIn: !this.setState.loggedIn
    })
}

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
    
    
    return (
      <BrowserRouter>
      
        <Switch>
          <Route exact path = "/" 
            render={() => (<Register appState={ this.state } logInHandler={this.logInHandler}/>)}
          />
          <Route exact path = "/LogIn"
            render={() => (<LogIn appState={ this.state } logInHandler={this.logInHandler}/>)}
          />
          <Route exact path = "/Neighbourhoods"
            render={() => (<NeighbourhoodListPage data={neighbourhoods} appState={ this.state } logInHandler={this.logInHandler}/>)}
          />

          {neighbourhoods.map((neighbourhood) => (
                <Route exact path={`/${neighbourhood.title}`}
                  render={() => (
                    <NeighbourhoodPage 
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
