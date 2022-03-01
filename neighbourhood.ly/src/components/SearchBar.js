import React, { Component } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

export default class SearchBar extends Component {
  render() {
    return (
        <SearchBarStyled className="Search">
            <SearchIcon className="searchIcon"/>
            <input placeholder="Search"></input>
        </SearchBarStyled>
    )
  }
}

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