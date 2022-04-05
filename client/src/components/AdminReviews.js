import React from 'react';
import { uid } from 'react-uid'
import { deleteReviewById } from '../actions/deleteReviewById';
import { getReviewsByUserId } from '../actions/getReviewsByUser';

export class AdminReviews extends React.Component {

    state = {
        reviews: []
    }

    render() {
        const { user } = this.props
        getReviewsByUserId(this, user)
        return (
            <table className="userTable">
                    <thead>
                        <tr>
                            <th>Neighbourhood</th>
                            <th>Title</th>
                            <th>Review Body</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.reviews.map((review ) => {
                                return(
                                <tr key={uid(review)}>
                                    <td>{review.neighbourhoodName}</td>
                                    <td>{review.review.reviewTitle}</td>
                                    <td>{review.review.reviewBody}</td>
                                    <td>{review.review.date}</td>
                                    <button onClick={() => {deleteReviewById(review._id)}}>Remove Review</button>
                                </tr> 
                                )
                            })
                        }
                    </tbody>
                </table>
        )
    }
}

export default AdminReviews;