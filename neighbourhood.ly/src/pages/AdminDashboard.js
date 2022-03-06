import React from 'react';
import '../App.css';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components'
import { uid } from 'react-uid'

export class AdminDashboard extends React.Component {
    render(){
        const {users, reviews, isAdmin} = this.props
        return(
            <div>
                <Sidebar className="sidebar" 
                SignInType="MainMenu"
                handleAdmin={isAdmin}
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
                            users.map((user) => {
                                return(
                                <tr key={uid(user)}>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td>{reviews.filter(review => review.email === user.email).length}</td>
                                    <button >View Reviews</button>
                                    <button >Ban User</button>
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