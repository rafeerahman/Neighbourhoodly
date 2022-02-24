import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Register from './Register';
import LogIn from './LogIn';
class App extends React.Component {

  render() {
    
    return (
      <BrowserRouter>
      
        <Switch>
          <Route exact path = "/" 
            render={() => (<Register/>)}
          />
          <Route exact path = "/LogIn"
            render={() => (<LogIn/>)}
          />
        </Switch>

      </BrowserRouter>
    )
    
  }

}

export default App;
