import React from 'react';
import '../App.css';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components'
import { uid } from 'react-uid'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AdminReviews } from '../components/AdminReviews';
import SidebarNonHome from '../components/SidebarNonHome';
import UserSidebar from '../components/UserSidebar';

export class AdminDashboard extends React.Component {

    state = {
        reviews: this.props.reviews
    }

    removeReview = (review) => {
        this.setState({
            reviews: this.state.reviews.filter(other => other !== review)
        })
    }

    render(){
        const {user, app, isAdmin, users} = this.props
        return(
            <div>
                {user ? <UserSidebar app = {app} showMenu={true}/> : 
                <SidebarNonHome showMenu={true} />}

                <div id="admin">
                    <div className="title">
                        Administrator Dashboard
                    </div>
                </div>
            <Dashboard>
                <table className="userTable">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Total Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return(
                                <tr key={uid(user)}>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td>{this.state.reviews.filter(review => review.email === user.email).length}</td>
                                    <Popup trigger={<button className="button">View Reviews</button>} modal>
                                        <AdminReviews reviews={this.state.reviews} user={user} removeReview={this.removeReview}> </AdminReviews>
                                    </Popup>
                                    {user.type === "admin" ? null :
                                    <button onClick={() => {
                                        this.props.removeUser(user.email)
                                        }}>
                                        Ban User
                                    </button>}
                                </tr> 
                                )
                            })
                        }
                    </tbody>
                </table>
            </Dashboard>
            </div>
        )
    }
}

const Dashboard = styled.div`
    float: left;
    position: relative;
    width: 1500px;
    padding: 40px;
    margin-top: 200px;
    margin-left: 350px;
    background-color: #EBEBEB;
  
`

export default AdminDashboard