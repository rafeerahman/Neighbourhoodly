import React, { Component } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styled from 'styled-components';

export default class 
 extends Component {
  render() {
    return (
      <ReviewFormStyled>
          <h2>Submit a review</h2>
            <form action="">
              <label for="reviewTitle">Title</label>
              <input id="reviewTitle" placeholder="Title"/>
              <label for="reviewContent">Content</label>
              <textarea className="reviewContent" name="reviewContent" placeholder="Write about your review"/>
              <label>Rating</label>
              <StarBorderIcon className="icon"/>
              <StarBorderIcon className="icon"/>
              <StarBorderIcon className="icon"/>
              <StarBorderIcon className="icon"/>
              <StarBorderIcon className="icon"/>
              <button type="submit" className="submitReview">Post</button>
            </form>
      </ReviewFormStyled>
    )
  }
}

const ReviewFormStyled = styled.div`
    form { 
        margin-bottom: 20px;
        
        input {
            width: 420px;
            font-size: 20px;
        }

        label {
            font-weight: 500;
            display: block;
            font-size: 24px;
            margin: 20px 0 0 0;
        }

        .submitReview { 
            display: block;
        }

        .icon {
            font-size: 32px;
            margin-right: 10px;
        }

        .submitReview {
            margin-top: 20px;
            width: 250px;
            height: 75px;
            background-color: black;
            outline: none;
            border: none;
            color: white;
            font-size: 20px;
        }
    }

    .reviewContent {
        width: 420px;
        height: 250px;
        font-size: 20px;
    }
    
    h2 {
        font-size: 32px;
    }
    
`
