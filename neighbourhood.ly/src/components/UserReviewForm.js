import React, { Component, useState} from 'react'
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';
import { submitReview } from '../actions/submitReview';


export default class extends Component {
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
    const {neighbourhoodPage, neighbourhoodTitle, user} = this.props 

    return (
      <ReviewFormStyled>
          <h2>Submit a review</h2>
            <form action="">
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
            
              <button type="button" onClick={() => submitReview(neighbourhoodPage, this, user, neighbourhoodTitle)} className="submitReview">Post</button>
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
            margin-right: 15px;
            fill: none;
            cursor: pointer;
            stroke: black;
            stroke-width: 1px;
            
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
        width: 100%;
        height: 250px;
        font-size: 20px;
    }
    
    h2 {
        font-size: 32px;
    }
    
`
