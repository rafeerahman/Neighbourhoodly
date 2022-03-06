import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import pickachuAvatar from '../images/pickachuAvatar.png'

export class Profile extends Component {
    state = {
        currentUser: "Bob Sally", // User will probably have avatar property and name, so get from there if they post a review.
        avatar: pickachuAvatar,
        neighbourhood: "Yonge-St Clair",
        origin: "Toronto, Ontario",
        allDbReviews: [
          {
            user: "Bob Sally",
            avatar: pickachuAvatar,
            reviewTitle: "Lots of things to do",
            date: "2022/03/01",
            starRating: 4,
            reviewBody: "This neighbourhood felt very safe and I liked it."
          }
        ]
      }
    render() {
        let {data, isLoggedIn, isAdmin} = this.props
        console.log("Hello from profile page") 
        return (
            <div>
                {/* <Hamburger isLoggedIn={isLoggedIn}/> */}
                <Sidebar className="sidebar" 
                    SignInType={isLoggedIn() ? "MainMenu" : "LogIn"}
                    handleAdmin={isAdmin}
                    tab1="About Us"
                    tab2="Neighbourhoods"
                    tab3="Rankings"
                    tab4="Home" 
                    showMenu={true}/>  
                        <ProfileStyled>
                        <div className="header-content"> 
                            <AccountCircleIcon className="icon" sx={{ fontSize: 64}}/>
                            <h1>My Profile</h1>
                        </div>
                        <div className="profile-content" >
                            <div className="profile-strip">
                                <div className = "profile"></div> 
                                <img src = {this.state.avatar} alt = "avatar" width = '128px' height = '128px'/>
                                <div className="profile-info"> 
                                    <name>{this.state.currentUser}</name>
                                    <p className="location">{this.state.neighbourhood}, <br></br>{this.state.origin}</p>
                                </div>

                            </div> 
                        </div>
                        </ProfileStyled> 
            </div>      
        )
    }
}
const ProfileStyled = styled.div`
    float: left;
    position: relative;
    margin: 5% 0 0 10%;
    margin-left: 320px;

    .header-content {
        display: flex;
        align-items: center;
        margin-left: 16px;
        margin-bot: 16px;

        .icon: {
        }
        h1 {
            margin-left: 8px;
            font-style: normal;
            font-size: 36px;
            font-weight: 500;
            line-height: 84px;
    
        }
    }
    .profile-content {
        display: flex;
        background: #E5E5E5;
        width: 1200px;
        height: 700px;

        .profile-strip{
            display: flex;
            margin-top: 64px;
            width: 1200px;
            height: 200px;

            background: rgba(146, 135, 135, 0.5);
            
            .profile-info{

                display: inline-block;
                vertical-align: middle;

                name {
                    margin-top: 32px;
                    margin-left: 32px;
                    font-style: normal;
                    font-size: 32px;
                    font-weight: 500;
                    line-height: 84px;        
                }
                
                .location {
                    margin-top: 32px;
                    margin-left: 32px;
                    font-style: normal;
                    font-size: 16px;
                    font-weight: 500;
                }
            }
            img {
                margin-top: 32px;
                margin-left: 32px;
                border: 2px solid;
                border-radius: 50%;
            }
        }
    }
`
export default Profile