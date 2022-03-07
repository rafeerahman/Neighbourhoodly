import React, { Component } from 'react'
import styled from 'styled-components'
import Hamburger from '../components/Hamburger'
import SearchBar from '../components/SearchBar';
import UserReview from '../components/UserReview';
import UserReviewForm from '../components/UserReviewForm';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import pickachuAvatar from '../images/pickachuAvatar.png'
import Sidebar from '../components/Sidebar';
import { uid } from 'react-uid';

export class NeighbourhoodPage extends Component {
  render() {

    const {name, safetyScore, avgUserRating, isLoggedIn, reviews} = this.props
    console.log("Hello from neighb page")

    // Going to reorganize into components later.
    return (
      <div>
         {/* <Hamburger isLoggedIn={isLoggedIn}/> */}
         <Sidebar className="sidebar" 
                SignInType={isLoggedIn() ? "MainMenu" : "LogIn"}
                isAdmin={this.props.isAdmin}
                tab1="About Us"
                tab2="Neighbourhoods"
                tab3="Rankings"
                tab4="Home" 
                showMenu={true}/>
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
              {reviews.map((review) => {
                return (
                  <UserReview key={uid(review)}
                    user={review.user} 
                    avatar={review.avatar} 
                    title={review.reviewTitle}
                    body = {review.reviewBody}
                    date = {review.date}
                    rating = {review.starRating} />
                )
              })}
            </UserReviewsStyled>
              
            <ReviewFormStyled className="reviewForm">
                <UserReviewForm neighbourhoodPage={this}/>
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
  margin-left: 10px;
  height: 700px;
  padding: 30px;
  background-color: #EBEBEB;
  float: left;
`

const UserReviewsStyled = styled.div`
  float: left;
  position: relative;
  width: 1000px;
  padding: 40px;
  margin-top: 20px;
  background-color: #EBEBEB;
  
`
const NeighbourhoodPageStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: auto;
  padding-top: 40px;
  margin-left: 40px;
 

  .bottom-content {
    
  }

  .header-content {
    margin-right: 40px;
    max-width: 250px;
    margin-left: 250px;
    overflow: auto;
    
    .title {
      font-size: 48px;
      margin-bottom: 20px;
      text-align: center;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
  }
`
export default NeighbourhoodPage