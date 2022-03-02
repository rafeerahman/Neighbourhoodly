import React, { Component } from 'react'
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';

export default class UserReview extends Component {
  render() {

    const {user, avatar, title, body, date, rating} = this.props

    return (
    <UserReviewStyled className="userReview">
        <Left className="left">
        <img src={avatar}/>
            <p>{user}</p>
        </Left>
        <Right className="right-content">
          <h3>{title}</h3>
          <p>{date}</p>
          {[...Array(rating)].map(iterate => {
            return <StarIcon/>
          })}
          <div className="review-content">
            <p>{body}</p>
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
    
    
    img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: 1px solid black;
        
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