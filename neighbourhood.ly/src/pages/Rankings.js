import React, { Component } from 'react'
import NeighbourhoodList from '../components/NeighbourhoodList'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import RankingsList from '../components/RankingsList'
// import '../components/Rankings.css'
import SearchBar from '../components/SearchBar'
import SortBar from '../components/SortBar'
import '../components/Rankings.css'

export class Rankings extends Component {
    // Not currently working properly
    render(){
        const {data, isLoggedIn, isAdmin} = this.props
        return(
            <div>

                <Sidebar className="sidebar" 
                SignInType={isLoggedIn() ? "MainMenu" : "LogIn"}
                handleAdmin={isAdmin}
                tab1="About Us"
                tab2="Neighbourhoods"
                tab3="Rankings"
                tab4="Home" 
                showMenu={true}/>

                <div className='RankingContainer'>
                    <ul>
                        <li> <SearchBar/> <RankingsList neighbourhoods={data}/> </li>
                    </ul> 
                </div>
            </div>
        )
    }
}

export default Rankings