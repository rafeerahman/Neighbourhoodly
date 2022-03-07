import React, { Component } from 'react'
import Neighbourhood from './Neighbourhood'
import { uid } from "react-uid";
import styled from 'styled-components';
import NeighbourhoodPage from '../pages/NeighbourhoodPage';
import LogIn from '../pages/homePages/LogIn'
import {Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from '../pages/homePages/Register';
import '../components/Rankings.css'

export class RankingsList extends Component {

    state = {
        sort: "highestRating"
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          sort: name
        });

        //console.log('hi');
    };
    
    setNeighbourhoods = (neighbourhoods) => { 
        this.props.parent.setNeighbourhoods(neighbourhoods) 
    }

    render() {

    // let sort = "highestRating"
    const {neighbourhoods, parent} = this.props
    let rank = 0

    if (this.state.sort == "highestRating") {
        neighbourhoods.sort((first, second) => {
            return second.avgUserRating - first.avgUserRating
        });
    } else if (this.state.sort == "lowestRating") {
        neighbourhoods.sort((first, second) => {
            return first.avgUserRating - second.avgUserRating
        });
    } else if (this.state.sort == "highestSafety") {
        neighbourhoods.sort((first, second) => {
            return second.safetyScore - first.safetyScore
        });
    } else if (this.state.sort == "lowestSafety") {
        neighbourhoods.sort((first, second) => {
            return first.safetyScore - second.safetyScore
        });
    } else if (this.state.sort == "alpha") {
        neighbourhoods.sort((first, second) => {
            if (first.title.toLowerCase() > second.title.toLowerCase()){
              return 1
            } else {
              return -1
            }
        });
    }
    
    return (
        <div>          
            <tbody>
                <tr>
                    <th>
                    </th>
                    <th>
                        Neighbourhood
                    </th>
                    <th>
                        Average rating
                    </th>
                    <th>
                        Safety Score
                    </th>
                </tr>
                {neighbourhoods.map((neighbourhood) => {
                    rank=rank+1
                    return (
                        <tr>
                            <td>
                                {rank}
                            </td>
                            <td>
                                <Link to={`/${neighbourhood.title}`}>
                                <a>{neighbourhood.title}</a> 
                                </Link>
                            </td>
                            <td>
                                {neighbourhood.avgUserRating}/10
                            </td>
                            <td>
                                {neighbourhood.safetyScore}/10
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        
        
            <div className="sortBar">
                    <ul>
                        <li><h3>Sort By:</h3></li>
                        <li>
                            <button onClick={(e) => {this.handleInputChange(e); this.setNeighbourhoods(neighbourhoods);}} name="highestRating">Highest Rating</button>
                        </li>
                        <li>
                            <button onClick={(e) => {this.handleInputChange(e); this.setNeighbourhoods(neighbourhoods);}} name="lowestRating">Lowest Rating</button>
                        </li>
                        <li>
                            <button onClick={(e) => {this.handleInputChange(e); this.setNeighbourhoods(neighbourhoods);}} name="highestSafety">Highest Safety</button>                        
                        </li>
                        <li>
                            <button onClick={(e) => {this.handleInputChange(e); this.setNeighbourhoods(neighbourhoods);}} name="lowestSafety">Lowest Safety</button>                                                
                        </li>
                        <li>
                            <button onClick={(e) => {this.handleInputChange(e); this.setNeighbourhoods(neighbourhoods);}} name="alpha">Alphabetical</button>                                                
                        </li>                       
                    </ul>
            </div>

        </div>
    )
  }
}

export default RankingsList
