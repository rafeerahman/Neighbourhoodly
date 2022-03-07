import React, { Component } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

export default class SearchBar extends Component {
    handleInputChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        const parent = this.props.parent;

        if (this.props.filter!= null) {
            parent.setState({
                [name]: value
            }, this.props.filter(value));
        }
    }

  render() {
      const {parent} = this.props; // wherever search is used, the page (state) should have a searchState in it

    return (
        <SearchBarStyled className="Search">
            <SearchIcon className="searchIcon"/>
            <input name="search" value={parent.state.search} onChange={this.handleInputChange} placeholder="Search"></input>
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