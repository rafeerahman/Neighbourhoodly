import React from 'react';
import '../App.css';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components'
import { uid } from 'react-uid'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AdminReviews } from '../components/AdminReviews';

export class AdminDashboard extends React.Component {

    state = { 
        reviews: [], //temp
        users: [] //temp
    }

    removeReview = (review) => {
        this.setState({
            reviews: this.state.reviews.filter(other => other !== review)
        })
    }

    render(){
        const { app } = this.props
        return(
            <div>
                <Sidebar className="sidebar" 
                SignInType="MainMenu"
                tab1="About Us"
                tab2="Neighbourhoods"
                tab3="Rankings"
                tab4="Home" 
                showMenu={true}/>

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
                            this.state.users.map((user) => {
                                return(
                                <tr key={uid(user)}>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td>{this.state.reviews.filter(review => review.email === user.email).length}</td>
                                    <Popup trigger={<button className="button">View Reviews</button>} modal>
                                        <AdminReviews reviews={this.state.reviews} app={app} removeReview={this.removeReview}> </AdminReviews>
                                    </Popup>
                                    {user.type === "admin" ? null :
                                    <button onClick={() => {
    
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