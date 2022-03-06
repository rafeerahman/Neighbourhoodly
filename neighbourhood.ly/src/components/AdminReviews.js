import React from 'react';
import { uid } from 'react-uid'

export class AdminReviews extends React.Component {
    render() {
        const {reviews, user} = this.props
        const userReviews = reviews.filter(review => review.email === user.email)
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
                            userReviews.map((review ) => {
                                return(
                                <tr key={uid(review)}>
                                    <td>{review.neighbourhoodTitle}</td>
                                    <td>{review.reviewTitle}</td>
                                    <td>{review.reviewBody}</td>
                                    <td>{review.date}</td>
                                    <button onClick={() => {this.props.removeReview(review)}}>Remove Review</button>
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