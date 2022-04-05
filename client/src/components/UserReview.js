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

    const {review} = this.props
    const {avatar_url, username} = this.state

    return (
    <UserReviewStyled className="userReview">
        <Left className="left">
        {(avatar_url !== null) ? 
          <img className="avatar" src={avatar_url} alt="avatar"/> :
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
    font-size: 150%;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    p {
      text-align: center;
      max-width: 100px;
      white-space: nowrap;
      overflow-x: auto;
      word-wrap: break-word;

      ::-webkit-scrollbar-track
      {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
      }

      ::-webkit-scrollbar
      {
        width: 10px;
        height: 5px;
        background-color: #F5F5F5;
      }

      ::-webkit-scrollbar-thumb
      {
        background-color: #000000;
        border: 1px solid #555555;
      }
    }
    
    
    .avatar {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: 1px solid black;
        object-fit: cover;
        flex: 0 0 auto;
        
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