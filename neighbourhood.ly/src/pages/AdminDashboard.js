import React from 'react';
import '../App.css';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components'

export class AdminDashboard extends React.Component {
    render(){
        const {data, isAdmin} = this.props
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
            <Dashboard className="dashboard">
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