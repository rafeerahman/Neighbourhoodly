import React, { Component, useState} from 'react'
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';
import { reviewSubmission } from '../actions/reviewSubmission';
import { withRouter } from 'react-router-dom';
import { getReviewsByNeighbourhoodId } from '../actions/getReviewsByNeighbourhood';

export class UserReviewForm extends Component {
    state = {
        reviewTitle: "",
        reviewContent: "",
        starRating: null
    }

    setRating = (r) => {
        this.setState({
            starRating: r
        })
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name= target.name

        this.setState({
            [name]: value   // sets the 'name' value (input variable) to the target.value
        })
    }


  render() {
    const {router, page, currUser, neighbName, neighbId} = this.props 

    return (
      <ReviewFormStyled>
          <h2>Submit a review</h2>
            <form action="" onSubmit={(e) => {
                e.preventDefault()
                if (!currUser) { return alert("You must be logged in to post a review.") }
                reviewSubmission(this, neighbName, neighbId, () => {
                    getReviewsByNeighbourhoodId(this.props.page)
                    // Clearing
                    this.setState({
                        reviewTitle: "",
                        reviewContent: "",
                        starRating: null
                    })
                })
            }}>

              <label className="input-header" htmlFor="reviewTitle">Title</label>
              <input name="reviewTitle" 
                    onChange={this.handleInputChange} 
                    value={this.state.reviewTitle}  
                    placeholder="Title"/>
              <label className="input-header" htmlFor="reviewContent">Content</label>
              <textarea 
                onChange={this.handleInputChange}
                name="reviewContent"
                value={this.state.reviewContent} 
                className="reviewContent" 
                placeholder="Write about your review"/>
              <label className="input-header">Rating</label>

              {[...Array(5)].map((iterate, i) => {
                  const rating = i + 1;
                  
                  return (
                      <label>
                        <input type="radio" value={rating} onClick={() => this.setRating(rating)} name="rating"/>
                        <StarIcon
                            style={rating <= this.state.starRating ? {fill: "#FFD27D"} : null}
                            className="icon"/>
                      </label>
                  )
              })}
            
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
            width: 100%;
            font-size: 20px;
        }

        .input-header {
            font-weight: 500;
            display: block;
            font-size: 24px;
            margin: 20px 0 0 0;
        }

        .submitReview { 
            display: block;
        }
        
        input[type="radio"] {
            display: none;
        }

        .icon {
            font-size: 48px;
            margin-right: 20px;
            fill: none;
            cursor: pointer;
            stroke: black;
            stroke-width: 1px;
            
        }

        .submitReview {
            margin-top: 20px;
            width: 100%;
            height: 75px;
            background-color: black;
            outline: none;
            border: none;
            color: white;
            font-size: 20px;
        }

        .submitReview:hover {
            background-color: #4D3D3D;
        }
        .submitReview:active {
            background-color: #4D3D3D;
            box-shadow: 0 2px #666;
            transform: translateY(1px);
        }
    }

    .reviewContent {
        width: 100%;
        height: 250px;
        font-size: 20px;
    }
    
    h2 {
        font-size: 32px;
    }
    
`
export default withRouter(UserReviewForm)