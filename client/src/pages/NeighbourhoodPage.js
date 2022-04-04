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
import SidebarNonHome from '../components/SidebarNonHome';
import UserSidebar from '../components/UserSidebar';
import GroupsIcon from '@mui/icons-material/Groups';
import { getReviewsByNeighbourhood } from '../actions/getReviewsByNeighbourhood';

export class NeighbourhoodPage extends Component {
  componentDidMount() {
    getReviewsByNeighbourhood(this)
  }

  state = {
    search: "",
    allReviews: null,
    searchedReviews: null,

    allDbReviews: this.props.reviews
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

  render() {
    // make a func to calculate avg rating 

    const {app, neighbourhood,   safetyScore, avgUserRating} = this.props
    const {searchedReviews, allReviews} = this.state

    const currentUser = app.state.currentUser
    const name = neighbourhood.neighbourhoodName;
    const population2011 = neighbourhood.data.population

    // Other stats


    return (
      <div>
         {/* <Hamburger isLoggedIn={isLoggedIn}/> */}
         {currentUser ? <UserSidebar app = {app} showMenu={true}/> : 
            <SidebarNonHome showMenu={true} />}

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
                <UserReviewForm page={this} currUser={currentUser} neighbId={name} />
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