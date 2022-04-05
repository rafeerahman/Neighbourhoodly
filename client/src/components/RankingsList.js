import React, { Component } from 'react'
import Neighbourhood from './Neighbourhood'
import { uid } from "react-uid";
import styled from 'styled-components';
import NeighbourhoodPage from '../pages/NeighbourhoodPage';
import LogIn from '../pages/homePages/LogIn'
import {Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from '../pages/homePages/Register';
import '../components/Rankings.css'
import SearchBar from './SearchBar';

export class RankingsList extends Component {
  
    state = {
        sort: "highestRating",
        filtered: [...this.props.neighbourhoods],
        searchedList: null
        
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          sort: name
        });

    };
    
    setNeighbourhoods = (neighbourhoods) => { 
        this.setState({filtered: neighbourhoods}) 
    }

    filterNeighbourhoods = (searchValue) => {
        if (searchValue == "") {
            this.setState({
                searchedList: null 
            })
        } else {
            const filter = this.state.filtered.filter((neighbourhood) => 
                {
                    // console.log(neighbourhood.title)
                    // console.log(neighbourhood.title.includes(searchValue));
                    return neighbourhood.neighbourhoodName.includes(searchValue);
                }
            )

            this.setState({
                searchedList: filter
            })
        }
    }

    render() {

    const {filtered, searchedList} = this.state
    let rank = 0

    if (this.state.sort === "highestRating") {
        let sorted = []

        let min = Math.min(...filtered.map(neighb => {if (neighb.data.userRating !== undefined) { return parseFloat(neighb.data.userRating)}}))
        
        
        filtered.sort((a, b) => {
            if (a.data.userRating === "") return 1; // can be DRY'd using *dir where dir is -1 or 1
            if (b.data.userRating === "") return -1;
            return b.data.userRating - a.data.userRating;
        });
    } else if (this.state.sort === "lowestRating") {
        filtered.sort((a, b) => {
            if (a.data.userRating === "") return 1; // can be DRY'd using *dir where dir is -1 or 1
            if (b.data.userRating === "") return -1;
            return a.data.userRating - b.data.userRating;
        });
    } else if (this.state.sort === "highestSafety") {
        filtered.sort((first, second) => {
            return second.data.safetyScore - first.data.safetyScore
        });
    } else if (this.state.sort === "lowestSafety") {
        filtered.sort((first, second) => {
            return first.data.safetyScore - second.data.safetyScore
        });
    } else if (this.state.sort === "alpha") {
        filtered.sort((first, second) => {
            if (first.neighbourhoodName.toLowerCase() > second.neighbourhoodName.toLowerCase()){
              return 1
            } else {
              return -1
            }
        });
    }
    
    return (
        <div>
            <SearchBar filter={this.filterNeighbourhoods} parent={this}/>
            <br />
            <div className="sortBar">

                <ul>
                    <li>
                        <button onClick={(e) => {this.handleInputChange(e); this.setNeighbourhoods(filtered);}} name="highestRating">Highest Rating</button>
                    </li>
                    <li>
                        <button onClick={(e) => {this.handleInputChange(e); this.setNeighbourhoods(filtered);}} name="lowestRating">Lowest Rating</button>
                    </li>
                    <li>
                        <button onClick={(e) => {this.handleInputChange(e); this.setNeighbourhoods(filtered);}} name="highestSafety">Highest Safety</button>                        
                    </li>
                    <li>
                        <button onClick={(e) => {this.handleInputChange(e); this.setNeighbourhoods(filtered);}} name="lowestSafety">Lowest Safety</button>                                                
                    </li>
                    <li>
                        <button onClick={(e) => {this.handleInputChange(e); this.setNeighbourhoods(filtered);}} name="alpha">Alphabetical</button>                                                
                    </li>                       
                </ul>
            </div>          
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
                {searchedList ? 
                 searchedList.map((neighbourhood) => {
                    rank=rank+1
                    return (
                        <tr>
                            <td>
                                {rank}
                            </td>
                            <td>
                                <Link to={`/${neighbourhood.neighbourhoodName.replaceAll(' ', '').replaceAll('(', '').replaceAll(')', '')}`}>
                                <a>{neighbourhood.neighbourhoodName}</a> 
                                </Link>
                            </td>
                            <td>
                                {neighbourhood.data.userRating}/5
                            </td>
                            <td>
                                {neighbourhood.data.safetyScore}/100
                            </td>
                        </tr>
                    )
                })
            
                : 
                    filtered.map((neighbourhood) => {
                        rank=rank+1
                        return (
                            <tr>
                                <td>
                                    {rank}
                                </td>
                                <td>
                                    <Link to={`/${neighbourhood.neighbourhoodName.replaceAll(' ', '').replaceAll('(', '').replaceAll(')', '')}`}>
                                    <a>{neighbourhood.neighbourhoodName}</a> 
                                    </Link>
                                </td>
                                <td>
                                    {neighbourhood.data.userRating}/5
                                </td>
                                <td>
                                    {neighbourhood.data.safetyScore}/100
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </div>
    )
  }
}

export default RankingsList
