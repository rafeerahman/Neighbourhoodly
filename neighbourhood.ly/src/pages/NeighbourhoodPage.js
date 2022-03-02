import React, { Component } from 'react'
import styled from 'styled-components'
import Hamburger from '../components/Hamburger'
import SearchBar from '../components/SearchBar';
import UserReview from '../components/UserReview';
import UserReviewForm from '../components/UserReviewForm';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import pickachuAvatar from '../images/pickachuAvatar.png'

export class NeighbourhoodPage extends Component {
  state = {
    currentUser: "change later", // User will probably have avatar property and name, so get from there if they post a review.
    allDbReviews: [
      {
        user: "Bob Sally",
        avatar: pickachuAvatar,
        reviewTitle: "Lots of things to do",
        date: "2022/03/01",
        starRating: 4,
        reviewBody: "This neighbourhood felt very safe and I liked it."
      }
    ]
  }

  render() {

    const {name, safetyScore, avgUserRating} = this.props
    console.log("Hello from neighb page")
    console.log(this.state.allDbReviews)

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
              {this.state.allDbReviews.map((review) => {
                return (
                  <UserReview 
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
      margin-right: 30px;
    }
  }
`
export default NeighbourhoodPage