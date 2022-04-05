import React, { Component } from 'react'
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getUserImageAndName } from '../actions/getUserImageById';

export default class UserReview extends Component {
  componentDidMount() {
    getUserImageAndName(this) // sets avatar_url and username by the user id in the review.
  }

  state = {
    avatar_url: null,
    username: null
  }

  render() {

    const {review, userId} = this.props
    const {avatar_url, username} = this.state

    return (
    <UserReviewStyled className="userReview">
        <Left className="left">
        {(avatar_url !== null) ? 
          <img className="avatar" src={avatar_url}/> :
          <AccountCircleIcon className="avatar"/>
         }
        <p>{username !== null ? username : null}</p>
        </Left>
        <Right className="right-content">
          <h3>{review.reviewTitle}</h3>
          <p>{review.date}</p>
          {[...Array(review.userRating)].map(iterate => {
            return <StarIcon/>
          })}
          <div className="review-content">
            <p>{review.reviewBody}</p>
          </div>
        </Right>
    </UserReviewStyled>
    )
  }
}

const UserReviewStyled = styled.div`
    display: flex; 
    align-items: center;
    margin-top: 30px;
    /* border: 1px solid black; */
`
const Left = styled.div`
    font-size: 28px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 125px;
    overflow-wrap: break-word;
    text-align: center;
    
    
    .avatar {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: 1px solid black;
        object-fit: cover;
        
    }
`

const Right = styled.div`
    position: relative;
    margin-left: 50px;
    
    h3 {
        font-size: 28px;
        font-weight: 600;
    }
    
    p {
        font-size: 20px;
    }
    
`