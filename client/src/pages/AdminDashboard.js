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
import { getUsers, removeUser } from '../actions/userActions/admin'

export class AdminDashboard extends React.Component {

    state = { 
        users: [] 
    }

    render(){
        const {app} = this.props
        if (this.state.users.length === 0) {
            getUsers(this)
        }
        return(
            <div>
                {app.state.currentUser ? <UserSidebar app = {app} showMenu={true}/> : 
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user) => {
                                return(
                                <tr key={uid(user)}>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <Popup trigger={<button className="button">View Reviews</button>} modal>
                                        <AdminReviews user={user._id}>  </AdminReviews>
                                    </Popup>
                                    {user.isAdmin ? null : <button onClick={() => {removeUser(this, user._id)}}>Ban User</button>}
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