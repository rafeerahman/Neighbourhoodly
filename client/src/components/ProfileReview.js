import React, { Component } from 'react'
import StarIcon from '@mui/icons-material/Star';

export class ProfileReview extends Component {

  render() {
    const {title, body, rating, date, neighbourhood} = this.props

    return (
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
    )
  }
}

export default ProfileReview