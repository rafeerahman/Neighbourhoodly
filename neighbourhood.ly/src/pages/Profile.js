import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import pickachuAvatar from '../images/pickachuAvatar.png'
import EditIcon from '@mui/icons-material/Edit';

export class Profile extends Component {
    state = {
        user: this.props.appState.userEmail, // Take from the state later
        username: "Bob Sally", // User will probably have avatar property and name, so get from there if they post a review.
        avatar: pickachuAvatar,
        neighbourhood: "Yonge-St Clair",
        origin: "Toronto, Ontario",
        description: "Businessman and part-time neighbourhood explorer of Toronto.",
        reviews: this.props.reviews.filter(element => element.email === this.props.appState.userEmail),
      }

    render() {
        const {isLoggedIn, isAdmin} = this.props
        console.log("Hello from profile page") 
        return (
            <div>
                {/* <Hamburger isLoggedIn={isLoggedIn}/> */}
                <Sidebar className="sidebar" 
                    SignInType={isLoggedIn() ? "MainMenu" : "LogIn"}
                    isAdmin={isAdmin}
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
                                    <h2>{this.state.username}</h2>
                                    <p className="location">{this.state.neighbourhood}, <br></br>{this.state.origin}</p>
                                </div>
                            </div> 
                            <div className="bottom-section">
                                <h3>About me:</h3>
                                <p className="desc">{this.state.description}</p>  
                                <h4>Recent Review:</h4>  
                                <div className="reviewContainer"></div>
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
        display: inline-block;
        background: #E5E5E5;
        width: 1000px;
        height: 700px;

        .profile-strip{
            display: flex;
            margin-top: 64px;
            width: 1000px;
            height: 200px;

            background: rgba(146, 135, 135, 0.5);
            
            .profile-info{

                display: inline-block;
                vertical-align: middle;

                h2 {
                    margin-top: 8px;
                    margin-left: 32px;
                    font-style: normal;
                    font-size: 32px;
                    font-weight: 500;
                    line-height: 84px;        
                }
                
                .location {
                    margin-top: 24px;
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

        .bottom-section{
            display: inline-block;
            margin-top: 16px;
            margin-left: 32px;
            width: 1000px;
            height: 200px; 

            h3{
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 16px;   
                color: #928787;
            }
            .desc {
                margin-top: 16px;
                font-style: normal;
                font-size: 16px;
            }

            h4{
                margin-top: 64px;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 16px;   
            }

            .reviewContainer{
                display: inline-block;
                border-radius: 25px;
                margin-top: 16px;
                
                width: 600px;
                height: 150px; 

                background: #C4C4C4;
            }
        }
    }
`
export default Profile