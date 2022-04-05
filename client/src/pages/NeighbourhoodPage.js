import React, { Component } from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar';
import UserReview from '../components/UserReview';
import UserReviewForm from '../components/UserReviewForm';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SidebarNonHome from '../components/SidebarNonHome';
import UserSidebar from '../components/UserSidebar';
import GroupsIcon from '@mui/icons-material/Groups';
import { getReviewsByNeighbourhoodId } from '../actions/getReviewsByNeighbourhood';
import { uid } from 'react-uid';

export class NeighbourhoodPage extends Component {
  componentDidMount() {
    getReviewsByNeighbourhoodId(this)
  }

  state = {
    search: "",
    allReviews: null,
    searchedReviews: null,

  }

  filterReviews = (searchValue) => {
    if (searchValue == "" || !this.state.allReviews) {
      this.setState({
        searchedReviews: null
      })
    } else {
      const reviews = this.state.allReviews.filter((review) => {
        const username = review.username
        const rev = review.review
        const allText = username + " " + rev.reviewTitle + " " + rev.date + " " + rev.reviewBody
        return allText.toLowerCase().includes(searchValue.toLowerCase())}
        )
      
      this.setState({
        searchedReviews: reviews
      })
    }
  }

  avgUserRating = (reviews) => {
    const total = reviews.reduce((total, review) => {
      return total += review.review.userRating
    }, 0)
    
    const rating = (total / reviews.length).toFixed(2)
    
    return rating;
  }

  // 300 / MAX(SCORE) * 100
  safetyScoreCalculation = (neighbourhood) => {
    const max = this.props.maxSafetyData;

    const safetyData = neighbourhood.data.safetyData;
    let total = 0;
    for (let key in safetyData) {
        total += safetyData[key]
    }

    const score = (max - total) / max
    return (score * 100).toFixed(2);
  }

  render() {
    const {app, neighbourhood,  max, safetyScore, } = this.props
    const {searchedReviews, allReviews} = this.state

    const currentUser = app.state.currentUser
    const name = neighbourhood.neighbourhoodName;
    const neighbId = neighbourhood._id
    const population2011 = neighbourhood.data.population

    // Other stats

    return (
      <div>
         {app.state.currentUser ? <UserSidebar app = {app} showMenu={true}/> : 
            <SidebarNonHome showMenu={true} />}


         <NeighbourhoodPageStyled>
          <div className="header-content">
            <h1 className="title">{name}</h1>
              <ul>
                <li>
                  <StarOutlineIcon className="icon"/>
                  <p>Overall User Rating
                  <br/> {allReviews ? this.avgUserRating(allReviews) : 0}/5
                  </p>
                </li>
                <li>
                  <HealthAndSafetyIcon className="icon"/>
                  <p>Safety Score
                  <br/> {this.safetyScoreCalculation(neighbourhood)}/100
                  </p>
                  
                </li>
                <li>
                  <GroupsIcon className="icon"/>
                  <p>Population (2011)
                  <br/> {population2011}
                  </p>
                  
                </li>
              </ul>
          </div>

          <div className='bottom-content'>
            <UserReviewsStyled className="userReviews">
              <SearchBar parent={this} filter={this.filterReviews} className="searchBar"/>
              {searchedReviews ? searchedReviews.map((review) => {
                return (
                  <UserReview key={uid(review)}
                  userId={review.userId}
                  username={review.username}
                  review={review.review} />
                )
              })
              : allReviews ? allReviews.map((review) => {
                return (
                    <UserReview key={uid(review)}
                    userId={review.userId}
                    username={review.username}
                    review={review.review} />
                  )
                })
              : null
              }
            </UserReviewsStyled>
              
            <ReviewFormStyled className="reviewForm">
                <UserReviewForm page={this} currUser={currentUser} neighbName={name} neighbId={neighbId} />
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
  width: 400px;
  background-color: #EBEBEB;
  float: left;
`

const UserReviewsStyled = styled.div`
  float: left;
  position: relative;
  width: 900px;
  max-height: 900px;
  overflow-y: auto;
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