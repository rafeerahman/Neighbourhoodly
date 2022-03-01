import React, { Component } from 'react'
import pickachuAvatar from '../images/pickachuAvatar.png'
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';

export default class UserReview extends Component {
  render() {
    return (
    <UserReviewStyled className="userReview">
        <Left className="left">
            <p>Bob Sally</p>
            <img src={pickachuAvatar}/>
        </Left>
        <Right className="right-content">
          <h3>Review title</h3>
          <p>Date: 2022/03/01</p>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <div className="review-content">
            <p>What a great neighbourhood!</p>
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