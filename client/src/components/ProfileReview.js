import React, { Component } from 'react'
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteReviewById } from '../actions/deleteReviewById';

export class ProfileReview extends Component {

  render() {
    const {title, body, rating, date, neighbourhood, reviewId, profile} = this.props

    return (
        <div className="withDeleteContainer">
            <div className="reviewContainer">
            <div className="reviewContent">

                <div className="infoContainer">
                    <p className="neighb">{neighbourhood}</p> <p>Date posted: {date}</p>
                </div>

                <div className="left">
                    <p className="title">{title}</p>
                    <div className="icons">
                    {[...Array(rating)].map(iterate => {
                        return <StarIcon/>
                    })}
            
                    </div>
                    <p className="content">{body}</p>
                </div>
            </div>
            </div>
            <DeleteIcon className="iconDelete" sx={{ fontSize: 52}} 
            onClick={() => {
                deleteReviewById(reviewId)
                const newReviews = profile.state.reviews.filter((review, i) => {
                    return review._id !== reviewId 
                })
                
                profile.setState({
                    reviews: newReviews
                })
                
            }}/>
        </div>
        
    )
  }
}

export default ProfileReview