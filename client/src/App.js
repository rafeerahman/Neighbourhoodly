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

    maximumSafetyData = (neighbourhoods) => {
        let max = 0;
        neighbourhoods.map((neighbourhood) => {
            const safetyData = neighbourhood.data.safetyData;
            let total = 0;
            for (let key in safetyData) {
                total += safetyData[key]
            }
            if (total > max) {
                max = total;
            }
        })
        
        return max;
    }

    render() {
        const {currentUser, isAdmin, neighbourhoodsData} = this.state;
        let max = 0;

        // Initializing
        if (neighbourhoodsData) {
            max = this.maximumSafetyData(neighbourhoodsData)
        }
        
        return (
        <BrowserRouter>
            <Switch>
            <Route 
                exact path={["/Login"]}
                render={() => (
                <div>
                {currentUser !== null ? <UserHome app={this}/>
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
                {currentUser !== null ? <UserHome app={this}/>
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
                render={() => (<Rankings  app={this} max={max} neighbourhoodsData={neighbourhoodsData} />)}
            />

            
            <Route exact path = {["/AdminDashboard"]}
            render={() => (
                <div>
                {currentUser !== null && isAdmin === true
                    ? 
                    <AdminDashboard app={this}/>
                    : 
                    <Redirect to="/"/>}
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
                    <Route exact path={`/${neighbourhood.neighbourhoodName.replaceAll(' ', '').replaceAll('(', '').replaceAll(')', '')}`}
                    render={() => (
                        <NeighbourhoodPage 
                        app={this}
                        neighbourhood={neighbourhood}
                        maxSafetyData={max}
                        safetyScore={5}
                        />)
                    }/>
                )) : null}
            </Switch>

        </BrowserRouter>
        )
        
    }

}

export default App;
