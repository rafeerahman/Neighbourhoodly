import React, { Component } from 'react'
import NeighbourhoodList from '../components/NeighbourhoodList'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import RankingsList from '../components/RankingsList'
// import '../components/Rankings.css'
import SearchBar from '../components/SearchBar'
import SortBar from '../components/SortBar'
import '../components/Rankings.css'
import SearchIcon from '@mui/icons-material/Search';

export class Rankings extends Component {

    state = {
        allNeighbourhoods: this.props.data,
        search: ""
    }

    setNeighbourhoods = (filteredNeighbourhoods) => {
        this.setState({
            allNeighbourhoods: filteredNeighbourhoods
        })

        //console.log(filteredNeighbourhoods);
    }

    filterNeighbourhoods = (searchValue) => {
        if (searchValue == "") {
            this.setState({
              allNeighbourhoods: this.props.data // set to initial/sorted
            })
            //console.log(this.state.allNeighbourhoods)
          } else {
            const filter = this.props.data.filter((neighbourhood) => 
                {
                    // console.log(neighbourhood.title)
                    // console.log(neighbourhood.title.includes(searchValue));
                    return neighbourhood.title.includes(searchValue);
                }
            )
            this.setState({
              allNeighbourhoods: filter
            })
          }
    }
    
    render(){
        const {data, isLoggedIn, isAdmin} = this.props

        return(
            <div>

                <Sidebar className="sidebar" 
                SignInType={isLoggedIn() ? "MainMenu" : "LogIn"}
                isAdmin={isAdmin}
                tab1="About Us"
                tab2="Neighbourhoods"
                tab3="Rankings"
                tab4="Home" 
                showMenu={true}/>

                <div className='RankingContainer'>
                    <ul>
                        
                        <li> <SearchBar filter={this.filterNeighbourhoods} parent={this}/><RankingsList parent={this} neighbourhoods={this.state.allNeighbourhoods}/> </li>
                        
                    </ul> 
                </div>
            </div>
        )
    }
}

export default Rankings


const SearchBarStyled = styled.div`
    display: inline-flex;
    align-items: center;
    border-bottom: 1px solid black;
    
    .searchIcon {
        color: grey;
        margin-right: 20px;
    }
    input {
        background-color: transparent;
        width: 420px;
        height: 35px;
        border: none;
        outline: none;
    }
`