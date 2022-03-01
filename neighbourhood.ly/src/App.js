import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Register from './Register';
import LogIn from './LogIn';
import NeighbourhoodListPage from './pages/NeighbourhoodListPage';
import NeighbourhoodPage from './pages/NeighbourhoodPage';

class App extends React.Component {

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
            render={() => (<Register/>)}
          />
          <Route exact path = "/LogIn"
            render={() => (<LogIn/>)}
          />
          <Route exact path = "/Neighbourhoods"
            render={() => (<NeighbourhoodListPage data={neighbourhoods}/>)}
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
