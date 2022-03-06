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

// function handleChange(event) {
//     console.log(event.target.value);
// }
export class Rankings extends Component {
    // Not currently working properly

    // state = {
    //     search: ""
    // }

    // handleChange = event => {
    //     console.log(event.target.value);
    // }

    // handleInputChange = event => {

    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;

    //     this.setState({
    //       search: value
    //     })

    //     this.props.data.filter(function (el) {
    //         return el.title.toLowerCase().includes(value.toLowerCase())
    //     })
        
    //     console.log(this.props.data)
    // }

    render(){
        const {data, isLoggedIn, isAdmin} = this.props
        
        // handleChange = event => {
        //     console.log(event.target.value);
        // }

        // data = data.filter(function (el) {
        //     return el.title.toLowerCase().includes("york".toLowerCase())
        // })

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
                        {/* <li>
                            <SearchBarStyled className="Search">
                                <SearchIcon className="searchIcon"/>
                                <input placeholder="Search" 
                                onChange={this.handleChange}></input>
                            </SearchBarStyled>
                            <RankingsList neighbourhoods={data}/>
                        </li>  */}
                        <li> <SearchBar/> <RankingsList neighbourhoods={data}/> </li>
                        {/* <li> 
                            <SearchBar 
                                handleChange=
                                    {{data}.filter
                                        (function (el) 
                                            {return el.title.toLowerCase().includes(event.target.value.toLowerCase())}
                                        )
                                    }
                            />
                            <RankingsList neighbourhoods={data}/> </li> */}
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