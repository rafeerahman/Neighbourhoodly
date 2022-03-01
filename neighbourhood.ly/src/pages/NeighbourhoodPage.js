import React, { Component } from 'react'
import styled from 'styled-components'
import Hamburger from '../components/Hamburger'
import SearchBar from '../components/SearchBar';
import UserReview from '../components/UserReview';
import UserReviewForm from '../components/UserReviewForm';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

export class NeighbourhoodPage extends Component {
  render() {

    const {name, safetyScore, avgUserRating} = this.props
    
    // Going to reorganize into components later.
    return (
      <div>
         <Hamburger/>
         <NeighbourhoodPageStyled>
          <div className="header-content">
            <h1 className="title">{name}</h1>
              <ul>
                <li>
                  <StarOutlineIcon className="icon"/>
                  <p>Overall User Rating
                  <br/> {avgUserRating}/10
                  </p>
                </li>
                <li>
                  <HealthAndSafetyIcon className="icon"/>
                  <p>Safety Score
                  <br/> {safetyScore}/10
                  </p>
                  
                </li>
              </ul>
          </div>

          <div className='bottom-content'>
            <UserReviewsStyled className="userReviews">
              <SearchBar className="searchBar"/>
              <UserReview/>
            </UserReviewsStyled>
              
            <ReviewFormStyled className="reviewForm">
                <UserReviewForm/>
            </ReviewFormStyled>
          </div>
        </NeighbourhoodPageStyled>
      </div>
    )
  }
}

const ReviewFormStyled = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 40px;
  float: left; 
  height: 730px;
  padding: 50px;
  background-color: #EBEBEB;
`

const UserReviewsStyled = styled.div`
  position: relative;
  float: left;
  width: 1200px;
  height: 730px;
  padding-top: 40px;
  padding-left: 40px;
  margin-top: 20px;
  background-color: #EBEBEB;
  
`
const NeighbourhoodPageStyled = styled.div`
  position: relative;
  float: left;
  margin-top: 80px;
  margin-left: 80px;
  .bottom-content {}
  .header-content {
    .title {
      font-size: 48px;
      margin-bottom: 20px;
    }
    .icon {
      font-size: 48px;
      
    }
    p {
      font-size: 24px;
    }

    ul {
      margin-bottom: 20px;
    }
    ul li {
      display: inline-flex;
      align-items: center;
      margin-right: 30px;
    }
  }
`
export default NeighbourhoodPage